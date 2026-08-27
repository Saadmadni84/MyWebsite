export type ProjectEntry = {
  name: string;
  primaryUrl: string;
  primaryLabel: "Live" | "GitHub" | "GitHub (Unverified)";
  repositoryUrl: string;
  description: string;
  tags: readonly string[];
  note?: string;
};

export const projects: readonly ProjectEntry[] = [
  {
    name: "RecSystem",
    primaryUrl: "https://github.com/Saadmadni84/RecSystem",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/RecSystem",
    description:
      "Research-oriented recommendation system framework with modular PyTorch models for CTR prediction, multi-task learning, sequential recommendation, and evaluation workflows.",
    tags: ["Python", "PyTorch", "Recommendation Systems", "CTR Modeling"],
  },
  {
    name: "Shifa",
    primaryUrl: "https://github.com/Saadmadni84/Shifa",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/Shifa",
    description:
      "Full-stack healthcare platform for patient visits, clinical documents, AI-assisted summaries, multilingual access, and RAG-backed patient Q and A workflows.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Redis", "FastAPI", "RAG"],
  },
  {
    name: "Swasth-AI",
    primaryUrl: "https://swasth-ai-jc2f.vercel.app/hero",
    primaryLabel: "Live",
    repositoryUrl: "https://github.com/Saadmadni84/Swasth-AI",
    description:
      "Health management platform for personal and family records, appointments, documents, and AI-assisted healthcare workflows across a Next.js and Python service architecture.",
    tags: ["Next.js", "TypeScript", "Supabase", "Python", "Flask"],
  },
  {
    name: "FixMyCity",
    primaryUrl: "https://fixmycitysm.vercel.app",
    primaryLabel: "Live",
    repositoryUrl: "https://github.com/Saadmadni84/FixMyCity",
    description:
      "Civic issue reporting platform with citizen and officer workflows, ward-based routing, real-time status tracking, notifications, and production deployment across frontend and backend services.",
    tags: ["React", "TypeScript", "Vite", "MySQL", "Drizzle ORM"],
  },
  {
    name: "realtime-reconciliation-engine",
    primaryUrl: "https://github.com/Saadmadni84/realtime-reconciliation-engine",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/realtime-reconciliation-engine",
    description:
      "Deterministic reconciliation engine for distributed financial transaction events with idempotency, conflict resolution, replay support, and an auditable transaction state model.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Spring Data JPA"],
  },
  {
    name: "SentinelSOC",
    primaryUrl: "https://github.com/Saadmadni84/SentinelSOC",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/SentinelSOC",
    description:
      "Wazuh-based SOC home lab for centralized security monitoring, custom detection rules, log analysis, alert investigation, and incident response practice.",
    tags: ["Wazuh", "Suricata", "Kali Linux", "Ubuntu Server"],
  },
  {
    name: "Spring-boot-kafka-real-time-tracking",
    primaryUrl: "https://github.com/Saadmadni84/Spring-boot-kafka-real-time-tracking",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/Spring-boot-kafka-real-time-tracking",
    description:
      "Real-time location tracking system built as producer and consumer microservices over Kafka, designed for high-throughput delivery, fleet, and GPS-style event streaming.",
    tags: ["Java 17", "Spring Boot", "Apache Kafka", "Spring Kafka"],
  },
  {
    name: "IndustrialBrain-AI",
    primaryUrl: "https://github.com/Saadmadni84/IndustrialBrain-AI",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/IndustrialBrain-AI",
    description:
      "Industrial knowledge intelligence platform spanning document intelligence, knowledge graph modeling, RAG workflows, AI copilot features, and analytics modules.",
    tags: ["React", "Spring Boot", "FastAPI", "PostgreSQL", "Neo4j", "Kafka"],
  },
  {
    name: "AI-chatbot",
    primaryUrl: "https://github.com/Saadmadni84/AI-chatbot",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/AI-chatbot",
    description:
      "Full-stack chatbot application with a Spring Boot backend, React and Vite frontend, markdown chat rendering, and local LLM integration through Ollama.",
    tags: ["React", "Vite", "Spring Boot", "Ollama", "Tailwind CSS"],
  },
  {
    name: "ResumeScoreX",
    primaryUrl: "https://github.com/Saadmadni84/ResumeScoreX",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/ResumeScoreX",
    description:
      "ATS resume scoring application for uploads, keyword matching, score analysis, report generation, and actionable resume improvement feedback.",
    tags: ["Java 17", "Spring Boot", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Decentralized-Web-Hosting-server",
    primaryUrl: "https://github.com/Saadmadni84/Decentralized-Web-Hosting-server",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/Decentralized-Web-Hosting-server",
    description:
      "Decentralized web hosting platform combining AI-powered routing, DAO-governed moderation, and resilient content delivery over decentralized storage concepts.",
    tags: ["Next.js 14", "React 18", "Tailwind CSS", "Web3", "Framer Motion"],
  },
  {
    name: "Smart-Procurement-HPCL-",
    primaryUrl: "https://github.com/Saadmadni84/Smart-Procurement-HPCL-",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/Smart-Procurement-HPCL-",
    description:
      "Procurement automation system combining discovery artifacts, workflow design, and a Spring Boot plus React implementation for rules, approvals, and digital procurement operations.",
    tags: ["Java 17", "Spring Boot", "MySQL", "React 18", "Vite", "Flyway"],
  },
  {
    name: "websocket-chat-app",
    primaryUrl: "https://github.com/Saadmadni84/websocket-chat-app",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/websocket-chat-app",
    description:
      "Real-time chat application using Spring Boot WebSocket and React to support persistent bidirectional messaging with STOMP and SockJS.",
    tags: ["React", "Spring Boot", "WebSocket", "STOMP", "SockJS"],
  },
  {
    name: "The-Salted-Olive",
    primaryUrl: "https://thesaltedolive.c36.airoapp.ai/",
    primaryLabel: "Live",
    repositoryUrl: "https://github.com/Saadmadni84/The-Salted-Olive",
    description:
      "Modern restaurant web application built for a luxury dining brand experience with a performant React, TypeScript, and Vite frontend.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
  },
  {
    name: "boericke-scraper",
    primaryUrl: "https://github.com/Saadmadni84/boericke-scraper",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/boericke-scraper",
    description:
      "Production-grade Python scraper that transforms Boericke Materia Medica into structured JSON for downstream search, NLP, and AI retrieval workflows.",
    tags: ["Python", "BeautifulSoup", "requests", "MongoDB"],
  },
  {
    name: "SignAura",
    primaryUrl: "https://github.com/Saadmadni84/SignAura",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/SignAura",
    description:
      "Computer vision system for interpreting non-manual features of Indian Sign Language and converting them into contextual text in real time.",
    tags: ["JavaScript", "MediaPipe", "TensorFlow.js", "scikit-learn"],
  },
  {
    name: "Manpower-",
    primaryUrl: "https://github.com/Saadmadni84/Manpower-",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/Manpower-",
    description:
      "MERN workforce management platform for employee tracking, analytics, job matching, resume parsing, and admin-side operations.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    name: "Garage-JDBC-project",
    primaryUrl: "https://github.com/Saadmadni84/Garage-JDBC-project",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/Garage-JDBC-project",
    description:
      "Java JDBC console application for garage billing, customer management, vehicle registration, and invoice generation backed by MySQL.",
    tags: ["Java", "JDBC", "MySQL"],
  },
  {
    name: "form-builder",
    primaryUrl: "https://github.com/Saadmadni84/form-builder",
    primaryLabel: "GitHub",
    repositoryUrl: "https://github.com/Saadmadni84/form-builder",
    description:
      "Full-stack drag-and-drop form builder with live preview, field customization, saved forms, and REST-backed persistence.",
    tags: ["React", "Node.js", "Express.js", "Vite", "Tailwind CSS"],
  },
] as const;
