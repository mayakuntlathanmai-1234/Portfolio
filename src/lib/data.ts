export interface QuickFact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  specialization: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  githubUsername: string;
  resumePdf: string;
  videoSrc: string;
  posterSrc: string;
  quickFacts: QuickFact[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: string;
  shortCode: string;
  description: string;
  relatedProjects?: string[];
  level?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  score?: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  overview: string;
  contribution: string;
  techStack: string[];
  features: string[];
  github?: string;
  status: string;
  deployment?: string;
  illustrativeUiType:
    | "healthcare"
    | "environmental"
    | "microservices"
    | "agentic-ai";
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  type: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
}

// ==========================================
// PROFILE
// ==========================================

export const PROFILE: Profile = {
  name: "Mayakuntla Thanmai",
  firstName: "Thanmai",
  lastName: "Mayakuntla",

  title: "Full Stack Developer | Generative AI",

  specialization:
    "Generative AI for Agentic & Multimodal Intelligence",

  summary:
    "Third-year B.Tech Computer Science and Engineering student specializing in Generative AI for Agentic and Multimodal Intelligence. Full-stack developer experienced in building web applications using React, Java, Spring Boot, Python, FastAPI, REST APIs, and relational databases. Interested in developing reliable, scalable applications and practical AI-powered systems.",

  location: "Dharmavaram, Andhra Pradesh, India",

  phone: "+91 9491637097",

  email: "mayakuntlathanmai1234@gmail.com",

  github: "https://github.com/mayakuntlathanmai-1234",

  githubUsername: "mayakuntlathanmai-1234",

  resumePdf: "/Mayakuntla_Thanmai_Resume.pdf",

  videoSrc: "/intro-video.mp4",

  posterSrc: "/poster.jpg",

  quickFacts: [
    {
      label: "Degree",
      value: "B.Tech in Computer Science & Engineering",
    },
    {
      label: "Specialization",
      value:
        "Generative AI for Agentic & Multimodal Intelligence",
    },
    {
      label: "University",
      value: "K L University, Vijayawada",
    },
    {
      label: "Academic Standout",
      value: "SGPA: 9.01 / 10",
    },
    {
      label: "Core Stack",
      value:
        "React, Java, Spring Boot, FastAPI, MySQL, Python",
    },
    {
      label: "AI Expertise",
      value:
        "RAG Pipelines, Local LLMs (Ollama/Qwen), Vector DBs (ChromaDB)",
    },
  ],
};

// ==========================================
// NAVIGATION
// ==========================================

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// ==========================================
// SKILLS
// ==========================================

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description:
      "Core languages used for building enterprise backends, data pipelines, and frontend interfaces.",
    skills: [
      {
        name: "Java",
        category: "Backend & Systems",
        shortCode: "Jv",
        description:
          "Primary language for building robust enterprise applications and Spring Boot REST APIs.",
        relatedProjects: ["carestream", "urban-mobility"],
        level: "Core Stack",
      },
      {
        name: "Python",
        category: "AI & Scripting",
        shortCode: "Py",
        description:
          "Used for Generative AI workflows, machine learning, FastAPI endpoints, and data processing.",
        relatedProjects: ["sih-ai-workbench"],
        level: "Core Stack",
      },
      {
        name: "JavaScript",
        category: "Frontend & Web",
        shortCode: "Js",
        description:
          "Foundation for interactive client-side web applications and asynchronous state management.",
        relatedProjects: [
          "carestream",
          "greenloop",
          "urban-mobility",
        ],
        level: "Core Stack",
      },
      {
        name: "SQL",
        category: "Data Querying",
        shortCode: "Sql",
        description:
          "Relational database querying, schema modeling, joins, indexing, and transaction management.",
        relatedProjects: [
          "carestream",
          "urban-mobility",
          "greenloop",
        ],
        level: "Core Stack",
      },
      {
        name: "C",
        category: "Systems & CS",
        shortCode: "C",
        description:
          "Foundational programming for understanding memory allocation, pointers, and data structures.",
        level: "Academic & CS",
      },
    ],
  },

  {
    id: "frontend",
    name: "Frontend Development",
    description:
      "Modern UI engineering frameworks for responsive and accessible interfaces.",
    skills: [
      {
        name: "React.js",
        category: "UI Library",
        shortCode: "Rc",
        description:
          "Building component-based web applications using React hooks, reusable components, and state management.",
        relatedProjects: [
          "carestream",
          "greenloop",
          "urban-mobility",
          "sih-ai-workbench",
        ],
        level: "Core Stack",
      },
      {
        name: "HTML5",
        category: "Structure",
        shortCode: "Ht",
        description:
          "Semantic web structure, accessibility, and document hierarchy.",
        level: "Core Stack",
      },
      {
        name: "CSS3",
        category: "Styling",
        shortCode: "Cs",
        description:
          "Modern CSS layouts using Flexbox, Grid, responsive media queries, and custom properties.",
        level: "Core Stack",
      },
      {
        name: "Tailwind CSS",
        category: "Utility Styling",
        shortCode: "Tw",
        description:
          "Utility-first CSS for responsive interfaces and modern design systems.",
        relatedProjects: ["carestream", "sih-ai-workbench"],
        level: "Core Stack",
      },
    ],
  },

  {
    id: "backend",
    name: "Backend Development",
    description:
      "Building secure REST APIs, backend services, and real-time communication systems.",
    skills: [
      {
        name: "Spring Boot",
        category: "Framework",
        shortCode: "Sb",
        description:
          "Java framework for building REST APIs, dependency injection, and backend services.",
        relatedProjects: ["carestream", "urban-mobility"],
        level: "Core Stack",
      },
      {
        name: "Spring Security & JWT",
        category: "Security",
        shortCode: "Sec",
        description:
          "JWT authentication, role-based authorization, and backend endpoint security.",
        relatedProjects: ["carestream", "urban-mobility"],
        level: "Core Stack",
      },
      {
        name: "REST APIs",
        category: "Architecture",
        shortCode: "Api",
        description:
          "Designing HTTP endpoints, request validation, JSON payloads, and API integrations.",
        relatedProjects: [
          "carestream",
          "urban-mobility",
          "sih-ai-workbench",
        ],
        level: "Core Stack",
      },
      {
        name: "Microservices",
        category: "System Design",
        shortCode: "Ms",
        description:
          "Service-oriented architecture using API Gateways and service discovery.",
        relatedProjects: ["urban-mobility"],
        level: "Core Stack",
      },
      {
        name: "Hibernate / JPA",
        category: "ORM",
        shortCode: "Jpa",
        description:
          "Object-relational mapping, entity persistence, and repository queries.",
        relatedProjects: ["carestream"],
        level: "Core Stack",
      },
      {
        name: "FastAPI",
        category: "Python Backend",
        shortCode: "Fa",
        description:
          "Python framework for building backend APIs and AI integrations.",
        relatedProjects: ["sih-ai-workbench"],
        level: "Core Stack",
      },
      {
        name: "PHP",
        category: "Web Scripting",
        shortCode: "Php",
        description:
          "Server-side scripting used during web development internship for dynamic application logic and MySQL integration.",
        level: "Internship Experience",
      },
    ],
  },

  {
    id: "databases",
    name: "Databases & Storage",
    description:
      "Relational databases and vector storage for structured and semantic information.",
    skills: [
      {
        name: "MySQL",
        category: "Relational DB",
        shortCode: "My",
        description:
          "Relational database management, schemas, foreign keys, and SQL queries.",
        relatedProjects: [
          "carestream",
          "urban-mobility",
          "greenloop",
        ],
        level: "Core Stack",
      },
      {
        name: "PostgreSQL",
        category: "Relational DB",
        shortCode: "Pg",
        description:
          "Relational database supporting ACID transactions and structured queries.",
        level: "Core Skill",
      },
      {
        name: "ChromaDB",
        category: "Vector Database",
        shortCode: "Chr",
        description:
          "Vector database for document embeddings, metadata filtering, and semantic similarity search.",
        relatedProjects: ["sih-ai-workbench"],
        level: "AI Stack",
      },
    ],
  },

  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description:
      "Generative AI pipelines, local LLM execution, RAG systems, and machine learning.",
    skills: [
      {
        name: "Generative AI",
        category: "AI Engineering",
        shortCode: "Gen",
        description:
          "LLM workflows, prompt engineering, document processing, and multimodal inputs.",
        relatedProjects: ["sih-ai-workbench"],
        level: "Specialization",
      },
      {
        name: "RAG Architecture",
        category: "AI Architecture",
        shortCode: "Rag",
        description:
          "Retrieval-Augmented Generation combining vector search with language models.",
        relatedProjects: ["sih-ai-workbench"],
        level: "Specialization",
      },
      {
        name: "SentenceTransformers",
        category: "Embeddings",
        shortCode: "Emb",
        description:
          "Generating semantic vector embeddings for document similarity and retrieval.",
        relatedProjects: ["sih-ai-workbench"],
        level: "Specialization",
      },
      {
        name: "Ollama / Qwen",
        category: "Local LLM",
        shortCode: "Oll",
        description:
          "Running locally hosted language models for offline document intelligence.",
        relatedProjects: ["sih-ai-workbench"],
        level: "Specialization",
      },
      {
        name: "XGBoost & Evaluation",
        category: "Machine Learning",
        shortCode: "Xgb",
        description:
          "Gradient boosting, data preprocessing, model evaluation, and cross-validation.",
        level: "Internship Experience",
      },
    ],
  },

  {
    id: "tools",
    name: "Tools & Platforms",
    description:
      "Developer tools for version control, API testing, and development workflows.",
    skills: [
      {
        name: "Git & GitHub",
        category: "Version Control",
        shortCode: "Git",
        description:
          "Version control, branching, commits, and repository management.",
        level: "Core Stack",
      },
      {
        name: "Postman",
        category: "API Testing",
        shortCode: "Pst",
        description:
          "Testing HTTP requests, authentication headers, and API responses.",
        level: "Core Stack",
      },
      {
        name: "VS Code",
        category: "IDE Workspace",
        shortCode: "Vsc",
        description:
          "Development environment for JavaScript, TypeScript, Python, and Java.",
        level: "Core Stack",
      },
      {
        name: "WebSocket & WebRTC",
        category: "Real-Time",
        shortCode: "Wrt",
        description:
          "Real-time messaging and peer-to-peer communication workflows.",
        relatedProjects: ["carestream"],
        level: "Core Stack",
      },
    ],
  },

  {
    id: "cs-concepts",
    name: "Core Computer Science",
    description:
      "Computer science foundations for software engineering and system development.",
    skills: [
      {
        name: "Data Structures & Algorithms",
        category: "Core CS",
        shortCode: "Dsa",
        description:
          "Arrays, trees, graphs, sorting, searching, and complexity analysis.",
        level: "Core Foundation",
      },
      {
        name: "DBMS Concepts",
        category: "Core CS",
        shortCode: "Db",
        description:
          "Database normalization, ER modeling, indexing, and ACID properties.",
        level: "Core Foundation",
      },
      {
        name: "System Design",
        category: "Core CS",
        shortCode: "Sys",
        description:
          "Service architecture, API Gateway patterns, and authentication.",
        level: "Core Foundation",
      },
      {
        name: "Machine Learning Fundamentals",
        category: "Core CS",
        shortCode: "Ml",
        description:
          "Feature engineering, supervised learning, and model evaluation.",
        level: "Core Foundation",
      },
    ],
  },
];

// ==========================================
// EDUCATION
// ==========================================

export const EDUCATION: EducationItem[] = [
  {
    institution: "K L University, Vijayawada",
    degree: "B.Tech, Computer Science and Engineering",
    specialization:
      "Specialization: Generative AI for Agentic and Multimodal Intelligence",
    period: "2025 – 2028",
    score: "SGPA: 9.01 / 10",
    description:
      "Pursuing computer science studies with specialization in Generative AI, agentic architectures, multimodal intelligence, enterprise Java development, and relational database systems.",
  },

  {
    institution: "S.V. Government Polytechnic",
    degree: "Diploma, Computer Engineering",
    period: "2022 – 2025",
    score: "Percentage: 82%",
    description:
      "Built foundations in computer engineering, programming, web application development, database management systems, and hardware-software interaction.",
  },

  {
    institution: "Secondary Education (Class X)",
    degree: "Class X Certificate",
    period: "2022",
    score: "Percentage: 74%",
    description:
      "Completed secondary education with foundations in mathematics and science.",
  },
];

// ==========================================
// EXPERIENCE
// ==========================================

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "CODEON TECHNOLOGIES PVT. LTD.",
    role: "Web Development Intern",
    period: "November 2024 – May 2025",
    location: "Tirupati, Andhra Pradesh",
    bullets: [
      "Worked with HTML, CSS, JavaScript, PHP, and MySQL to develop, maintain, and enhance responsive web application features.",
      "Practiced database integration, debugging, testing, Git-based collaboration, and software development lifecycle (SDLC) workflows.",
    ],
  },

  {
    company: "KODACY in association with SPACE",
    role: "AI/ML Technical Intern",
    period: "30-Day Virtual Program | 2026",
    location: "Virtual Technical Internship",
    bullets: [
      "Learned AI/ML workflows, data preprocessing, model evaluation, cross-validation techniques, and XGBoost implementation.",
      "Studied data leakage prevention and best practices for reliable machine learning model evaluation.",
    ],
  },
];

// ==========================================
// PROJECTS
// ==========================================

export const PROJECTS: ProjectItem[] = [
  {
    id: "carestream",

    title: "CareStream",

    subtitle: "Hospital Management & Virtual Consultation Platform",

    category: "Full Stack Healthcare App",

    problem:
      "Healthcare providers and patients require a unified digital platform that combines hospital administration workflows with secure virtual consultations.",

    overview:
      "CareStream is a healthcare application combining hospital workflow management with remote doctor-patient consultation capabilities.",

    contribution:
      "Developed a full-stack healthcare platform using React and Spring Boot, implementing JWT authentication, REST APIs, MySQL persistence, WebSocket-based real-time notifications, and WebRTC-based virtual consultation functionality.",

    techStack: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "WebSocket",
      "STOMP",
      "WebRTC",
    ],

    features: [
      "React-based interface for medical and administrative workflows.",
      "Spring Boot REST APIs with JWT-based authentication.",
      "Spring Data JPA and Hibernate persistence with MySQL.",
      "Real-time event messaging and consultation alerts using WebSocket and STOMP.",
      "WebRTC-based virtual doctor consultation functionality.",
    ],

    github:
      "https://github.com/mayakuntlathanmai-1234/CareStream",

    status: "Active Development",

    deployment: "Frontend: Vercel | Backend: Railway / Docker",

    illustrativeUiType: "healthcare",
  },

  {
    id: "greenloop",

    title: "GreenLoop",

    subtitle: "Environmental Reporting & Community Engagement Platform",

    category: "Web Application",

    problem:
      "Communities need digital platforms that turn environmental awareness into actionable issue reporting, eco-event participation, and community engagement.",

    overview:
      "GreenLoop is an environmental platform designed to encourage community participation in pollution reporting, environmental events, quizzes, rewards, and digital certificates.",

    contribution:
      "Designed and developed the web interface and reporting workflows connecting environmental awareness with community participation.",

    techStack: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "REST APIs",
    ],

    features: [
      "Environmental issue reporting with location context.",
      "Community environmental event discovery and registration.",
      "Reward mechanism for verified community participation.",
      "Quiz and examination modules with digital certificate generation.",
    ],

    github:
      "https://github.com/mayakuntlathanmai-1234/greenloop2-app",

    status: "Completed Prototype",

    deployment:
      "https://greenloop2-app.vercel.app/",

    illustrativeUiType: "environmental",
  },

  {
    id: "urban-mobility",

    title: "Urban Mobility",

    subtitle: "Ride Management Microservices Platform",

    category: "Microservices Architecture",

    problem:
      "Monolithic ride-hailing applications can face scalability challenges when handling independent services such as payments, driver routing, and authentication.",

    overview:
      "Urban Mobility is a service-oriented ride-management platform featuring decoupled microservices for authentication, rides, drivers, and payments coordinated through an API Gateway.",

    contribution:
      "Worked on the microservice architecture, API Gateway routing, Eureka Service Discovery integration, and React frontend interfaces.",

    techStack: [
      "React",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Netflix Eureka",
      "Microservices",
      "REST APIs",
      "MySQL",
    ],

    features: [
      "API Gateway routing client requests to appropriate services.",
      "Service discovery and registration using Netflix Eureka.",
      "Separate services for authentication, rides, drivers, and payments.",
      "React dashboard communicating with backend services.",
    ],

    github:
      "https://github.com/mayakuntlathanmai-1234/urban-mobility",

    status: "Architecture Prototype",

    illustrativeUiType: "microservices",
  },

  {
    id: "sih-ai-workbench",

    title: "Sovereign On-Premise Agentic AI Workbench",

    subtitle:
      "Air-Gapped Document Intelligence & Local RAG System (SIH26117)",

    category: "Generative AI & Agentic Systems",

    problem:
      "Organizations handling sensitive documents may require offline AI systems because of data privacy requirements, security restrictions, and limited internet access.",

    overview:
      "Developing an on-premise document intelligence workflow designed for offline environments, enabling local document question answering and structured report generation.",

    contribution:
      "Developing an offline document intelligence system using FastAPI, ChromaDB, SentenceTransformers, and locally hosted Qwen models. The workflow includes document ingestion, semantic retrieval, context-grounded question answering, and structured document generation.",

    techStack: [
      "FastAPI",
      "ChromaDB",
      "SentenceTransformers",
      "Ollama",
      "Qwen2",
      "React",
      "Vite",
      "Tailwind CSS",
    ],

    features: [
      "Local document upload and processing without cloud API dependencies.",
      "Semantic embeddings using SentenceTransformers.",
      "Vector indexing and similarity search using ChromaDB.",
      "Context-grounded responses using locally hosted Qwen2 models.",
      "Structured output generation for DOCX, XLSX, and PPTX documents.",
    ],

    status: "In Progress (SIH26117)",

    illustrativeUiType: "agentic-ai",
  },
];

// ==========================================
// CERTIFICATIONS
// ==========================================

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "August 2026",
    type: "Industry Certification",
  },

  {
    title: "AI/ML Technical Internship Completion",
    issuer: "KODACY in association with SPACE",
    date: "July 2026",
    type: "Technical Internship Certificate",
  },
];

// ==========================================
// ACHIEVEMENTS
// ==========================================

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "State-Level Volleyball Player",
    organization: "25th IPSGM (2022–23)",
    description:
      "Represented at state level in the 25th IPSGM competition.",
  },

  {
    title: "National Cadet Corps (NCC) Cadet",
    organization: "National Cadet Corps",
    description:
      "NCC Cadet with experience in community service, leadership training, teamwork, and disciplined drill operations.",
  },

  {
    title: "Typewriting English (Higher & Lower)",
    organization: "State Technical Board",
    description:
      "Certified proficiency in English Typewriting: Higher grade (45 WPM) and Lower grade (30 WPM).",
  },
];