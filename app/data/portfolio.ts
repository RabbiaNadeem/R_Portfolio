export const portfolioData = {
  // Hero Section
  hero: {
    tagline: "Full Stack Developer with hands-on experience building AI-powered web applications using Next.js, FastAPI, and Supabase.",
    bio: "Hi! I am a full stack developer who loves building applications with AI at the core.\n\nI got into this properly in my final year of university and haven't really stopped since. My first real job was at AstroLinx, where I built and maintained RESTful APIs as a Node.js intern. It's where I learned how backend systems actually work when real people depend on them.\n\nNow I'm at IT Intelligentsia, contributing to the company's web applications and collaborating with a team that makes me better at what I do.\n\nWhen I'm not coding, you'll find me in the kitchen trying a new recipe, in a book, or somewhere with people I love.",
  },

  // Tech Stack (grouped for Hands-on Skills-style categories)
  techStack: {
    languagesAndFrameworks: [
      "TypeScript",
      "Node.js",
      "Python",
      "Next.js",
      "FastAPI",
      "Supabase (Postgres, storage, realtime)",
      "REST API design",
    ],
    versionControlDeployment: [
      "Git & GitHub",
      "Git Actions for CI/CD",
      "Docker",
      "Deployment(Vercel, Railway and cPanel hosting)",
    ],
    artificialIntelligence: [
      "Groq API",
      "OpenRouter",
      "LangChain",
      "Qdrant (vector search)",
      "RAG pipelines & document chat",
      "LLM integration & streaming responses",
    ],
    productivityTools: ["VS Code", "Cursor", "Google Antigravity"],
  },

  // Experience
  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "IT Intelligentsia",
      timeline: "Nov 2025 - May 2026",
      bullets: [
        "Developed application using Next.js and Node.js, with chatbot integration using OpenRouter and Groq API.",
        "Designed and implemented real-time data synchronization using Supabase, enabling seamless user authentication, data persistence, and live updates across the application.",
        "Collaborated with the engineering team to integrate backend components, ensuring efficient data flow and improved application performance.",
      ],
    },
    {
      title: "Meetup Manager",
      company: "Hack The Box Meetup — Lahore",
      timeline: "Sep 2025 - Present",
      bullets: [
        "Lead the local Hack The Box chapter in Lahore, shaping meetup topics and rhythm for the cybersecurity community.",
        "Coordinate sessions, logistics, and member outreach so events stay consistent and welcoming for new and returning participants.",
      ],
    },
    {
      title: "Node.js Developer Intern",
      company: "AstroLisx",
      timeline: "Sep 2025 - Nov 2025",
      bullets: [
        "Built and maintained scalable REST APIs using Node.js, focusing on implementing robust server-side logic and ensuring efficient data exchange.",
        "Implemented real-time data synchronization using Supabase, enabling efficient database operations and live updates across the application.",
        "Collaborated with a cross-functional team to deliver assigned tasks within tight deadlines, maintaining a professional and productive workflow.",
      ],
    },
  ],

  // Featured Projects
  projects: [
    {
      title: "Prism",
      subtitle: "AI API Gateway",
      image: "/projects/prism.svg",
      description:
        "OpenAI-compatible API gateway in Node.js and Express that routes chat completions across Groq, Gemini, and OpenRouter with failover, Redis-backed rate limiting and caching, prompt-safety middleware, Prometheus metrics, and Docker deployment.",
      bullets: [
        "Built an OpenAI-compatible API gateway in Node.js and Express routing chat completions across three LLM providers (Groq, Gemini, OpenRouter) with automatic failover so the service stays up when upstream providers fail.",
        "Implemented per-key rate limiting with a Redis sliding-window algorithm (60 req/min default), SHA-256 hashed keys, and standard Retry-After and X-RateLimit-Remaining headers to reduce abuse.",
        "Added a Redis response cache (10-minute TTL) to cut redundant upstream calls, plus prompt-safety middleware that flags 10+ jailbreak and injection patterns before traffic reaches any provider.",
        "Exposed eight Prometheus-style metrics (volume, latency, cache hit/miss, provider success/failure, token usage) and containerised the stack with Docker and docker-compose.",
      ],
      github: "https://github.com/RabbiaNadeem/Prism",
      tags: [
        "Node.js",
        "Express",
        "Redis",
        "Docker",
        "Groq",
        "Gemini",
        "OpenRouter",
        "Prometheus",
        "Rate limiting",
        "LLM gateway",
      ],
    },
    {
      title: "AskMyPDF",
      subtitle: "RAG-based Document Chatbot",
      image: "/PDF_01.png",
      gallery: ["/PDF_02.png"],
      description: "Engineered a production-grade chatbot using Groq LLM and Qdrant vector database to receive accurate cited answers with real-time streaming. Implemented file upload and storage functionality using Supabase, supporting 50MB multiple PDFs and maintaining conversation history.",
      bullets: [
        "Engineered a production-grade chatbot using Groq LLM and Qdrant vector database to receive accurate cited answers with real-time streaming",
        "Implemented file upload and storage functionality using Supabase, supporting 50MB multiple PDFs",
        "Maintained conversation history for seamless user experience",
      ],
      github: "https://github.com/RabbiaNadeem/askmypdf",
      tags: ["Next.js", "FastAPI", "Groq API", "Qdrant", "Supabase", "FastEmbeddings","LangChain", "RAG Pipeline", "Railway", "Vercel"],
    },
    {
      title: "HisaabKitab",
      subtitle: "AI-Powered Finance Tracker",
      image: "/HK_01.png",
      gallery: ["/HK_02.png"],
      description: "Built a full-stack financial management tool using Next.js (frontend) and FastAPI (backend) that automatically categorizes expenses using AI. Developed a responsive analytics dashboard with data visualizations to help users track spending patterns and improve financial habits.",
      bullets: [
        "Built full-stack financial management tool with Next.js (frontend) and FastAPI (backend)",
        "Automatically categorizes expenses using AI for intelligent expense tracking",
        "Developed responsive analytics dashboard with data visualizations to help users track spending patterns",
      ],
      github: "https://github.com/RabbiaNadeem/HisaabKitab",
      tags: ["Next.js", "FastAPI", "AI", "Supabase", "Analytics", "Vercel"],
    },
    {
      title: "Smart Document Analyzer",
      subtitle: "Structured insights from documents",
      image: "/projects/smart-document-analyzer.svg",
      description:
        "Upload a document and get back clear bullet-point summaries of the key information—entities, dates, action items, and main themes—so you can scan what matters without reading the full file.",
      bullets: [
        "Parses uploaded documents and analyzes their content to extract the most important information automatically.",
        "Returns findings as concise bullet points so summaries are easy to skim and share.",
        "Highlights structured facts (such as names, deadlines, figures, and topics) to support quick decision-making.",
      ],
      github: "https://github.com/RabbiaNadeem/Smart_Document_Analyzer",
      tags: ["Document AI", "LLM", "Text extraction", "Summarization", "Next.js", "FastAPI"],
    },
  ],

  // Education
  education: {
    degree: "Bachelor of Computer Science (CGPA: 3.59)",
    school: "University of Management & Technology (UMT), Lahore",
    timeline: "2021 - 2025",
    coursework: ["Data Structures", "Database Systems", "Web Development", "Artificial Intelligence and Machine Learning"],
  },

  // Achievements (under Education on site)
  achievements: [
    {
      title: "Teaching Assistant",
      description:
        "TA for Analysis of Algorithm and Database System, supporting faculty and students with coursework and labs.",
    },
    {
      title: "Peer Tutor",
      description:
        "Peer tutor at SSI for Analysis of Algorithm, Theory of Automata, and Discrete Mathematics.",
    },
    {
      title: "Hack The Box Meetup — Lahore",
      description: "Manager for the local Hack The Box meetup chapter in Lahore.",
    },
    {
      title: "Cyber Siege — CTF",
      description: "CTF organizer and team member for Cyber Siege.",
    },
  ],

  // Certifications
  certifications: [
    "Claude Code in Action",
    "Claude Code 101",
    "Flagship Volunteer Program - Pakistan Citizen Alliance (20-hour program)",
    "Community Impact: Raised Rs 16,000 for water infrastructure and planted trees for urban greening initiatives",
  ],

  // Contact
  contact: {
    github: "https://github.com/RabbiaNadeem",
    linkedin: "https://linkedin.com/in/rabbianadeem",
    email: "rabbianadeem1408@gmail.com",
  },
};

