export const dynamic = "force-dynamic";
export const revalidate = 0;

const SUGGESTIONS_POOL = [
  {
    category: "code",
    prompt: "Architect an autonomous multi-agent coding workflow using LangGraph, tool calling, and hierarchical routing."
  },
  {
    category: "idea",
    prompt: "Design a high-performance local RAG system using vector embeddings, hybrid search, and semantic chunking."
  },
  {
    category: "code",
    prompt: "Outline a pipeline to fine-tune a lightweight 7B model using LoRA adapters for domain-specific code generation."
  },
  {
    category: "compass",
    prompt: "Design a high-performance local RAG architecture using hybrid sparse-dense vector embeddings."
  },
  {
    category: "book",
    prompt: "Compare latency and context utilization between FlashAttention-2 and standard Multi-Head Attention mechanisms."
  },
  {
    category: "code",
    prompt: "Design a structured output generation layer using Pydantic, JSON Schema constraints, and grammar-based sampling."
  },
  {
    category: "compass",
    prompt: "Optimize LLM context caching for repetitive system prompts using vLLM page attention allocation."
  },
  {
    category: "code",
    prompt: "Implement a guardrail filter using LlamaGuard and alignment checks to prevent prompt injection attacks."
  },
  {
    category: "idea",
    prompt: "Architect a scalable vector database sync service using Debezium CDC, Kafka, and Qdrant collections."
  },
  {
    category: "code",
    prompt: "Design a continuous RLHF pipeline using DPO (Direct Preference Optimization) for fine-tuning reward metrics."
  },
  {
    category: "compass",
    prompt: "Draft an evaluation protocol for local LLM code completion models using HumanEval metrics and unit tests."
  },
  {
    category: "idea",
    prompt: "Optimize multi-modal visual embedding parsing for complex technical flowcharts and architectural blueprints."
  },
  {
    category: "code",
    prompt: "Build a sparse-attention context window loader to process 100k+ token codebases in local developer IDEs."
  },
  {
    category: "compass",
    prompt: "Design a hybrid semantic chunking parser using sentence boundary splits and token-size threshold overlays."
  },
  {
    category: "code",
    prompt: "Architect a federated vector index to securely search across isolated private cloud clusters."
  },
  {
    category: "idea",
    prompt: "Compare performance trade-offs of FP16, INT8, and GGUF quantization formats for local Edge CPU hosting."
  }
];

export async function GET() {
  try {
    // Shuffle suggestions pool and return 4 items instantly without calling the Gemini API.
    // This saves tokens, preserves API request quotas, and improves load time to 0ms.
    const shuffled = [...SUGGESTIONS_POOL].sort(() => 0.5 - Math.random());
    return Response.json(shuffled.slice(0, 4));
  } catch (error) {
    console.error("Suggestions API error:", error);
    return Response.json(SUGGESTIONS_POOL.slice(0, 4));
  }
}
