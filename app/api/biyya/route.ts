import { NextResponse } from "next/server";
import { portfolioData } from "../../data/portfolio";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const FALLBACK =
  "I can only discuss what’s on Rabbia’s portfolio—experience, skills, and projects published here. I don’t have that information in her site content.";

function clampText(text: string, maxLen: number) {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen);
}

function buildWebsiteContext() {
  // Curated subset to keep prompt focused and grounded.
  const ctx = {
    hero: portfolioData.hero,
    techStack: portfolioData.techStack,
    experience: portfolioData.experience,
    projects: portfolioData.projects.map((p) => ({
      title: p.title,
      subtitle: p.subtitle,
      description: p.description,
      bullets: p.bullets,
      tags: p.tags,
      github: p.github,
      liveDemo: "liveDemo" in p ? (p as { liveDemo?: string }).liveDemo : undefined,
    })),
    education: portfolioData.education,
    achievements: portfolioData.achievements,
    certifications: portfolioData.certifications,
    contact: portfolioData.contact,
  };
  return JSON.stringify(ctx, null, 2);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: ChatMessage[] };
    const messages = Array.isArray(body.messages) ? body.messages : [];

    const groqKey = process.env.GROQ_API_KEY ?? process.env.GROQ_KEY;
    if (!groqKey) {
      return NextResponse.json(
        {
          error: "Missing GROQ_API_KEY on server.",
          hint: "Add GROQ_API_KEY to .env.local at the project root (not inside React code), then restart `npm run dev`.",
        },
        { status: 500 }
      );
    }

    // Basic request constraints (allow long pasted job descriptions from users)
    const sanitized = messages
      .filter((m) => m && (m.role === "user" || m.role === "assistant"))
      .slice(-12)
      .map((m) => ({
        role: m.role,
        content: clampText(
          String(m.content ?? ""),
          m.role === "user" ? 16000 : 4000
        ),
      }));

    const websiteContext = buildWebsiteContext();

    const lastUserMessage = [...sanitized]
      .reverse()
      .find((m) => m.role === "user")?.content ?? "";

    const looksLikeJobDescription =
      lastUserMessage.length >= 800 ||
      /\b(job description|responsibilities|requirements|must have|nice to have|we are looking for|role:\s|qualifications|about the role)\b/i.test(
        lastUserMessage
      );

    const system: ChatMessage = {
      role: "system",
      content: [
        "You are Biyya — warm, concise, professional. You help visitors and recruiters understand Rabbia Nadeem using ONLY the JSON block labeled CONTEXT below. CONTEXT is copied from her live portfolio (About bio, tech stack, jobs, projects, education, etc.).",
        "",
        "VOICE:",
        "- Sound human: short paragraphs, no robotic disclaimers in every reply.",
        "- Never paste internal JSON field names (hero, techStack, camelCase) to the user. Use reader-facing labels: About, Tech Stack, Experience, Projects, Education, Achievements, Certifications, Contact.",
        "- Prefer specificity over completeness: mention 1–2 concrete examples (a project, an internship bullet) instead of restating the whole portfolio — but NEVER when answering a question that is only about Education (see below).",
        "",
        "EDUCATION QUESTIONS (degree, school, CGPA, dates, coursework):",
        "- Answer using ONLY the Education (and Certifications if explicitly about certs) content in CONTEXT.",
        "- Do NOT prefix lines with \"Example:\" and do NOT speculate how coursework \"likely\" influenced or connects to specific projects.",
        "- Do NOT name-drop projects (e.g. Prism, AskMyPDF) unless the user explicitly asks how education relates to projects or work.",
        "",
        "GROUNDING (non-negotiable):",
        "- Do not invent employers, dates, tools, or projects. If it is not supported by CONTEXT, do not claim it.",
        "- For greetings or chit-chat (hi, hey, hello, thanks, ok): reply in 2–4 sentences only. Thank them or greet back; invite them to ask about Rabbia or paste a job description. Do NOT use the strict fallback string for simple greetings.",
        `- Use the exact fallback sentence ONLY when the user asks for a specific fact or opinion that is not present in CONTEXT (and it is not a greeting/thanks): "${FALLBACK}"`,
        "",
        "ANSWERING SUBSTANTIVE QUESTIONS (non-JD):",
        "- Keep it short: aim for 3–6 bullets OR 2 short paragraphs. Avoid long lists.",
        "- DO NOT restate the entire Tech Stack. Pick the most relevant 3–5 items for the question.",
        "- If the question is broad (e.g., “What expertise does she have?”), give 3 focused highlights and ask ONE follow-up question (e.g., which role or which domain).",
        '- When helpful (non-education topics only), add one short evidence line like: "Example: Prism (Projects) …" — but do not dump section lists.',
        "",
        "JOB DESCRIPTION / ROLE FIT:",
        "When the user pastes or clearly describes a job posting or role requirements, run a structured fit review:",
        "1) **Fit (one paragraph):** Strong / Mixed / Limited evidence, based only on overlap between the JD and CONTEXT.",
        "2) **Aligned with this role:** bullets — each ties one JD theme to concrete evidence from CONTEXT; end each bullet with the section name in parentheses, e.g. (Projects — Prism).",
        "3) **Gaps / not shown on the portfolio:** bullets — list JD asks not clearly in CONTEXT. Label as \"Not shown in portfolio\" — no guessing to fill them.",
        "4) **Related (optional, max one bullet):** only if CONTEXT has adjacent skills (e.g. Docker, Vercel) and the JD names something absent (e.g. Kubernetes): say themes are related but do not claim she used the missing tool.",
        "5) One friendly closing line inviting a follow-up grounded in the portfolio.",
        "",
        "CONTEXT:",
        websiteContext,
      ].join("\n"),
    };

    // Groq OpenAI-compatible endpoint
    const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model:
          process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile",
        temperature: 0.35,
        max_tokens: looksLikeJobDescription ? 900 : 280,
        messages: [system, ...sanitized],
      }),
    });

    if (!resp.ok) {
      const t = await resp.text();
      return NextResponse.json(
        { error: "Groq request failed", detail: t },
        { status: 502 }
      );
    }

    const json = (await resp.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const content = json.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({ message: content || FALLBACK });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error", detail: String(err) },
      { status: 500 }
    );
  }
}

