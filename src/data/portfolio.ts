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
  location: string;
  points: string[];
  metrics?: { value: string; label: string }[];
};

export const profile = {
  name: 'Raj Kumar Tiwari',
  role: 'Full Stack Developer',
  tagline: 'Full Stack Developer | AI & LLM Integration',
  location: 'Noida, Uttar Pradesh, India',
  phone: '+91 8178223608',
  email: 'info.rajtiwari45@gmail.com',
  github: 'https://github.com/imrkt45',
  linkedin: 'https://www.linkedin.com/in/raj-kumar-tiwari-187441204/',
  leetcode: 'https://leetcode.com/u/imrkt45/',
  resume: '/Raj-Kumar-Tiwari-Resume.pdf',
  summary:
    'Full Stack Developer with 2.5+ years designing and shipping responsive, high-performance web applications using React.js, Next.js, JavaScript, TypeScript, Redux, and Material UI — backed by Node.js, Express.js, and MongoDB. Proven record of turning complex requirements into scalable architecture and measurable performance gains, with hands-on experience in Python, FastAPI, WebSockets, Redis, Docker, and Kafka, and production AI features built with RAG, LangChain, and OpenAI.',
};

export const stats = [
  { label: 'Engineering Experience', value: '2.5+ yrs' },
  { label: 'Faster API Response', value: '~40%' },
  { label: 'Fewer AI Hallucinations', value: '~50%' },
  { label: 'Featured Projects', value: '5' },
];

export const capabilities = [
  {
    title: 'Frontend Engineering',
    description:
      'Responsive, high-performance React and Next.js interfaces with Redux, TypeScript, Material UI, HTML5/CSS3, and Web Workers — built for scalability, accessibility, and a consistent user experience.',
  },
  {
    title: 'Full-Stack & Backend',
    description:
      'Production REST APIs and server-side logic with Node.js, Express.js, FastAPI, WebSockets, and Kafka — backed by MongoDB, Redis caching, and Docker-based deployments.',
  },
  {
    title: 'AI & LLM Integration',
    description:
      'OpenAI-powered LLM features and Retrieval-Augmented Generation pipelines with LangChain and FAISS vector retrieval, plus tool-calling agents that ground responses in real data.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Redux', 'Material UI', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'WebSockets', 'Kafka'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Redis'],
  },
  {
    title: 'AI & LLM',
    skills: ['RAG', 'LangChain', 'OpenAI APIs', 'FAISS Vector Database'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Git'],
  },
  {
    title: 'Core Competencies',
    skills: ['Data Structures & Algorithms', 'C++', 'Object-Oriented Programming', 'System Design Fundamentals', 'Agile / Scrum'],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Sense & Respond Software LLC',
    role: 'Software Engineer',
    period: 'Jan 2024 - Apr 2026',
    location: 'Noida, India',
    metrics: [
      { value: '~30%', label: 'faster page load' },
      { value: '~40%', label: 'faster API response' },
      { value: '~50%', label: 'fewer AI hallucinations' },
    ],
    points: [
      'Built responsive, high-performance user interfaces with React.js, Redux, TypeScript, JavaScript, and Material UI, prioritizing scalability, accessibility, and a consistent user experience across modules.',
      'Integrated REST APIs with Redux for centralized state management, streamlining data flow across the application and reducing redundant network calls.',
      'Implemented Web Workers to offload computationally intensive tasks, improving UI responsiveness and reducing page load time by ~30% by preventing main-thread blocking.',
      'Introduced Redis caching for frequently accessed data, cutting database queries and improving API response time by ~40% while improving overall application scalability.',
      'Built a Retrieval-Augmented Generation (RAG) pipeline with LangChain and OpenAI that grounded model responses in retrieved contextual documents, reducing AI hallucinations by ~50%.',
      'Developed and integrated OpenAI-powered LLM APIs into full-stack applications, enabling intelligent features such as real-time responses and enhanced user interaction.',
      'Developed server-side logic and REST APIs using Node.js and Express.js with MongoDB integration, supporting end-to-end feature delivery from database to interface.',
      'Collaborated with product managers, designers, and backend engineers in an Agile environment; participated in code reviews and improved maintainability through reusable, component-based architecture.',
    ],
  },
  {
    company: 'Sense & Respond Software LLC',
    role: 'Software Engineer Intern',
    period: 'Sep 2023 - Dec 2023',
    location: 'Noida, India',
    points: [
      'Built reusable UI components using React.js, TypeScript, JavaScript, Redux, and Material UI, contributing to a scalable and consistent frontend architecture.',
      'Gained practical exposure to backend fundamentals including API handling, data flow, and frontend-backend integration, strengthening full-stack development capability.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'AI Agent with RAG',
    category: 'ai',
    summary:
      'Intelligent AI agent built with LangChain that draws on multiple data sources and tools to deliver context-aware, accurate responses.',
    stack: [
      'Python',
      'LangChain',
      'RAG',
      'FAISS',
      'ChatOllama',
      'Llama 3.1',
      'Wikipedia API',
      'Arxiv API',
    ],
    highlights: [
      'Built a RAG pipeline that loads web-based documents, splits text into chunks, generates embeddings, and stores them in a FAISS vector database for efficient semantic retrieval.',
      'Integrated external knowledge sources including the Wikipedia and arXiv APIs to broaden topical coverage.',
      'Created a custom retriever tool and enabled dynamic tool selection through a tool-calling agent architecture, with ChatOllama (Llama 3.1) as the core LLM.',
      'Implemented an Agent Executor to process user queries and fetch relevant information from multiple sources in real time.',
    ],
    href: 'https://github.com/imrkt45/AI_agent',
  },
  {
    title: 'Review Portal',
    category: 'fullstack',
    summary:
      'Full-stack review management platform with separate user and admin portals, AI-powered review generation, screenshot proof uploads, and moderation workflows.',
    stack: [
      'React.js',
      'TypeScript',
      'Material UI',
      'Redux',
      'Node.js',
      'OpenAI',
      'Screenshot Uploads',
    ],
    highlights: [
      'Designed, developed, and deployed a full-stack review management platform consisting of a user portal and an admin portal, covering both frontend and backend implementation.',
      'User Portal: built with React.js, TypeScript, Material UI, and Redux, letting users generate reviews with OpenAI, submit them, and upload screenshots as proof of submission.',
      'Admin Portal: built an administrative dashboard to moderate submissions, verify uploaded screenshots, and approve or reject reviews.',
    ],
  },
  {
    title: 'Product Inventory Management System',
    category: 'fullstack',
    summary:
      'Full-stack inventory platform with a FastAPI + PostgreSQL backend and a React frontend for product, customer, and order management with real-time CRUD.',
    stack: [
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Pydantic',
      'React.js',
      'Axios',
      'Docker',
    ],
    highlights: [
      'Developed RESTful APIs with FastAPI for product, customer, and order management, backed by relational data models using SQLAlchemy ORM and PostgreSQL.',
      'Implemented Pydantic validation, inventory tracking, stock validation, and automated order-processing workflows with transaction management and structured error handling.',
      'Containerized backend services with Docker for consistent, reproducible deployments across environments.',
      'Built a responsive React.js frontend integrated with backend APIs via Axios, delivering real-time CRUD operations through reusable form and table components.',
    ],
  },
  {
    title: 'Trading View Platform',
    category: 'frontend',
    summary:
      'Modern trading platform built with Next.js, focused on a high-performance, scalable frontend and real-time data visualization.',
    stack: ['Next.js', 'TypeScript', 'React', 'Material UI', 'Charts'],
    highlights: [
      'Developing a modern trading platform in Next.js with a high-performance, scalable frontend focused on a seamless user experience.',
      'Implementing dynamic UI components and real-time data visualization, with planned extension into backend services and APIs.',
    ],
    href: 'https://github.com/imrkt45/trading-view',
  },
  {
    title: 'CheckIn Mobile Application',
    category: 'mobile',
    summary:
      'Cross-platform mobile application for check-in and check-out management with a lightweight local database and offline support.',
    stack: ['Flutter', 'Dart', 'Local JSON Storage'],
    highlights: [
      'Developed a cross-platform mobile application for check-in and check-out management.',
      'Used a lightweight local JSON-based database for data handling and offline support.',
    ],
    href: 'https://github.com/imrkt45/checkin-project',
  },
];

export const education = {
  degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
  school: 'Galgotias University, Greater Noida, Uttar Pradesh, India',
  period: '2020 - 2024',
};
