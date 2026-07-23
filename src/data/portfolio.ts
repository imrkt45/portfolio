export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'ai' | 'mobile';

export type Project = {
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  summary: string;
  stack: string[];
  highlights: string[];
  href?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
  metrics?: { value: string; label: string }[];
};

export const profile = {
  name: 'Raj Kumar Tiwari',
  role: 'Full Stack Developer',
  tagline: 'Full Stack Developer | AI & LLM Integration',
  location: 'Noida, India',
  phone: '+91 8178223608',
  email: 'info.rajtiwari45@gmail.com',
  github: 'https://github.com/imrkt45',
  linkedin: 'https://www.linkedin.com/in/raj-kumar-tiwari-187441204/',
  leetcode: 'https://leetcode.com/u/imrkt45/',
  resume: '/Raj-Resume.pdf',
  summary:
    'Software Engineer specializing in frontend development with 2+ years building responsive, scalable interfaces using React.js, Redux, Next.js, JavaScript, TypeScript, Angular, and Material UI. Intermediate expertise in Data Structures & Algorithms and C++, with strong data-persistence skills in MongoDB — and a proven track record extending into backend systems (Python, FastAPI, Node.js, Express.js, WebSockets) and AI solutions using RAG, LangChain, and OpenAI.',
};

export const stats = [
  { label: 'Engineering Experience', value: '2+ yrs' },
  { label: 'Faster API Response', value: '~40%' },
  { label: 'Fewer AI Hallucinations', value: '50%' },
  { label: 'Featured Projects', value: '5' },
];

export const capabilities = [
  {
    title: 'Frontend Engineering',
    description:
      'Responsive, high-performance React, Next.js, and Angular interfaces with Redux state management, TypeScript, Material UI, and Web Workers for smooth, scalable UX.',
  },
  {
    title: 'Full-Stack & Backend',
    description:
      'Production APIs and server-side logic with Node.js, Express.js, FastAPI, REST, WebSockets, and Kafka — backed by MongoDB, PostgreSQL, Redis caching, and Docker.',
  },
  {
    title: 'AI & LLM Integration',
    description:
      'OpenAI-powered LLM features, RAG pipelines with LangChain, FAISS vector retrieval, ChatOllama agents, and tool-calling architectures that ground responses in real data.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Redux', 'Next.js', 'JavaScript', 'TypeScript', 'Angular', 'Material UI'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'Kafka', 'WebSockets'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Git', 'Docker'],
  },
  {
    title: 'AI & Data',
    skills: ['RAG', 'LangChain', 'OpenAI', 'FAISS', 'ChatOllama'],
  },
  {
    title: 'Foundations',
    skills: ['Data Structures', 'Algorithms', 'C++', 'OOP', 'Flutter', 'Dart'],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Sense & Respond Software LLC',
    role: 'Software Engineer',
    period: 'Jan 2024 - Apr 2026',
    metrics: [
      { value: '~30%', label: 'faster page load' },
      { value: '~40%', label: 'faster API response' },
      { value: '50%', label: 'fewer AI hallucinations' },
    ],
    points: [
      'Built responsive, high-performance interfaces with React.js, Redux, TypeScript, JavaScript, and Material UI, focused on scalability and user experience.',
      'Implemented API integration through Redux for centralized state management, efficient data handling, and optimized application performance.',
      'Developed foundational backend services — APIs and server-side logic — using Node.js and Express.js with MongoDB integration.',
      'Developed and integrated OpenAI-powered LLM APIs into full-stack applications, enabling real-time responses and richer user interaction.',
      'Used Web Workers to handle computationally intensive tasks, improving UI responsiveness and reducing page load time by ~30% while preventing main-thread blocking.',
      'Implemented Redis caching to reduce database queries, improving API response time by ~40% and enhancing application scalability.',
      'Built a RAG pipeline using LangChain and OpenAI, reducing AI hallucinations by 50% by grounding responses in retrieved contextual documents.',
    ],
  },
  {
    company: 'Sense & Respond Software LLC',
    role: 'Software Engineer Intern',
    period: 'Sep 2023 - Dec 2023',
    points: [
      'Built reusable frontend components using React.js, TypeScript, JavaScript, Redux, and Material UI while learning scalable architecture.',
      'Explored backend fundamentals including API handling, data flow, and frontend-backend integration.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Review Portal',
    category: 'fullstack',
    summary:
      'Full-stack review platform with separate user and admin portals, AI-powered review generation, screenshot proof uploads, and moderation workflows.',
    stack: [
      'React.js',
      'TypeScript',
      'Material UI',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'OpenAI API',
      'Local Storage',
    ],
    highlights: [
      'Developed and deployed a full-stack application, owning both frontend and backend responsibilities.',
      'Built a user portal where users generate reviews with OpenAI, submit them, and upload screenshots as proof of submission.',
      'Built an admin dashboard to review uploaded screenshots and approve or reject submissions.',
      'Delivered the full workflow with React.js, TypeScript, Material UI, Redux, Local Storage, and OpenAI API integration.',
    ],
  },
  {
    title: 'Product Inventory System',
    category: 'fullstack',
    summary:
      'Full-stack inventory platform with a FastAPI + PostgreSQL backend and a React frontend for product, customer, and order management with real-time CRUD.',
    stack: [
      'React.js',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Pydantic',
      'Docker',
      'Axios',
      'REST APIs',
    ],
    highlights: [
      'Developed RESTful APIs with FastAPI for product, customer, and order management.',
      'Designed relational data models and managed operations using SQLAlchemy ORM and PostgreSQL.',
      'Implemented Pydantic validation, inventory tracking, stock validation, and automated order-processing workflows.',
      'Containerized backend services with Docker and added transaction management and error handling.',
      'Built a responsive React frontend integrated via Axios for real-time CRUD across inventory, customer, and order modules.',
    ],
  },
  {
    title: 'Trading View Project',
    category: 'frontend',
    summary:
      'Modern trading platform frontend built with Next.js, focused on performance, dynamic UI components, and real-time data visualization.',
    stack: ['Next.js', 'React', 'TypeScript', 'Material UI', 'Charts'],
    highlights: [
      'Designed scalable, high-performance UI components for data-heavy trading workflows.',
      'Implemented dynamic UI and real-time data visualization for a seamless user experience.',
      'Planned backend API expansion for richer market interactions.',
    ],
    href: 'https://github.com/imrkt45/trading-view',
  },
  {
    title: 'AI Agent with RAG',
    category: 'ai',
    summary:
      'Context-aware AI agent built with LangChain that leverages multiple data sources and tools to deliver accurate, grounded responses.',
    stack: [
      'Python',
      'LangChain',
      'RAG',
      'ChatOllama',
      'Llama 3.1',
      'FAISS',
      'Wikipedia API',
      'Arxiv API',
    ],
    highlights: [
      'Built a RAG pipeline by loading web documents, splitting text, generating embeddings, and storing them in a FAISS vector database for efficient retrieval.',
      'Integrated Wikipedia and Arxiv APIs to expand knowledge coverage.',
      'Created a custom retriever tool with dynamic tool selection using a tool-calling agent architecture.',
      'Used ChatOllama (Llama 3.1) as the core LLM and an Agent Executor to process queries across sources in real time.',
    ],
    href: 'https://github.com/imrkt45/AI_agent',
  },
  {
    title: 'CheckIn Project',
    category: 'mobile',
    summary:
      'Cross-platform mobile application for efficient check-in and check-out management with offline support.',
    stack: ['Flutter', 'Dart', 'Local JSON Storage'],
    highlights: [
      'Built a cross-platform app with Flutter and Dart for streamlined check-in / check-out flows.',
      'Implemented a lightweight local JSON database for data handling and offline support.',
    ],
    href: 'https://github.com/imrkt45/checkin-project',
  },
];

export const education = {
  degree: 'B.Tech in Computer Science and Engineering (AI/ML)',
  school: 'Galgotias University, Greater Noida, Uttar Pradesh',
  period: '2020 - 2024',
};
