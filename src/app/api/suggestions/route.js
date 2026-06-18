import { GoogleGenerativeAI } from "@google/generative-ai";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Standard, high-fidelity developer fallback list in case of network or API limits
const FALLBACKS = [
  {
    category: "code",
    prompt: "Autonomous multi-agent coding workflows using LangGraph and hierarchical tool routing"
  },
  {
    category: "idea",
    prompt: "High-performance local RAG architectures using hybrid vector embedding search"
  },
  {
    category: "book",
    prompt: "Lightweight 7B model fine-tuning using LoRA adapters for code generation"
  },
  {
    category: "compass",
    prompt: "Sparse-attention context window scaling metrics for long-context retrieval"
  }
];

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY || "";

    if (!apiKey) {
      return Response.json(FALLBACKS);
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = 
      "You are a state-of-the-art AI developer suggestions generator. " +
      "Generate exactly 4 highly advanced, latest AI-related topics or developer concepts for an AI software engineering workspace. " +
      "These topics must be extremely relevant to modern AI engineering (e.g. multi-agent systems, local LLM fine-tuning, RAG retrieval techniques, vector databases, neural search, context windows, quantization, etc.). " +
      "CRITICAL: Do NOT generate any topics related to 'HNSW', 'IVF', 'IVF-Flat', or 'indexing comparison'. " +
      "CRITICAL: The 4 generated concepts MUST feature a balanced variety of categories (e.g. exactly 1 'code', 1 'compass', 1 'book', and 1 'idea' category) - never include duplicate 'code' or 'idea' categories. " +
      "CRITICAL: The prompt text MUST be phrased in a highly informative presentation format as a concise, expert developer topic or concept rather than a conversational question. " +
      "Example of informative presentation: 'Autonomous coding workflows using LangGraph and tool calling' instead of 'How do I build an autonomous workflow...'. " +
      "Keep each prompt concise, professional, and under 12 words. " +
      "Format your response strictly as a JSON array of 4 objects. Each object MUST have: " +
      '- "prompt": The concise, informative AI developer concept. ' +
      '- "category": Either "code" or "idea" or "compass" or "book". ' +
      "Return ONLY the raw JSON array (do NOT wrap it in markdown code blocks like ```json or backticks, just raw text starting with [ and ending with ]).";

    const result = await model.generateContent(systemPrompt);
    const text = result.response.text().trim();

    // Resilient Regex extraction to isolate the JSON array from any potential markdown wrapper or conversational text
    const jsonMatch = text.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0]);
        if (Array.isArray(parsed) && parsed.length === 4) {
          return Response.json(parsed);
        }
      } catch (innerParseError) {
        console.warn("Suggestions inner JSON parse failed:", innerParseError);
      }
    }

    // Try parsing the direct response text as fallback
    try {
      const parsed = JSON.parse(text.replace(/^```(json)?/, "").replace(/```$/, "").trim());
      if (Array.isArray(parsed) && parsed.length === 4) {
        return Response.json(parsed);
      }
    } catch (parseError) {
      console.warn("Suggestions direct parse fallback failed:", parseError);
    }

    return Response.json(FALLBACKS);
  } catch (error) {
    console.error("Suggestions API main fetch error:", error);
    return Response.json(FALLBACKS);
  }
}
