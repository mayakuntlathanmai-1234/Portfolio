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
  illustrativeUiType: 'healthcare' | 'environmental' | 'microservices' | 'agentic-ai';
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

export const PROFILE: Profile = {
  name: "Mayakuntla Thanmai",
  firstName: "Thanmai",
  lastName: "Mayakuntla",
  title: "Full Stack Developer & AI Specialist",
  specialization: "Generative AI for Agentic & Multimodal Intelligence",
  summary: "Third-year B.Tech Computer Science and Engineering student specializing in Generative AI for Agentic and Multimodal Intelligence. Full-stack developer with hands-on experience building web applications using React, Java, Spring Boot, REST APIs, and relational databases. Interested in developing reliable, secure applications and practical AI-powered systems.",
  location: "Dharmavaram, Andhra Pradesh, India",
  phone: "+91 9491637097",
  email: "mayakuntlathanmai1234@gmail.com",
  github: "https://github.com/mayakuntlathanmai-1234",
  githubUsername: "mayakuntlathanmai-1234",
  resumePdf: "/Mayakuntla_Thanmai_Resume.pdf",
  videoSrc: "/intro-video.mp4",
  posterSrc: "/poster.jpg",
  quickFacts: [
    { label: "Degree", value: "B.Tech in Computer Science & Engineering" },
    { label: "Specialization", value: "Generative AI for Agentic & Multimodal Intelligence" },
    { label: "University", value: "K L University, Vijayawada" },
    { label: "Academic Standout", value: "SGPA: 9.01 / 10" },
    { label: "Core Stack", value: "React, Java, Spring Boot, FastAPI, MySQL, Python" },
    { label: "AI Expertise", value: "RAG Pipelines, Local LLMs (Ollama/Qwen), Vector DBs (ChromaDB)" }
  ]
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages used for building enterprise backends, data pipelines, and frontend interfaces.",
    skills: [
      { name: "Java", category: "Backend & Systems", shortCode: "Jv", description: "Primary language for building robust, scalable enterprise microservices and Spring Boot REST APIs.", relatedProjects: ["carestream", "urban-mobility"], level: "Core Stack" },
      { name: "Python", category: "AI & Scripting", shortCode: "Py", description: "Used extensively for Generative AI workflows, machine learning models, FastAPI endpoints, and data processing.", relatedProjects: ["sih-ai-workbench"], level: "Core Stack" },
      { name: "JavaScript", category: "Frontend & Web", shortCode: "Js", description: "Foundation for interactive client-side web applications and asynchronous state management.", relatedProjects: ["carestream", "greenloop", "urban-mobility"], level: "Core Stack" },
      { name: "SQL", category: "Data Querying", shortCode: "Sql", description: "Relational database querying, schema modeling, joins, indexing, and transaction management.", relatedProjects: ["carestream", "urban-mobility", "greenloop"], level: "Core Stack" },
      { name: "C", category: "Systems & CS", shortCode: "C", description: "Foundational low-level programming for understanding memory allocation, pointers, and data structures.", level: "Academic & CS" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Modern UI engineering frameworks for responsive, accessible, and high-performance interfaces.",
    skills: [
      { name: "React.js", category: "UI Library", shortCode: "Rc", description: "Building component-based single-page web applications with modern hooks, context, and state handling.", relatedProjects: ["carestream", "greenloop", "urban-mobility", "sih-ai-workbench"], level: "Core Stack" },
      { name: "HTML5", category: "Structure", shortCode: "Ht", description: "Semantic web structure ensuring web accessibility (a11y), clean document hierarchy, and SEO.", level: "Core Stack" },
      { name: "CSS3", category: "Styling", shortCode: "Cs", description: "Modern CSS layout algorithms including Flexbox, CSS Grid, custom properties, and responsive media queries.", level: "Core Stack" },
      { name: "Tailwind CSS", category: "Utility Styling", shortCode: "Tw", description: "Rapid utility-first CSS styling for editorial design systems, subtle micro-interactions, and responsive layouts.", relatedProjects: ["carestream", "sih-ai-workbench"], level: "Core Stack" }
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Architecting secure RESTful microservices, real-time messaging, and high-concurrency server runtimes.",
    skills: [
      { name: "Spring Boot", category: "Framework", shortCode: "Sb", description: "Enterprise Java framework for building RESTful APIs, dependency injection, and production services.", relatedProjects: ["carestream", "urban-mobility"], level: "Core Stack" },
      { name: "Spring Security & JWT", category: "Security", shortCode: "Sec", description: "Securing backend endpoints with Stateless JSON Web Token authentication, role authorization, and cors filter management.", relatedProjects: ["carestream", "urban-mobility"], level: "Core Stack" },
      { name: "REST APIs", category: "Architecture", shortCode: "Api", description: "Designing clean, decoupled HTTP endpoint contracts with proper status codes, request validation, and JSON payloads.", relatedProjects: ["carestream", "urban-mobility", "sih-ai-workbench"], level: "Core Stack" },
      { name: "Microservices", category: "System Design", shortCode: "Ms", description: "Decoupled domain service architecture utilizing API Gateways and Eureka Service Discovery.", relatedProjects: ["urban-mobility"], level: "Core Stack" },
      { name: "Hibernate / JPA", category: "ORM", shortCode: "Jpa", description: "Object-Relational Mapping for persistent Java entities, repository queries, and relational mapping.", relatedProjects: ["carestream"], level: "Core Stack" },
      { name: "FastAPI", category: "Python Backend", shortCode: "Fa", description: "Asynchronous Python web framework ideal for high-performance AI endpoints and vector search integrations.", relatedProjects: ["sih-ai-workbench"], level: "Core Stack" },
      { name: "PHP", category: "Web Scripting", shortCode: "Php", description: "Server-side web scripting used during Web Development Internship for dynamic application logic and MySQL integration.", level: "Internship Experience" }
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Relational persistence and vector embeddings storage for structured and semantic intelligence data.",
    skills: [
      { name: "MySQL", category: "Relational DB", shortCode: "My", description: "Primary relational database for entity persistence, relational schemas, foreign keys, and transaction security.", relatedProjects: ["carestream", "urban-mobility", "greenloop"], level: "Core Stack" },
      { name: "PostgreSQL", category: "Relational DB", shortCode: "Pg", description: "Advanced open-source relational database supporting ACID transactions and structured queries.", level: "Core Skill" },
      { name: "ChromaDB", category: "Vector Database", shortCode: "Chr", description: "Open-source vector database for storing document embeddings, metadata filtering, and fast similarity search.", relatedProjects: ["sih-ai-workbench"], level: "AI Stack" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Generative AI pipelines, local LLM execution, RAG systems, and classical ML evaluation.",
    skills: [
      { name: "Generative AI", category: "AI Engineering", shortCode: "Gen", description: "Engineering prompt templates, LLM orchestration, document extraction workflows, and multimodal inputs.", relatedProjects: ["sih-ai-workbench"], level: "Specialization" },
      { name: "RAG Architecture", category: "AI Architecture", shortCode: "Rag", description: "Retrieval-Augmented Generation linking vector search context with local models to minimize hallucinations.", relatedProjects: ["sih-ai-workbench"], level: "Specialization" },
      { name: "SentenceTransformers", category: "Embeddings", shortCode: "Emb", description: "Converting raw document text into dense semantic vector representations for similarity matching.", relatedProjects: ["sih-ai-workbench"], level: "Specialization" },
      { name: "Ollama / Qwen", category: "Local LLM", shortCode: "Oll", description: "Running open-weights language models locally (Qwen2) for completely offline, air-gapped document intelligence.", relatedProjects: ["sih-ai-workbench"], level: "Specialization" },
      { name: "XGBoost & Evaluation", category: "Machine Learning", shortCode: "Xgb", description: "Gradient boosted decision trees, data preprocessing, cross-validation, and preventing data leakage.", level: "Internship Experience" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Essential developer tooling for version control, API testing, containerization, and IDE workflows.",
    skills: [
      { name: "Git & GitHub", category: "Version Control", shortCode: "Git", description: "Branching strategies, commit hygiene, pull requests, and collaborative repository management.", level: "Core Stack" },
      { name: "Postman", category: "API Testing", shortCode: "Pst", description: "Constructing HTTP request collections, environment variables, authentication header testing, and response inspection.", level: "Core Stack" },
      { name: "VS Code", category: "IDE Workspace", shortCode: "Vsc", description: "Customized code editor environment with extensions for TypeScript, Python, Java, and Git integration.", level: "Core Stack" },
      { name: "WebSocket & WebRTC", category: "Real-Time", shortCode: "Wrt", description: "Bi-directional WebSocket messaging (STOMP) and peer-to-peer WebRTC consultation workflows.", relatedProjects: ["carestream"], level: "Core Stack" }
    ]
  },
  {
    id: "cs-concepts",
    name: "Core Computer Science",
    description: "Foundational principles governing software performance, database efficiency, and system architecture.",
    skills: [
      { name: "Data Structures & Algorithms", category: "Core CS", shortCode: "Dsa", description: "Arrays, trees, graphs, sorting, searching, time/space complexity analysis, and efficient problem solving.", level: "Core Foundation" },
      { name: "DBMS Concepts", category: "Core CS", shortCode: "Db", description: "Normalization (1NF-3NF), ER modeling, indexing strategies, transaction isolation, and ACID properties.", level: "Core Foundation" },
      { name: "System Design", category: "Core CS", shortCode: "Sys", description: "Decoupling services, load distribution, API Gateway patterns, and stateless authentication.", level: "Core Foundation" },
      { name: "Machine Learning Fundamentals", category: "Core CS", shortCode: "Ml", description: "Feature engineering, supervised learning algorithms, overfitting mitigation, and precision/recall metrics.", level: "Core Foundation" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "K L University, Vijayawada",
    degree: "B.Tech, Computer Science and Engineering",
    specialization: "Specialization: Generative AI for Agentic and Multimodal Intelligence",
    period: "2025 – 2027",
    score: "SGPA: 9.01 / 10",
    description: "Pursuing advanced computer science studies with dedicated specialization in Generative AI, agentic architectures, multimodal intelligence, enterprise Java development, and relational database systems."
  },
  {
    institution: "S.V. Government Polytechnic",
    degree: "Diploma, Computer Engineering",
    period: "2022 – 2025",
    score: "Percentage: 82%",
    description: "Built strong foundations in computer engineering fundamentals, programming, web application development, database management systems, and hardware-software interaction."
  },
  {
    institution: "Secondary Education (Class X)",
    degree: "Class X Certificate",
    period: "2022",
    score: "Percentage: 74%",
    description: "Completed secondary education with solid academic discipline in mathematics and science."
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "CODEON TECHNOLOGIES PVT. LTD.",
    role: "Web Development Intern",
    period: "6 Months Duration",
    location: "Software Engineering Team",
    bullets: [
      "Worked with HTML, CSS, JavaScript, PHP, and MySQL to develop, maintain, and enhance web application features.",
      "Practiced database integration, debugging, testing, Git-based collaboration, and full software development lifecycle (SDLC) workflows."
    ]
  },
  {
    company: "KODACY in association with SPACE",
    role: "AI/ML Technical Intern",
    period: "30-Day Virtual Program | 2026",
    location: "Virtual Technical Internship",
    bullets: [
      "Learned core AI/ML workflows, data preprocessing, model evaluation, cross-validation techniques, and XGBoost implementation.",
      "Studied data leakage prevention strategies and best practices for reliable machine learning model evaluation."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "carestream",
    title: "CareStream",
    subtitle: "Hospital Management & Virtual Consultation Platform",
    category: "Full Stack Healthcare App",
    problem: "Healthcare providers and patients require a unified digital platform that seamlessly combines administrative hospital workflows with secure real-time virtual consultations.",
    overview: "CareStream is a comprehensive healthcare application combining hospital workflow management with remote doctor-patient consultation capabilities over web interfaces.",
    contribution: "Built the full-stack architecture using React and Spring Boot. Implemented JWT authentication, JPA persistence, WebSocket real-time alerts, and WebRTC consultation channels.",
    techStack: ["React", "Tailwind CSS", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "Hibernate", "MySQL", "WebSocket", "STOMP", "WebRTC"],
    features: [
      "React-based interface for medical and administrative consultation workflows.",
      "Spring Boot REST APIs protected with JWT-based stateless authentication.",
      "Spring Data JPA / Hibernate persistence with MySQL relational database.",
      "Real-time event messaging & consultation alerts via WebSocket / STOMP.",
      "WebRTC video consultation exploration for direct virtual doctor appointments."
    ],
    status: "Active Development",
    deployment: "Vercel (Frontend) & Railway / Docker (Backend)",
    illustrativeUiType: "healthcare"
  },
  {
    id: "greenloop",
    title: "GreenLoop",
    subtitle: "Environmental Reporting & Community Engagement Platform",
    category: "Web Application",
    problem: "Communities lack active digital platforms that turn environmental awareness into actionable issue reporting, eco-event participation, and verified rewards.",
    overview: "GreenLoop is an environmental platform concept designed to foster community participation in reporting pollution, attending eco-events, taking quizzes, and earning digital certificates.",
    contribution: "Designed and developed the web interface and reporting workflow connecting environmental awareness with actionable community participation.",
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"],
    features: [
      "Pollution and environmental issue reporting with location context.",
      "Community environmental event discovery and registration.",
      "Reward mechanism for verified community participation.",
      "Quiz/exam module with automated eco-certificate issuance."
    ],
    github: "https://github.com/mayakuntlathanmai-1234/greenloop2-app",
    status: "Completed Prototype",
    illustrativeUiType: "environmental"
  },
  {
    id: "urban-mobility",
    title: "Urban Mobility",
    subtitle: "Ride Management Microservices Platform",
    category: "Microservices Architecture",
    problem: "Monolithic ride-hailing applications struggle with scaling independent features like payment processing, driver routing, and user authentication during peak demand.",
    overview: "Urban Mobility is a service-oriented ride-management platform featuring decoupled microservices for auth, rides, drivers, and payments coordinated via an API Gateway.",
    contribution: "Architected the microservice breakdown, API Gateway routing rules, and Eureka Service Discovery integration with React frontend interfaces.",
    techStack: ["React", "Spring Boot", "Spring Cloud Gateway", "Netflix Eureka", "Microservices", "REST APIs", "MySQL"],
    features: [
      "API Gateway entry point routing client requests to appropriate services.",
      "Service discovery and registration using Netflix Eureka.",
      "Decoupled microservices for Authentication, Rides, Drivers, and Payments.",
      "React dashboard communicating across distributed backend endpoints."
    ],
    github: "https://github.com/mayakuntlathanmai-1234/urban-mobility",
    status: "Architecture Prototype",
    illustrativeUiType: "microservices"
  },
  {
    id: "sih-ai-workbench",
    title: "Sovereign On-Premise Agentic AI Workbench",
    subtitle: "Air-Gapped Document Intelligence & Local RAG System (SIH26117)",
    category: "Generative AI & Agentic Systems",
    problem: "Organizations handling sensitive documents cannot rely on third-party cloud LLM APIs due to strict data privacy regulations, air-gap requirements, and internet constraints.",
    overview: "Developing an on-premise document intelligence workflow designed for offline and air-gapped environments, enabling local document QA and structured report generation.",
    contribution: "Engineering the local retrieval-augmented generation (RAG) pipeline combining FastAPI, ChromaDB vector indexing, SentenceTransformers embeddings, and local Qwen LLM inference.",
    techStack: ["FastAPI", "ChromaDB", "SentenceTransformers", "Ollama", "Qwen2", "React", "Vite", "Tailwind CSS"],
    features: [
      "Upload and parse documents locally without cloud API dependencies.",
      "Dense semantic embeddings creation with SentenceTransformers.",
      "Vector indexing & similarity search using local ChromaDB storage.",
      "Grounding local LLM (Qwen2 via Ollama) responses to retrieved context.",
      "Structured output export to DOCX, XLSX, and PPT document formats."
    ],
    status: "In Progress (SIH26117)",
    illustrativeUiType: "agentic-ai"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "August 2026",
    type: "Industry Certification"
  },
  {
    title: "AI/ML Technical Internship Completion",
    issuer: "KODACY in association with SPACE",
    date: "July 2026",
    type: "Technical Internship Certificate"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "State-Level Volleyball Player",
    organization: "25th IPSGM (2022–23) & University Volleyball",
    description: "Represented at state level in the 25th IPSGM competition; Runner-up in University Volleyball Season 3."
  },
  {
    title: "National Cadet Corps (NCC) Cadet",
    organization: "National Cadet Corps",
    description: "Active NCC Cadet committed to community service, leadership training, and disciplined drill operations."
  },
  {
    title: "Typewriting English (Higher & Lower)",
    organization: "State Technical Board",
    description: "Certified proficiency in English Typewriting: Higher grade (45 WPM) and Lower grade (30 WPM)."
  }
];
