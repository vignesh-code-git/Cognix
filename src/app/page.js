"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";

// ==========================================
// High-Fidelity SVG Icon Components
// ==========================================

const SparkleIcon = ({ size = 20, className = "", useGradient = false }) => {
  const gradientId = "animated-brand-gradient-" + size;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={useGradient ? `url(#${gradientId})` : "currentColor"} className={className} xmlns="http://www.w3.org/2000/svg">
      {useGradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="28%">
            <stop offset="0%" stopColor="#4285f4">
              <animate attributeName="stop-color" values="#4285f4; #9b72cb; #d96570; #e2a05d; #d96570; #9b72cb; #4285f4" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="18%" stopColor="#9b72cb">
              <animate attributeName="stop-color" values="#9b72cb; #d96570; #e2a05d; #d96570; #9b72cb; #4285f4; #9b72cb" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="38%" stopColor="#d96570">
              <animate attributeName="stop-color" values="#d96570; #e2a05d; #d96570; #9b72cb; #4285f4; #9b72cb; #d96570" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="58%" stopColor="#e2a05d">
              <animate attributeName="stop-color" values="#e2a05d; #d96570; #9b72cb; #4285f4; #9b72cb; #d96570; #e2a05d" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="78%" stopColor="#d96570">
              <animate attributeName="stop-color" values="#d96570; #9b72cb; #4285f4; #9b72cb; #d96570; #e2a05d; #d96570" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="90%" stopColor="#9b72cb">
              <animate attributeName="stop-color" values="#9b72cb; #4285f4; #9b72cb; #d96570; #e2a05d; #d96570; #9b72cb" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#4285f4">
              <animate attributeName="stop-color" values="#4285f4; #9b72cb; #d96570; #e2a05d; #d96570; #9b72cb; #4285f4" dur="10s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      )}
      {/* Authentic Google Gemini 3-Star Logo - mathematically centered on (12,12) with enlarged secondary stars */}
      {/* Large Star (Left/Center) */}
      <path d="M9.5 3.5Q9.5 11 2 11Q9.5 11 9.5 18.5Q9.5 11 17 11Q9.5 11 9.5 3.5Z" />
      {/* Medium Star (Top Right) - Enlarged by 30% */}
      <path d="M19 3.5Q19 7.5 15 7.5Q19 7.5 19 11.5Q19 7.5 23 7.5Q19 7.5 19 3.5Z" />
      {/* Small Star (Bottom Right) - Enlarged by 50% */}
      <path d="M16.5 15Q16.5 18 13.5 18Q16.5 18 16.5 21Q16.5 18 19.5 18Q16.5 18 16.5 15Z" />
    </svg>
  );
};

const PanelToggleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
);

const CloseIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ResetIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <polyline points="3 3 3 8 8 8" />
  </svg>
);

const PencilIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const SearchIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#cognix-icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const CompassIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#cognix-icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

const CodeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#cognix-icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 6 22 12 16 18"></polyline>
    <polyline points="8 18 2 12 8 6"></polyline>
  </svg>
);

const BulbIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#cognix-icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <line x1="9" y1="18" x2="15" y2="18"></line>
    <line x1="10" y1="22" x2="14" y2="22"></line>
  </svg>
);

const BinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const SendIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}>
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
  </svg>
);

const AttachmentIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

const MicrophoneIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const EditIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

const AlertIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

// Comprehensive pool of Cutting-Edge AI Engineering Suggestions (Changes dynamically on refresh)
const AI_POOL = [
  {
    icon: <CodeIcon size={20} />,
    prompt: "Architect an autonomous multi-agent coding workflow using LangGraph, tool calling, and hierarchical routing.",
  },
  {
    icon: <BulbIcon size={20} />,
    prompt: "Design a high-performance local RAG system using vector embeddings, hybrid search, and semantic chunking.",
  },
  {
    icon: <CodeIcon size={20} />,
    prompt: "Outline a pipeline to fine-tune a lightweight 7B model using LoRA adapters for domain-specific code generation.",
  },
  {
    icon: <CompassIcon size={20} />,
    prompt: "Design a high-performance local RAG architecture using hybrid sparse-dense vector embeddings.",
  },
  {
    icon: <BookIcon size={20} />,
    prompt: "Compare latency and context utilization between FlashAttention-2 and standard Multi-Head Attention mechanisms.",
  },
  {
    icon: <CodeIcon size={20} />,
    prompt: "Design a structured output generation layer using Pydantic, JSON Schema constraints, and grammar-based sampling.",
  },
  {
    icon: <CompassIcon size={20} />,
    prompt: "Optimize LLM context caching for repetitive system prompts using vLLM page attention allocation.",
  },
  {
    icon: <CodeIcon size={20} />,
    prompt: "Implement a guardrail filter using LlamaGuard and alignment checks to prevent prompt injection attacks.",
  },
  {
    icon: <BulbIcon size={20} />,
    prompt: "Architect a scalable vector database sync service using Debezium CDC, Kafka, and Qdrant collections.",
  },
  {
    icon: <CodeIcon size={20} />,
    prompt: "Design a continuous RLHF pipeline using DPO (Direct Preference Optimization) for fine-tuning reward metrics.",
  },
  {
    icon: <CompassIcon size={20} />,
    prompt: "Draft an evaluation protocol for local LLM code completion models using HumanEval metrics and unit tests.",
  },
  {
    icon: <BulbIcon size={20} />,
    prompt: "Optimize multi-modal visual embedding parsing for complex technical flowcharts and architectural blueprints.",
  },
  {
    icon: <CodeIcon size={20} />,
    prompt: "Build a sparse-attention context window loader to process 100k+ token codebases in local developer IDEs.",
  },
  {
    icon: <CompassIcon size={20} />,
    prompt: "Design a hybrid semantic chunking parser using sentence boundary splits and token-size threshold overlays.",
  },
  {
    icon: <CodeIcon size={20} />,
    prompt: "Architect a federated vector index to securely search across isolated private cloud clusters.",
  },
  {
    icon: <BulbIcon size={20} />,
    prompt: "Compare performance trade-offs of FP16, INT8, and GGUF quantization formats for local Edge CPU hosting.",
  }
];

export default function Home() {
  const [conversations, setConversations] = useState([
    { id: "default", title: "New Chat", messages: [] }
  ]);
  const [activeConversationId, setActiveConversationId] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  // Flag to track client-side mounting to prevent SSR hydration mismatches
  const [isMounted, setIsMounted] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Dynamic Randomized Suggestions State
  const [suggestions, setSuggestions] = useState([]);

  // Voice Input Audio State
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // Collapse & Toggle State
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [apiKeyError, setApiKeyError] = useState(null);

  // Pull to refresh states
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const touchStartRef = useRef(null);
  const chatFeedRef = useRef(null);

  const handleTouchStart = (e) => {
    // Only allow pull-to-refresh on mobile/tablet screen widths
    if (typeof window !== "undefined" && window.innerWidth > 1024) return;
    // Only pull to refresh if we are at the very top of the scroll container
    if (chatFeedRef.current && chatFeedRef.current.scrollTop === 0 && !isRefreshing) {
      touchStartRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (touchStartRef.current === null) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - touchStartRef.current;

    // Only handle pull down (diff > 0)
    if (diff > 0) {
      // Apply a resistance factor so it feels natural
      const pull = Math.min(80, diff * 0.4);
      setPullDistance(pull);

      // Prevent browser default bounce/scroll behavior during active pull
      if (diff > 10) {
        if (e.cancelable) e.preventDefault();
      }
    }
  };

  const handleTouchEnd = async () => {
    if (touchStartRef.current === null) return;

    const wasPulledFarEnough = pullDistance >= 50;
    touchStartRef.current = null;
    setPullDistance(0);

    if (wasPulledFarEnough) {
      setIsRefreshing(true);
      await refreshSuggestions();
      // Keep loader visible briefly for smooth transition
      setTimeout(() => {
        setIsRefreshing(false);
      }, 800);
    }
  };

  const chatEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Client-side post-mount loader
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const savedConvs = localStorage.getItem("cognix_conversations");
      if (savedConvs) {
        try {
          const parsed = JSON.parse(savedConvs);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setConversations(parsed);
          }
        } catch (e) {
          console.error("Failed to parse saved sessions:", e);
        }
      }
      const savedId = localStorage.getItem("cognix_active_id");
      if (savedId) {
        setActiveConversationId(savedId);
      }
    }
  }, []);

  // Sync active conversations to localStorage after client-side mounting is complete
  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      localStorage.setItem("cognix_conversations", JSON.stringify(conversations));
    }
  }, [conversations, isMounted]);

  // Sync active tab ID to localStorage after client-side mounting is complete
  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      localStorage.setItem("cognix_active_id", activeConversationId);
    }
  }, [activeConversationId, isMounted]);

  // Derived current active conversation context
  const activeConv = conversations.find((c) => c.id === activeConversationId) || conversations[0] || { id: "default", title: "New Chat", messages: [] };
  const messages = activeConv.messages;

  // Fetch live suggestion cards from Gemini in real-time on mount/refresh
  const refreshSuggestions = async () => {
    try {
      const res = await fetch("/api/suggestions");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length === 4) {
          // Map the dynamic JSON category to matching visual SVG icons
          const mapped = data.map((item) => {
            let iconElement = <CompassIcon size={20} />;
            if (item.category === "code") {
              iconElement = <CodeIcon size={20} />;
            } else if (item.category === "idea") {
              iconElement = <BulbIcon size={20} />;
            } else if (item.category === "book") {
              iconElement = <BookIcon size={20} />;
            }
            return {
              icon: iconElement,
              prompt: item.prompt,
            };
          });
          setSuggestions(mapped);
          return;
        }
      }
    } catch (err) {
      console.warn("Failed to fetch live suggestions from Gemini API. Falling back to local randomized pool.", err);
    }

    // Safe client-side fallback to random shuffle from the pre-defined local pool
    const shuffled = [...AI_POOL].sort(() => 0.5 - Math.random());
    setSuggestions(shuffled.slice(0, 4));
  };

  useEffect(() => {
    refreshSuggestions();
  }, []);

  // Keep the input text field always focused and active (even when clicking outside empty areas)
  useEffect(() => {
    if (isMounted && textareaRef.current && !isLoading) {
      textareaRef.current.focus();
    }

    const handleGlobalClick = (e) => {
      if (!isMounted || isLoading) return;
      const path = e.composedPath() || [];
      const isInteractive = path.some((el) => {
        if (!el.tagName) return false;
        const tag = el.tagName.toLowerCase();
        return (
          tag === "button" ||
          tag === "input" ||
          tag === "textarea" ||
          tag === "a" ||
          el.getAttribute?.("role") === "button" ||
          (el.className && typeof el.className === "string" && (
            el.className.includes("suggestionCard") ||
            el.className.includes("tabItem") ||
            el.className.includes("newChatBtn")
          ))
        );
      });

      if (!isInteractive && textareaRef.current) {
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.focus();
          }
        }, 10);
      }
    };

    document.addEventListener("pointerdown", handleGlobalClick);
    return () => {
      document.removeEventListener("pointerdown", handleGlobalClick);
    };
  }, [activeConversationId, isLoading, isMounted]);

  // Initialize Speech Recognition Hook
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.continuous = false;
        recog.interimResults = false;
        recog.lang = "en-US";

        recog.onstart = () => {
          setIsListening(true);
        };

        recog.onend = () => {
          setIsListening(false);
        };

        recog.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recog.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputValue((prev) => (prev ? `${prev} ${transcript}` : transcript));
        };

        setRecognition(recog);
      }
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!recognition) {
      alert("Voice recognition is not natively supported or permitted in this browser configuration.");
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (err) {
        console.error("Failed to start voice recognition:", err);
      }
    }
  };

  // Auto-Responsive collapse on screen size resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }

      if (window.innerWidth > 768) {
        setMobileSidebarOpen(false);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to bottom on updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isLoading]);

  // Textarea auto-resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 180)}px`;
    }
  }, [inputValue]);

  const sendMessage = async (content) => {
    if (!content.trim() || isLoading) return;

    setApiKeyError(null);
    const userMessage = {
      role: "user",
      content: content.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];

    // Automatically derive the tab heading from the very first message text
    let newTitle = activeConv.title;
    if (messages.length === 0) {
      const plain = content.trim();
      newTitle = plain.length > 24 ? `${plain.substring(0, 24)}...` : plain;
    }

    // Save user message immediately to the active conversation tab
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConversationId
          ? { ...c, title: newTitle, messages: updatedMessages }
          : c
      )
    );

    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.status === "missing_api_key") {
          setApiKeyError({
            title: "API Key Required",
            message: data.message,
          });
          setIsLoading(false);
          return;
        } else if (response.status === 429 || data.status === "quota_exceeded" || (data.message && (data.message.includes("429") || data.message.toLowerCase().includes("quota") || data.message.toLowerCase().includes("limit")))) {
          const quotaMessage = {
            role: "assistant",
            content: `**Premium Feature Notice**

You have reached the limits of the free standard developer tier. 

### Unlock Unlimited AI Workspace Features:
* **Cognix Professional Engine**: Multi-threaded reasoning, deeper architectural context, and 100x longer context windows.
* **Unlimited High-Speed Queries**: Zero rate limits or daily query caps.
* **Enterprise Integrations**: Sync your workspace directly to GitHub, GitLab, or AWS with bank-grade security.

Upgrade to **Cognix.pro** today to continue building at full speed!`,
            timestamp: new Date().toISOString(),
          };
          setConversations((prev) =>
            prev.map((c) =>
              c.id === activeConversationId
                ? { ...c, messages: [...updatedMessages, quotaMessage] }
                : c
            )
          );
          setIsLoading(false);
          return;
        } else {
          throw new Error(data.message || data.error || "Failed to get response");
        }
      }

      // Save AI model response to the active conversation tab
      setConversations((prev) =>
        prev.map((c) =>
          c.id === activeConversationId
            ? { ...c, messages: [...updatedMessages, data] }
            : c
        )
      );
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsgText = error.message || "";
      const isQuota = errorMsgText.includes("429") || errorMsgText.toLowerCase().includes("quota") || errorMsgText.toLowerCase().includes("limit");

      const errorMessage = {
        role: "assistant",
        content: isQuota ? `⚠️ **Premium Feature Notice**

You have reached the limits of the free standard developer tier. 

### 🚀 Unlock Unlimited AI Workspace Features:
* **Cognix Professional Engine**: Multi-threaded reasoning, deeper architectural context, and 100x longer context windows.
* **Unlimited High-Speed Queries**: Zero rate limits or daily query caps.
* **Enterprise Integrations**: Sync your workspace directly to GitHub, GitLab, or AWS with bank-grade security.

👉 **Upgrade to [Cognix.pro](https://cognix.pro)** today to continue building at full speed!` : `⚠️ **System Error**: I encountered an issue while communicating with my cognitive core.\n\n*Details: ${error.message || "Please check your network connection and server console."}*`,
        timestamp: new Date().toISOString(),
      };
      setConversations((prev) =>
        prev.map((c) =>
          c.id === activeConversationId
            ? { ...c, messages: [...updatedMessages, errorMessage] }
            : c
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  // Creates a brand-new workspace session tab in the sidebar
  const handleNewChat = () => {
    // Prevent duplicate empty chats
    const activeConv = conversations.find(c => c.id === activeConversationId);
    if (activeConv && activeConv.messages.length === 0) {
      setMobileSidebarOpen(false);
      setApiKeyError(null);
      return;
    }

    const existingEmpty = conversations.find(c => c.messages.length === 0);
    if (existingEmpty) {
      setActiveConversationId(existingEmpty.id);
      setMobileSidebarOpen(false);
      setApiKeyError(null);
      return;
    }

    const newId = Date.now().toString();
    const newConv = {
      id: newId,
      title: "New Chat",
      messages: [],
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveConversationId(newId);
    setMobileSidebarOpen(false);
    setApiKeyError(null);
  };

  // Sleek bottom-aligned action to wipe all conversations
  const handleDeleteAllHistory = () => {
    if (confirm("Are you sure you want to delete all chat history? This will permanently erase all active chat sessions.")) {
      const defaultConv = [{ id: "default", title: "New Chat", messages: [] }];
      setConversations(defaultConv);
      setActiveConversationId("default");
      setApiKeyError(null);
      setMobileSidebarOpen(false);
    }
  };

  // Clears the active chat tab back to an empty conversation state
  const handleClearCurrentChat = () => {
    if (confirm("Are you sure you want to clear the active conversation history? This will reset it to an empty state.")) {
      setConversations((prev) =>
        prev.map((c) =>
          c.id === activeConversationId
            ? { ...c, messages: [], title: "New Chat" }
            : c
        )
      );
      setApiKeyError(null);
      setMobileSidebarOpen(false);
    }
  };

  // Inline Markdown Text Formatter
  const parseInlineFormatting = (text, lineKey) => {
    const parts = [];
    // Match bold (**), italic (*), and inline code (`)
    const regex = /(\*\*|\*|`)(.*?)\1/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const textBefore = text.substring(lastIndex, match.index);
      if (textBefore) {
        parts.push(textBefore);
      }

      const type = match[1];
      const content = match[2];

      if (type === "**") {
        parts.push(
          <strong key={`bold-${match.index}`} style={{ fontWeight: 700, color: "var(--text-primary)" }}>
            {content}
          </strong>
        );
      } else if (type === "*") {
        parts.push(
          <em key={`italic-${match.index}`} style={{ fontStyle: "italic", color: "var(--text-primary)" }}>
            {content}
          </em>
        );
      } else {
        parts.push(
          <code
            key={`inline-code-${match.index}`}
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              padding: "0.15rem 0.35rem",
              borderRadius: "4px",
              fontSize: "0.85rem",
              color: "var(--accent-purple)",
            }}
          >
            {content}
          </code>
        );
      }

      lastIndex = regex.lastIndex;
    }

    const textAfter = text.substring(lastIndex);
    if (textAfter) {
      parts.push(textAfter);
    }

    return parts.length > 0 ? parts : text;
  };

  const formatMarkdown = (text) => {
    if (!text) return "";

    const parts = [];
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      const textBefore = text.substring(lastIndex, match.index);
      if (textBefore) {
        parts.push({ type: "text", content: textBefore });
      }

      parts.push({
        type: "code-block",
        language: match[1] || "code",
        content: match[2],
      });

      lastIndex = codeBlockRegex.lastIndex;
    }

    const textAfter = text.substring(lastIndex);
    if (textAfter) {
      parts.push({ type: "text", content: textAfter });
    }

    return parts.map((part, index) => {
      if (part.type === "code-block") {
        return (
          <pre key={`pre-${index}`} className="animate-entrance">
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                paddingBottom: "0.4rem",
              }}
            >
              <span>{part.language || "source"}</span>
              <span style={{ cursor: "pointer", color: "var(--primary-blue)" }} onClick={() => navigator.clipboard.writeText(part.content)}>
                Copy Code
              </span>
            </div>
            <code>{part.content.trim()}</code>
          </pre>
        );
      }

      const lines = part.content.split("\n");
      let inList = false;
      let listItems = [];
      const elements = [];

      for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i];

        // Clean out raw HTML entities & decode elements
        const line = rawLine
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");

        if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
          inList = true;
          const itemContent = line.replace(/^[\s]*[-*]\s+/, "");
          listItems.push(parseInlineFormatting(itemContent, i));
          continue;
        }

        if (inList && !line.trim().startsWith("- ") && !line.trim().startsWith("* ")) {
          elements.push(
            <ul key={`ul-${i}`} style={{ paddingLeft: "1.25rem", marginBottom: "0.8rem" }}>
              {listItems.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "0.25rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          );
          inList = false;
          listItems = [];
        }

        // Drop empty lines and raw dividers consisting only of hyphens, equals, asterisks, or spaces
        const trimmed = line.trim();
        if (trimmed === "" || /^[-=*_\s]+$/.test(trimmed)) continue;

        // 1. Blockquote Parsing (starts with "> ")
        if (line.startsWith("> ")) {
          elements.push(
            <blockquote
              key={`quote-${i}`}
              style={{
                borderLeft: "3px solid var(--accent-purple)",
                paddingLeft: "1rem",
                margin: "0.5rem 0 1rem",
                fontStyle: "italic",
                color: "var(--text-secondary)",
              }}
            >
              {parseInlineFormatting(line.substring(2), i)}
            </blockquote>
          );
        }
        // 2. Dynamic Hash-Heading Parsing (starts with 1 to 6 hashes "# ")
        else if (/^(#{1,6})\s+(.*)$/.test(line)) {
          const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
          const level = headingMatch[1].length;
          const headingContent = headingMatch[2];
          const fontSize = level === 1 ? "1.45rem" : level === 2 ? "1.25rem" : level === 3 ? "1.1rem" : "1.0rem";
          const marginTop = level === 1 ? "1.8rem" : level === 2 ? "1.5rem" : level === 3 ? "1.2rem" : "1.0rem";

          elements.push(
            <div
              key={`h-${i}`}
              style={{
                fontSize: fontSize,
                fontWeight: level === 1 ? 800 : level === 2 ? 700 : 650,
                color: "var(--text-primary)",
                marginTop: marginTop,
                marginBottom: "0.5rem",
                lineHeight: "1.3",
              }}
            >
              {parseInlineFormatting(headingContent, i)}
            </div>
          );
        }
        // 3. Paragraph Parsing
        else {
          elements.push(
            <p key={`p-${i}`} style={{ marginBottom: "1.15rem", lineHeight: "1.7", fontSize: "1.025rem" }}>
              {parseInlineFormatting(line, i)}
            </p>
          );
        }
      }

      if (inList && listItems.length > 0) {
        elements.push(
          <ul key="ul-end" style={{ paddingLeft: "1.25rem", marginBottom: "0.8rem" }}>
            {listItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: "0.25rem" }}>
                {item}
              </li>
            ))}
          </ul>
        );
      }

      return <div key={`text-block-${index}`}>{elements}</div>;
    });
  };

  return (
    <div className={styles.container}>
      {/* Mobile Backdrop Overlay */}
      {mobileSidebarOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setMobileSidebarOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar overlay"
        />
      )}

      <aside className={`${styles.sidebar} ${(sidebarCollapsed && !mobileSidebarOpen) ? styles.sidebarCollapsed : ""} ${mobileSidebarOpen ? styles.sidebarOpen : ""}`}>
        <div>
          {/* Header */}
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarHeaderLeft}>
              <SparkleIcon size={22} className={styles.headerSparkleIcon} useGradient={true} />
              <span className={`${styles.sidebarBrand} gemini-gradient-text`}>Cognix AI</span>
            </div>
            <button
              className={styles.hamburgerBtn}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth <= 767) {
                  setMobileSidebarOpen(false);
                } else {
                  setSidebarCollapsed(!sidebarCollapsed);
                }
              }}
              aria-label="Toggle Sidebar"
              title="Expand/Collapse Menu"
            >
              <PanelToggleIcon />
            </button>
          </div>

          {/* New Chat pill */}
          <div className={styles.newChatWrapper}>
            <button className={styles.newChatBtn} onClick={handleNewChat} title="Start a fresh chat">
              <span className={styles.newChatIconWrapper}>
                <PencilIcon />
              </span>
              <span className={styles.newChatText}>New chat</span>
            </button>
          </div>

          {/* Search Input (Only shown when sidebar is expanded) */}
          {(!sidebarCollapsed || mobileSidebarOpen) && (
            <div className={styles.searchWrapper}>
              <span className={styles.searchIconWrapper}>
                <SearchIcon />
              </span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className={styles.searchClearBtn} onClick={() => setSearchQuery("")} title="Clear search">
                  <CloseIcon size={12} />
                </button>
              )}
            </div>
          )}

          {/* Scrollable Conversation Tabs List */}
          {(!sidebarCollapsed || mobileSidebarOpen) && (
            <div className={styles.tabsContainer}>
              {conversations
                .filter((c) => c.messages.length > 0)
                .filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((conv) => {
                  const isActive = conv.id === activeConversationId;
                  return (
                    <div
                      key={conv.id}
                      className={`${styles.tabItem} ${isActive ? styles.tabItemActive : ""}`}
                      onClick={() => {
                        setActiveConversationId(conv.id);
                        setMobileSidebarOpen(false);
                        setApiKeyError(null);
                      }}
                      title={conv.title}
                    >
                      <span className={styles.tabIcon}>
                        <SparkleIcon size={22} />
                      </span>
                      <span className={styles.tabText}>{conv.title}</span>

                      {/* Delete individual chat tab close option (Always visible, clears if it is the only tab) */}
                      <button
                        className={styles.tabDeleteBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          const nonEv = conversations.filter(c => c.messages.length > 0);
                          if (nonEv.length > 1) {
                            const index = nonEv.findIndex((c) => c.id === conv.id);
                            const updated = conversations.filter((c) => c.id !== conv.id);
                            setConversations(updated);
                            if (isActive) {
                              const remainingNonEv = nonEv.filter(c => c.id !== conv.id);
                              const nextActiveIndex = index > 0 ? index - 1 : 0;
                              setActiveConversationId(remainingNonEv[nextActiveIndex]?.id || "default");
                            }
                          } else {
                            // Delete the last remaining active session cleanly and generate a brand-new clean empty session
                            const freshId = Date.now().toString();
                            setConversations([{ id: freshId, title: "New Chat", messages: [] }]);
                            setActiveConversationId(freshId);
                            setApiKeyError(null);
                          }
                        }}
                        title="Clear/Delete chat session"
                      >
                        <CloseIcon size={14} />
                      </button>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className={styles.sidebarFooter}>
          {(!sidebarCollapsed || mobileSidebarOpen) && (
            <div className={styles.menuItem} style={{ cursor: "default" }}>
              <span className={styles.menuItemIcon}>
                <SparkleIcon size={22} />
              </span>
              <span className={styles.menuItemText} style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                Cognix 1.0
              </span>
            </div>
          )}
        </div>
      </aside>

      {/* Main Workspace Column */}
      <main className={styles.main}>
        {/* Header (Clean, minimalist layout - no delete button) */}
        <header className={styles.header}>
          <div className={styles.headerTitleGroup}>
            <button
              className={styles.headerMenuBtn}
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              aria-label="Open Sidebar Menu"
            >
              <PanelToggleIcon />
            </button>
            <span className={styles.headerTitleText}>Cognix 1.0</span>
          </div>
        </header>

        {/* Scrollable conversation pane */}
        <section
          className={styles.chatFeed}
          ref={chatFeedRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Pull to Refresh Indicator */}
          {(pullDistance > 0 || isRefreshing) && (
            <div
              className={styles.pullToRefreshIndicator}
              style={{
                height: `${isRefreshing ? 50 : pullDistance}px`,
                opacity: isRefreshing ? 1 : Math.min(1, pullDistance / 50),
                transition: pullDistance === 0 ? "height 0.3s ease, opacity 0.3s ease" : "none"
              }}
            >
              <div className={styles.pullToRefreshSpinner}>
                {isRefreshing ? (
                  <span className={styles.spinnerIcon} />
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{
                      transform: `rotate(${pullDistance * 4}deg)`,
                      transition: "transform 0.1s ease"
                    }}
                  >
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                )}
                <span>
                  {isRefreshing
                    ? "Refreshing suggestions..."
                    : pullDistance >= 50
                      ? "Release to refresh"
                      : "Pull down to refresh"}
                </span>
              </div>
            </div>
          )}

          <div className={styles.chatFeedInner}>
            {messages.length === 0 ? (
              // Greeting Empty State (Gemini Style)
              <div className={styles.welcomeContainer}>
                <h1 className={`${styles.welcomeTitle} gemini-gradient-text`}>Hi, I'm Cognix</h1>
                <h2 className={styles.welcomeSubtitle}>How can I help you today?</h2>

                {/* Prompts Suggestions Grid */}
                <div className={styles.suggestionGrid}>
                  {suggestions.length === 0 ? (
                    // 4 Glowing, Shimmering loading skeletons to keep containers visible and layout solid
                    Array(4).fill(0).map((_, idx) => (
                      <div key={`sk-${idx}`} className={styles.suggestionCardSkeleton}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                          <div style={{ height: "14px", backgroundColor: "rgba(255, 255, 255, 0.05)", width: "80%", borderRadius: "4px" }}></div>
                          <div style={{ height: "14px", backgroundColor: "rgba(255, 255, 255, 0.03)", width: "50%", borderRadius: "4px" }}></div>
                        </div>
                        <div style={{ alignSelf: "flex-end", width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.04)" }}></div>
                      </div>
                    ))
                  ) : (
                    suggestions.map((card, idx) => (
                      <button
                        key={idx}
                        className={styles.suggestionCard}
                        onClick={() => sendMessage(card.prompt)}
                        id={`suggestion-card-${idx}`}
                      >
                        <span className={styles.suggestionPrompt}>
                          {card.prompt}
                        </span>
                        <div className={styles.suggestionHeader}>
                          {card.icon}
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            ) : (
              // Active Conversation Row list
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${styles.messageRow} ${msg.role === "user" ? styles.messageRowUser : styles.messageRowModel
                    }`}
                >
                  {msg.role === "user" ? (
                    // User Message Bubble (pill background, aligned right)
                    <div className={styles.messageBubbleUser}>
                      {msg.content}
                    </div>
                  ) : (
                    // Assistant Message (spacious document, bubble-free, aligned left with logo)
                    <div className={styles.messageWrapperModel}>
                      <div className={styles.sparkleLogoContainer}>
                        <SparkleIcon size={24} />
                      </div>
                      <div className={styles.messageContentModel}>
                        {formatMarkdown(msg.content)}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}

            {/* Pulsing AI Bouncing Dots indicator */}
            {isLoading && (
              <div className={styles.messageRow}>
                <div className={styles.loadingRow}>
                  <div className={styles.sparkleLogoContainer}>
                    <SparkleIcon size={24} className={styles.pulseGlow} />
                  </div>
                  <div className={styles.dotContainer}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </section>

        {/* Capsule Input Pill Box */}
        <footer className={styles.inputArea}>
          <div className={styles.inputAreaInner}>
            {/* API Warning boxes */}
            {apiKeyError && (
              <div className={styles.alertBox}>
                <span className={styles.alertBoxIcon}>
                  <AlertIcon />
                </span>
                <div>
                  <strong>{apiKeyError.title}:</strong> {apiKeyError.message}
                </div>
                <button className={styles.alertBoxBtn} onClick={() => setApiKeyError(null)}>
                  Dismiss
                </button>
              </div>
            )}

            <div className={styles.inputContainer}>
              <textarea
                ref={textareaRef}
                className={styles.inputField}
                placeholder="Ask Cognix..."
                rows={1}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                id="input-prompt"
                autoFocus={true}
              />

              <div className={styles.inputActions}>
                <button
                  className={`${styles.iconBtn} ${isListening ? styles.micListeningBtn : ""}`}
                  title={isListening ? "Listening... Click to stop" : "Voice input"}
                  onClick={toggleVoiceInput}
                  disabled={isLoading}
                  type="button"
                >
                  <MicrophoneIcon style={{ color: isListening ? "#ff4a4a" : "inherit" }} />
                </button>
                <button
                  className={`${styles.sendBtn} ${inputValue.trim() && !isLoading ? styles.sendBtnActive : ""}`}
                  onClick={() => sendMessage(inputValue)}
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send query"
                  id="btn-send-prompt"
                >
                  <SendIcon />
                </button>
              </div>
            </div>

            <div className={styles.inputMeta}>
              Cognix can make mistakes. Verify important info.
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Sidebar click overlay backdrop */}
      {mobileSidebarOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 90,
          }}
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}
      {/* Global SVG brand gradient stops definition used for suggestion card header icons */}
      <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }} aria-hidden="true">
        <defs>
          <linearGradient id="cognix-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285f4" />
            <stop offset="18%" stopColor="#9b72cb" />
            <stop offset="38%" stopColor="#d96570" />
            <stop offset="58%" stopColor="#e2a05d" />
            <stop offset="78%" stopColor="#d96570" />
            <stop offset="90%" stopColor="#9b72cb" />
            <stop offset="100%" stopColor="#4285f4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
