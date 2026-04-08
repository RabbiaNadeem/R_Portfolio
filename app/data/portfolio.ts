export const portfolioData = {
  // Hero Section
  hero: {
    tagline: "Building intelligent, full-stack web applications that seamlessly blend AI capabilities with clean, intuitive design.",
    bio: "I'm a Full Stack Developer specializing in AI-powered web applications using Next.js, FastAPI, and modern cloud solutions. With hands-on experience at multiple tech startups, I design and deploy real-world software that integrates LLMs, real-time sync, and robust backends. I'm passionate about creating innovative solutions that solve real problems.",
  },

  // Tech Stack
  techStack: {
    languages: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI"],
    apis: ["OpenRouter", "Groq API", "REST APIs", "GraphQL"],
    tools: ["Git", "GitHub", "VS Code", "Unix/Linux"],
    databases: ["Supabase (PostgreSQL)", "Qdrant (Vector DB)"],
    deployment: ["Railway", "Vercel"],
    ai: ["Groq API", "OpenRouter", "RAG", "Vector Embeddings", "LLM Integration"],
  },

  // Experience
  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "IT Intelligentsia",
      timeline: "Nov 2025 – Present",
      bullets: [
        "Engineered Next.js + Node.js chatbot with multi-model LLM support (OpenRouter, Groq API), enabling seamless real-time conversations with intelligent context awareness and low-latency responses.",
        "Designed and deployed real-time data sync using Supabase, implementing efficient database queries and live updates to ensure consistent user experience across concurrent sessions.",
        "Collaborated with cross-functional team to integrate multiple service components, reducing data flow latency by 40% and improving overall application responsiveness.",
      ],
    },
    {
      title: "Node.js Developer Intern",
      company: "AstroLisx",
      timeline: "Sep 2025 – Nov 2025",
      bullets: [
        "Built and maintained scalable REST APIs using Node.js, supporting complex business logic and handling 10K+ daily requests with optimized database queries and caching.",
        "Implemented robust server-side validation and role-based access control (RBAC), securing sensitive data and maintaining audit logs for compliance requirements.",
        "Collaborated with cross-functional QA team to deliver bug-free features on tight 2-week sprint cycles, maintaining 99.5% uptime and zero critical production incidents.",
      ],
    },
  ],

  // Featured Projects
  projects: [
    {
      title: "AskMyPDF",
      subtitle: "RAG-Based Document Chatbot",
      description: "Engineered a production-grade AI chatbot using Groq LLM and Qdrant vector database that intelligently retrieves and streams cited answers from uploaded PDFs with semantic accuracy. Features advanced RAG pipeline with intelligent chunking, FastEmbeddings, and Semantic search enabling document analysis for files up to 50MB.",
      github: "https://github.com/RabbinaNadesm/askmypdf",
      liveDemo: "https://askmypdf-llaki.vercel.app",
      tags: ["Next.js", "Groq API", "RAG", "Vector DB", "FastAPI"],
    },
    {
      title: "HisaabKitab",
      subtitle: "AI-Powered Finance Tracker",
      description: "Built a full-stack financial management dashboard using Next.js frontend and FastAPI backend that automatically categorizes expenses with AI intelligence and delivers actionable insights through interactive analytics. Integrated secure user authentication with Supabase, real-time data syncing, and responsive design.",
      github: "https://github.com/RabbinaNadesm/HisaabKitab",
      liveDemo: "https://hisaab-kitab-two.vercel.app",
      tags: ["Next.js", "FastAPI", "AI", "Supabase", "Analytics"],
    },
  ],

  // Education
  education: {
    degree: "Bachelor of Computer Science",
    school: "University of Management & Technology (UMT), Lahore",
    timeline: "2021 – 2025",
    coursework: ["Data Structures", "Database Systems", "Web Development", "Artificial Intelligence"],
    roles: [
      "Teacher Assistant (TA) for Algorithm & Database System courses",
      "Peer Tutor for SSI courses (Algorithm Analysis, Theory of Automata & Discrete Mathematics)",
    ],
  },

  // Certifications
  certifications: [
    "Claude Code in Action — Advanced AI Integration Program",
    "Claude Code 101 — Foundational AI Development",
    "Flagship Volunteer Program — Pakistan Citizen Alliance (20-hour program)",
    "Community Impact — Raised Rs 16,000 for water infrastructure & planted trees in urban areas",
  ],

  // Contact
  contact: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "your.email@example.com",
    phone: "+92 XXX XXXXXXX",
  },
};
