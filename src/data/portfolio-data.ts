// ============================================================
//  PORTFOLIO DATA  —  edit everything here, no need to touch
//  the component files for content changes.
// ============================================================

// ── Personal Info ────────────────────────────────────────────
export const personalInfo = {
  name: "Kevin Williams",
  title: "Fullstack Software Developer",
  location: "Riyadh, Saudi Arabia",
  email: "kewilliamsdev@gmail.com",
  github: "https://github.com/kewilliams92",
  linkedin: "https://www.linkedin.com/in/kevin-e-williams",
  available: true, // set to false to hide the "Open to opportunities" badge
  bio: "I build full-stack web applications from database to UI. Specialized in the PERN stack with React, Node.js, Express, and PostgreSQL — and equally at home on the Python side with Django REST APIs.",
  resume: "/resume.pdf",
};

// ── Tech Stack ────────────────────────────────────────────────
// To add a skill: add a new object to the relevant category
// To remove: delete the object
// To add a new category: add a new block with a unique `category` name
export const skills = [
  // Languages
  { name: "JavaScript",  category: "Languages" },
  { name: "TypeScript",  category: "Languages" },
  { name: "Python",      category: "Languages" },

  // Frontend
  { name: "React",       category: "Frontend" },
  { name: "Next.js",     category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "HTML / CSS",  category: "Frontend" },

  // Backend
  { name: "Node.js",     category: "Backend" },
  { name: "Express.js",  category: "Backend" },
  { name: "Django",      category: "Backend" },
  { name: "Flask",       category: "Backend" },

  // Databases
  { name: "PostgreSQL",  category: "Databases & ORMs" },
  { name: "Prisma",      category: "Databases & ORMs" },
  { name: "Drizzle",     category: "Databases & ORMs" },
  { name: "Sequelize",   category: "Databases & ORMs" },

  // Tools
  { name: "Git",         category: "Tools" },
  { name: "Clerk",       category: "Tools" },
  { name: "Stripe",      category: "Tools" },
  { name: "Render",      category: "Tools" },
  { name: "Vercel",      category: "Tools" },
];

// ── Projects ──────────────────────────────────────────────────
// To add a project: copy one object and fill in the fields
// To remove a project: delete the object
// `featured: true` renders the card with an accent border
export const projects = [
  {
    id: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    description:
      "An AI-powered web app that analyzes a resume against a specific job description, returning an overall match score plus targeted feedback on ATS compatibility, tone, content, structure, and skills — all processed client-side with no backend to maintain.",
    liveUrl: "https://puter.com/app/ai-resume-analyzer-w0uv",
    repoUrl: "https://github.com/kewilliams92/ai-resume-analyzer",
    tags: ["React 19", "React Router v8", "TypeScript", "TailwindCSS v4", "Zustand", "Puter.js", "pdf.js"],
    highlights: [
      "Built an end-to-end analysis pipeline that converts uploaded PDF resumes into high-resolution images with pdf.js, then feeds them to a vision AI model for job-specific feedback and scoring.",
      "Engineered custom prompt instructions that return structured JSON scoring across five dimensions — ATS, tone & style, content, structure, and skills — rendered as interactive score gauges and actionable tips.",
      "Integrated Puter.js for serverless authentication, cloud file storage, and a key-value store, delivering a full-featured app with zero backend infrastructure or API keys.",
      "Architected global state with Zustand and a drag-and-drop upload flow with real-time status updates, built on React Router v8 framework mode, React 19, and TailwindCSS v4.",
    ],
    featured: true,
  },
  {
    id: "budgetbox",
    name: "BudgetBox",
    description:
      "A full-stack personal finance management app that helps users track income and expenses, plan budgets, and gain insights into their financial health through real bank account integration.",
    liveUrl: "https://budget-box-rosy.vercel.app",
    repoUrl: "", // add GitHub repo URL here if public
    tags: ["React", "Django", "PostgreSQL", "Plaid API", "Clerk.js", "Python"],
    highlights: [
      "Engineered Plaid API integration managing a three-token auth flow, enabling real-time bank account syncing and automated transaction processing.",
      "Architected secure financial data models in PostgreSQL with custom schemas for multi-account expense tracking.",
      "Implemented Clerk.js authentication with custom Django decorators to protect all sensitive financial endpoints.",
      "Led REST API development collaborating with 2 frontend developers, establishing Axios-based data flow patterns between React and Django.",
    ],
    featured: true,
  },
  {
    id: "flashquiz",
    name: "FlashQuiz",
    description:
      "An AI-powered flashcard application that auto-generates study materials using the OpenAI API and Wikimedia API — eliminating the blank-slate problem for new learners.",
    liveUrl: "https://flashquiz-xi.vercel.app",
    repoUrl: "", // add GitHub repo URL here if public
    tags: ["React", "Django", "PostgreSQL", "OpenAI API", "Wikimedia API", "TailwindCSS", "Framer Motion"],
    highlights: [
      "Built AI-powered flashcard generation with custom OpenAI prompt engineering that auto-generates 5 starter cards to remove the barrier of not knowing where to begin.",
      "Designed an API orchestration pipeline connecting Wikimedia data to OpenAI processing, with fallback handling when Wikipedia pages don't exist.",
      "Built a full-stack app with React, TailwindCSS, and Framer Motion on the frontend backed by a Django REST API and PostgreSQL database.",
      "Designed a relational schema for Decks, Flashcards, and user Feedback with user-specific content isolation.",
    ],
    featured: false,
  },
];
