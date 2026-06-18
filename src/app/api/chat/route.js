import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    // 1. Verify API Key presence and placeholders
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY_HERE" || apiKey.trim() === "") {
      return Response.json(
        {
          error: "API Key Configuration Required",
          status: "missing_api_key",
          message: "Please configure your GEMINI_API_KEY in the .env.local file at the root of the project, then restart your development server.",
        },
        { status: 400 }
      );
    }

    // 2. Parse request payload
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Invalid payload: 'messages' array is required." },
        { status: 400 }
      );
    }

    // 3. Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(apiKey);

    // Using configurable model (defaulting to unthrottled gemini-2.5-flash-lite)
    const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction:
        "You are Cognix, an ultra-premium, professional, and sophisticated AI assistant. " +
        "You possess advanced cognitive reasoning, coding, and creative capabilities. " +
        "Your style is modern, direct, polite, and intellectually engaging. " +
        "CRITICAL: Keep responses highly concise, efficient, and direct. Avoid long preambles, conversational fluff, or repetition. Get straight to the point unless a comprehensive explanation is specifically requested. " +
        "When explaining concepts, structure your replies beautifully with bullet points or numbers. " +
        "When writing code, always format the response inside code blocks with correct syntax highlights (e.g. ```javascript) and write optimized, readable code with simple code comments."
    });

    // 4. Map client message history to Gemini API format (limiting history to last 6 messages to conserve tokens)
    const latestMessage = messages[messages.length - 1].content;
    const historyMessages = messages.slice(0, -1);
    const slicedHistory = historyMessages.slice(-6); // sliding window of 6 messages (3 user, 3 assistant)
    
    const history = slicedHistory.map((msg) => {
      // Map 'assistant' role to 'model' for Gemini compatibility
      const role = msg.role === "assistant" || msg.role === "model" ? "model" : "user";
      return {
        role: role,
        parts: [{ text: msg.content }],
      };
    });

    // 5. Create chat instance with mapped history
    const chat = model.startChat({
      history: history,
    });

    // 6. Generate Response
    const result = await chat.sendMessage(latestMessage);
    const responseText = result.response.text();

    return Response.json({
      role: "assistant",
      content: responseText,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error("Gemini API backend error:", error);
    const msg = error.message || "";
    const isQuota = msg.includes("429") || msg.toLowerCase().includes("quota") || msg.toLowerCase().includes("too many requests");

    // Extract retry delay from Gemini's structured error details when available
    let retryDelay = null;
    try {
      if (isQuota && error.errorDetails) {
        const retryInfo = error.errorDetails.find(
          (d) => d["@type"] === "type.googleapis.com/google.rpc.RetryInfo"
        );
        if (retryInfo?.retryDelay) retryDelay = retryInfo.retryDelay;
      }
    } catch (_) { }

    return Response.json(
      {
        error: isQuota ? "Quota Exceeded" : "Internal Server Error",
        status: isQuota ? "quota_exceeded" : "error",
        message: isQuota
          ? `You've exceeded the Gemini API free-tier quota.${retryDelay ? ` Please retry in ${retryDelay}.` : " Please wait a moment and try again."}`
          : msg || "An unexpected error occurred while communicating with the Gemini AI service.",
        ...(retryDelay && { retryDelay }),
      },
      { status: isQuota ? 429 : 500 }
    );
  }
}
