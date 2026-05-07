"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const FALLBACK =
  "I am only allowed to share Rabbia Nadeem's experince and skills set here.";

const CANDIDATE_NAME = "Rabbia Nadeem";

export const ChatWithBiyya = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  async function send(text?: string) {
    const trimmed = (text ?? input).trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setInput("");

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const nextThread = [...messages, userMsg];

    setMessages(nextThread);

    try {
      const apiMessages = nextThread.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

      const resp = await fetch("/api/biyya", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!resp.ok) {
        const raw = await resp.text();
        let assistantErr =
          "Sorry—the chat service is unavailable. Please try again in a moment.";

        try {
          const errJson = JSON.parse(raw) as {
            error?: string;
            hint?: string;
            detail?: string;
          };
          if (errJson.error === "Missing GROQ_API_KEY on server.") {
            assistantErr =
              "The server has no Groq API key loaded. Add GROQ_API_KEY to a file named .env.local in the project root (not inside React code), then fully restart the dev server (`npm run dev`).";
          } else if (
            errJson.error === "Groq request failed" &&
            errJson.detail &&
            process.env.NODE_ENV === "development"
          ) {
            assistantErr = `Groq error (dev only): ${String(errJson.detail).slice(0, 500)}`;
          } else if (errJson.hint) {
            assistantErr = errJson.hint;
          }
        } catch {
          if (process.env.NODE_ENV === "development" && raw) {
            assistantErr = `Request failed (${resp.status}). ${raw.slice(0, 400)}`;
          }
        }

        setMessages((prev) => [...prev, { role: "assistant", content: assistantErr }]);
        return;
      }

      const json = (await resp.json()) as { message?: string };
      const reply = json.message?.trim() || FALLBACK;
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry—I couldn’t reach the chat service. You can try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }



  return (
    <section
      id="chat-with-biyya"
      className="py-16 md:py-24 scroll-mt-8 lg:scroll-mt-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Meet Biyya</h2>

      <div className="relative rounded-2xl bg-[#0d0d0d] border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_42px_rgba(255,255,255,0.1)] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.14), transparent 55%)",
          }}
          aria-hidden
        />

        <div className="relative p-5 sm:p-6 md:p-8 flex flex-col min-h-[28rem] md:min-h-[32rem]">
          <div className="flex justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]"
              aria-hidden
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>

          <div className="text-center mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Is {CANDIDATE_NAME} a good fit?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Ask about specific skills or paste a job description.
            </p>
          </div>

          <div
            ref={listRef}
            className="flex flex-col flex-1 min-h-[180px] max-h-[52vh] md:max-h-[340px] overflow-y-auto mb-4 rounded-xl border border-white/10 bg-black/40 px-3 py-3 gap-3 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25"
          >
            {messages.length === 0 && !loading ? (
              <p className="text-center text-gray-500 text-sm py-10 px-2">
                Messages will appear here. Type your question below.
              </p>
            ) : null}

            {messages.map((m, idx) => (
              <div
                key={`${m.role}-${idx}`}
                className={`flex w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`w-fit max-w-[min(92%,28rem)] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-white/10 border border-white/20 text-gray-100"
                      : "bg-white/5 border border-white/10 text-gray-200"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                    {m.role === "user" ? "You" : "Biyya"}
                  </div>
                  <div className="whitespace-pre-wrap break-words">{m.content}</div>
                </div>
              </div>
            ))}

            {loading ? (
              <div className="flex w-full justify-start">
                <div className="w-fit rounded-lg px-3 py-2 text-sm bg-white/5 border border-white/10 text-gray-400">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500">
                      Biyya
                    </span>
                    <span className="inline-flex items-center" aria-label="Biyya is typing">
                      <span
                        className="inline-block animate-pulse"
                        style={{ animationDelay: "0ms" }}
                      >
                        •
                      </span>
                      <span
                        className="inline-block animate-pulse"
                        style={{ animationDelay: "150ms" }}
                      >
                        •
                      </span>
                      <span
                        className="inline-block animate-pulse"
                        style={{ animationDelay: "300ms" }}
                      >
                        •
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <form
            className="mt-auto flex gap-2 sm:gap-3 items-end"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send();
                }
              }}
              placeholder="Ask about the candidate…"
              rows={2}
              className="flex-1 resize-y min-h-[3rem] max-h-32 rounded-xl border border-white/15 bg-black/50 text-white placeholder:text-gray-500 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/35"
            />
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
              Send
            </button>
          </form>

          <p className="text-[10px] text-gray-500 mt-3 text-center">
            Shift+Enter for a new line. Answers use this site’s published experience, skills, and projects only.
          </p>
        </div>
      </div>
    </section>
  );
};
