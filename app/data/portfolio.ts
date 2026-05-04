export const portfolioData = {
  // Hero Section
  hero: {
    tagline: "Full Stack Developer with hands-on experience building AI-powered web applications using Next.js, FastAPI, and Supabase.",
    bio: "Hi! I am a full stack developer who loves building applications with AI at the core.\n\nI got into this properly in my final year of university and haven't really stopped since. My first real job was at AstroLinx, where I built and maintained RESTful APIs as a Node.js intern. It's where I learned how backend systems actually work when real people depend on them.\n\nNow I'm at IT Intelligentsia, contributing to the company's web applications and collaborating with a team that makes me better at what I do.\n\nWhen I'm not coding, you'll find me in the kitchen trying a new recipe, in a book, or somewhere with people I love.",
  },

  // Tech Stack
  techStack: {
    languages: ["Node.js", "TypeScript", "Next.js", "FastAPI"],
    tools: ["VS Code", "GitHub", "Supabase", "Qdrant"],
    infrastructure: ["Vercel", "cpanel", "Railway"],
    ai: ["Groq API", "OpenRouter", "LLM Integration", "REST APIs", "Authentication & Authorization", "Full-Stack Architecture"],
  },

  // Experience
  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "IT Intelligentsia",
      timeline: "Nov 2025 - Present",
      bullets: [
        "Developed application using Next.js and Node.js, with chatbot integration using OpenRouter and Groq API.",
        "Designed and implemented real-time data synchronization using Supabase, enabling seamless user authentication, data persistence, and live updates across the application.",
        "Collaborated with the engineering team to integrate backend components, ensuring efficient data flow and improved application performance.",
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
      title: "AskMyPDF",
      subtitle: "RAG-based Document Chatbot",
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
      description: "Built a full-stack financial management tool using Next.js (frontend) and FastAPI (backend) that automatically categorizes expenses using AI. Developed a responsive analytics dashboard with data visualizations to help users track spending patterns and improve financial habits.",
      bullets: [
        "Built full-stack financial management tool with Next.js (frontend) and FastAPI (backend)",
        "Automatically categorizes expenses using AI for intelligent expense tracking",
        "Developed responsive analytics dashboard with data visualizations to help users track spending patterns",
      ],
      github: "https://github.com/RabbiaNadeem/HisaabKitab",
      liveDemo: "https://hisaab-kitab-two.vercel.app",
      tags: ["Next.js", "FastAPI", "AI", "Supabase", "Analytics", "Vercel"],
    },
  ],

  // Education
  education: {
    degree: "Bachelor of Computer Science (CGPA: 3.59)",
    school: "University of Management & Technology (UMT), Lahore",
    timeline: "2021 - 2025",
    coursework: ["Data Structures", "Database Systems", "Web Development", "Artificial Intelligence"],
    roles: [
      "Teacher Assistant (TA) for Analysis of Algorithm and Database System",
      "Peer Tutor at SSI for subjects Analysis of Algorithm, Theory of Automata and Discrete Mathematics",
    ],
  },

  // Certifications
  certifications: [
    "Claude Code in Action",
    "Claude Code 101",
    "Flagship Volunteer Program â€“ Pakistan Citizen Alliance (20-hour program)",
    "Community Impact: Raised Rs 16,000 for water infrastructure and planted trees for urban greening initiatives",
  ],

  // Contact
  contact: {
    github: "https://github.com/RabbiaNadeem",
    linkedin: "https://linkedin.com/in/rabbianadeem",
    email: "rabbianadeem1408@gmail.com",
  },
};

