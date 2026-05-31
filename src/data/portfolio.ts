export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'ai' | 'mobile';

export type Project = {
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  summary: string;
  stack: string[];
  highlights: string[];
  href?: string;
};

export const profile = {
  name: 'Raj Kumar Tiwari',
  role: 'Software Developer',
  location: 'Noida, India',
  phone: '+91 8178223608',
  email: 'info.rajtiwari45@gmail.com',
  github: 'https://github.com/imrkt45',
  linkedin: 'https://www.linkedin.com/in/raj-kumar-tiwari-187441204/',
  leetcode: 'https://leetcode.com/u/imrkt45/',
  resume: '/Raj-Resume.pdf',
  summary:
    'Software Engineer specializing in frontend development with 2+ years of experience building responsive, scalable interfaces using React, Redux, Next.js, TypeScript, JavaScript, and Material UI. Expanding into backend systems, AI integrations, RAG workflows, LangChain, and OpenAI-powered applications.',
};

export const stats = [
  { label: 'Frontend Experience', value: '2+ yrs' },
  { label: 'Production Projects', value: '5+' },
  { label: 'Core Stack', value: 'React + Backend' },
  { label: 'Current Focus', value: 'AI/RAG' },
];

export const capabilities = [
  {
    title: 'Frontend Engineering',
    description:
      'Responsive React and Next.js interfaces with Redux state management, TypeScript, Material UI, and performance-minded component architecture.',
  },
  {
    title: 'Full-Stack Foundations',
    description:
      'Backend fundamentals with Node.js, Express.js, REST APIs, WebSockets, MongoDB, and frontend-backend integration.',
  },
  {
    title: 'AI Product Integration',
    description:
      'OpenAI-powered workflows, LLM features, RAG pipelines, LangChain agents, Ollama, FAISS retrieval, and tool-based data access.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Redux', 'Next.js', 'JavaScript', 'TypeScript', 'Material UI'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Data & AI',
    skills: ['MongoDB', 'RAG', 'LangChain', 'OpenAI', 'FAISS', 'ChatOllama'],
  },
  {
    title: 'Foundations',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Git', 'Flutter', 'Dart'],
  },
];

export const experience = [
  {
    company: 'Sense & Respond Software LLC',
    role: 'Software Engineer',
    period: 'Jan 2024 - Apr 2026',
    points: [
      'Built responsive, high-performance interfaces with React, Redux, TypeScript, JavaScript, and Material UI.',
      'Integrated APIs through Redux for centralized state, efficient data handling, and optimized application performance.',
      'Developed foundational backend services with Node.js, Express.js, and MongoDB integration.',
      'Integrated OpenAI-powered LLM APIs into full-stack applications for real-time intelligent user interactions.',
      'Used Web Workers for computationally intensive tasks to preserve UI responsiveness.',
    ],
  },
  {
    company: 'Sense & Respond Software LLC',
    role: 'Software Engineer Intern',
    period: 'Sep 2023 - Dec 2023',
    points: [
      'Built reusable frontend components using React, TypeScript, JavaScript, Redux, and Material UI.',
      'Explored backend fundamentals including API handling, data flow, and frontend-backend integration.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Review Portal',
    category: 'fullstack',
    summary:
      'Full-stack review portal with separate user and admin portals, AI-powered review generation, proof uploads, and review moderation.',
    stack: [
      'React.js',
      'TypeScript',
      'Material UI',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'OpenAI API',
      'AI Integration',
      'Local Storage',
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'Admin Dashboard',
      'Screenshot Uploads',
      'Review Moderation',
    ],
    highlights: [
      'Developed and deployed a full-stack application covering both frontend and backend responsibilities.',
      'Built a user portal where users can generate reviews using OpenAI, submit those reviews, and upload screenshots as proof of submission.',
      'Built an admin portal with a dashboard to review uploaded screenshots and approve or reject submitted reviews.',
      'Used React.js, TypeScript, Material UI, Redux, Local Storage, and OpenAI API integration across the portal workflows.',
    ],
  },
  {
    title: 'Trading View Project',
    category: 'frontend',
    summary:
      'Modern trading platform frontend focused on performance, dynamic UI, and real-time data visualization.',
    stack: ['Next.js', 'React', 'TypeScript', 'Material UI', 'Charts'],
    highlights: [
      'Designed scalable UI components for trading workflows.',
      'Focused on responsive, high-performance rendering for data-heavy views.',
      'Planned backend API expansion for richer market interactions.',
    ],
    href: 'https://github.com/imrkt45/trading-view',
  },
  {
    title: 'CheckIn Project',
    category: 'mobile',
    summary:
      'Cross-platform mobile application for efficient check-in and check-out management.',
    stack: ['Flutter', 'Dart', 'Local JSON Storage'],
    highlights: [
      'Implemented offline-friendly local data handling.',
      'Built streamlined mobile flows for attendance-style workflows.',
    ],
    href: 'https://github.com/imrkt45/checkin-project',
  },
  {
    title: 'AI Agent with RAG',
    category: 'ai',
    summary:
      'Context-aware AI agent using LangChain, RAG, multiple data sources, and tool selection.',
    stack: [
      'Python',
      'LLM',
      'RAG',
      'LangChain',
      'Ollama',
      'ChatOllama',
      'FAISS',
      'Wikipedia API',
      'Arxiv API',
    ],
    highlights: [
      'Built a RAG pipeline for web documents, text splitting, embeddings, and vector retrieval.',
      'Integrated Wikipedia and Arxiv APIs to expand knowledge coverage.',
      'Implemented agent execution for real-time query processing across tools.',
    ],
    href: 'https://github.com/imrkt45/AI_agent',
  },
];

export const education = {
  degree: 'B.Tech in Computer Science and Engineering (AI/ML)',
  school: 'Galgotias University, Greater Noida, Uttar Pradesh',
  period: '2020 - 2024',
};
