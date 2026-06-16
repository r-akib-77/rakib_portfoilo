// src/lib/db.ts
// Cloudflare D1 database abstraction layer
// Uses SQLite-compatible interface for both local and production

export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tags: string; // JSON string
  github_url?: string | null;
  live_url?: string | null;
  featured: number; // 0 or 1
  created_at: string;
  updated_at: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  description: string;
  skills: string; // JSON string
  link?: string | null;
  created_at: string;
}

export interface HeroData {
  id: number;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  photo_url: string;
  github_url?: string | null;
  linkedin_url?: string | null;
  email?: string | null;
  resume_url?: string | null;
  available_for_work: number; // 0 or 1
  updated_at: string;
}

// ─── In-memory store for local dev (no D1 needed) ──────────────────────────

let _projects: Project[] = [
  {
    id: 1,
    title: "BritTrade-Trading",
    description:
      "BritTrade-Trading is a modern, high-performance trading platform built to simplify complex financial markets through a seamless and intuitive user experience.",
    image_url: "/projectPic/bit-trade.png",
    tags: JSON.stringify(["TanStack Query", "Express", "JavaScript", "Firebase", "Tailwind"]),
    github_url: null,
    live_url: "https://brittrade.britsync.co.uk/",
    featured: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Odessey-FC",
    description:
      "Welcome to the official frontend portal framework for Odyssey FC. This application delivers a premium, highly responsive dark-aesthetic user interface.",
    image_url: "/projectPic/odyssey.png",
    tags: JSON.stringify(["Next.js", "MongoDB", "Node.js", "Prisma", "Tailwind"]),
    github_url: null,
    live_url: "https://odessey-fc.pages.dev/",
    featured: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: "LeadHunter — Ultimate B2B Lead Generation & Outreach System",
    description:
      "LeadHunter is a powerful, full-stack lead generation and automated outreach platform combining a high-performance scraping engine with a sophisticated email campaign manager.",
    image_url: "/projectPic/leadhunter.png",
    tags: JSON.stringify(["React", "Socket.io", "Node.js", "MongoDB"]),
    github_url: null,
    live_url: "https://leadhunter.uk/",
    featured: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

let _certifications: Certification[] = [
  {
    id: 1,
    title: "Complete Web Development",
    issuer: "Programming Hero",
    date: "2024",
    credential: "PH-WEB-2024",
    description:
      "Advanced full-stack development with React, Next.js, Node.js, MongoDB and scalable deployment workflows.",
    skills: JSON.stringify(["React", "Next.js", "MongoDB", "Express", "Tailwind"]),
    link: "#",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Problem Solving & DSA",
    issuer: "LeetCode",
    date: "2024",
    credential: "LC-DSA-991",
    description:
      "Solved advanced algorithmic problems focused on optimization, graphs, recursion, and system-level thinking.",
    skills: JSON.stringify(["Algorithms", "Data Structures", "Graphs", "DP", "Optimization"]),
    link: "#",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Backend Engineering",
    issuer: "Coursera",
    date: "2023",
    credential: "BE-ENGINE-223",
    description:
      "Production backend engineering including REST APIs, authentication, databases, and cloud architecture.",
    skills: JSON.stringify(["Node.js", "PostgreSQL", "JWT", "Firebase", "API Design"]),
    link: "#",
    created_at: new Date().toISOString(),
  },
];

let _hero: HeroData = {
  id: 1,
  name: "Rakib",
  role: "FULL STACK ENGINEER",
  tagline: "Building futuristic digital experiences.",
  bio: "Full-stack software developer with strong expertise in building scalable web applications using modern front-end and back-end technologies. Proficient in designing production-ready systems, implementing CI/CD pipelines, and automating deployments.",
  photo_url: "/hero/hero.png",
  github_url: "https://github.com",
  linkedin_url: "https://linkedin.com",
  email: "yourmail@gmail.com",
  resume_url: "/resume.pdf",
  available_for_work: 1,
  updated_at: new Date().toISOString(),
};

let _nextId = 4;

// ─── DB API ─────────────────────────────────────────────────────────────────

export const db = {
  // PROJECTS
  getProjects(): Project[] {
    return [..._projects].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  },

  getProject(id: number): Project | undefined {
    return _projects.find((p) => p.id === id);
  },

  createProject(data: Omit<Project, "id" | "created_at" | "updated_at">): Project {
    const now = new Date().toISOString();
    const project: Project = { id: _nextId++, ...data, created_at: now, updated_at: now };
    _projects.push(project);
    return project;
  },

  updateProject(id: number, data: Partial<Omit<Project, "id" | "created_at">>): Project | null {
    const idx = _projects.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    _projects[idx] = { ..._projects[idx], ...data, updated_at: new Date().toISOString() };
    return _projects[idx];
  },

  deleteProject(id: number): boolean {
    const before = _projects.length;
    _projects = _projects.filter((p) => p.id !== id);
    return _projects.length < before;
  },

  // CERTIFICATIONS
  getCertifications(): Certification[] {
    return [..._certifications].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  },

  getCertification(id: number): Certification | undefined {
    return _certifications.find((c) => c.id === id);
  },

  createCertification(data: Omit<Certification, "id" | "created_at">): Certification {
    const cert: Certification = { id: _nextId++, ...data, created_at: new Date().toISOString() };
    _certifications.push(cert);
    return cert;
  },

  updateCertification(
    id: number,
    data: Partial<Omit<Certification, "id" | "created_at">>
  ): Certification | null {
    const idx = _certifications.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    _certifications[idx] = { ..._certifications[idx], ...data };
    return _certifications[idx];
  },

  deleteCertification(id: number): boolean {
    const before = _certifications.length;
    _certifications = _certifications.filter((c) => c.id !== id);
    return _certifications.length < before;
  },

  // HERO
  getHero(): HeroData {
    return { ..._hero };
  },

  updateHero(data: Partial<Omit<HeroData, "id" | "created_at">>): HeroData {
    _hero = { ..._hero, ...data, updated_at: new Date().toISOString() };
    return { ..._hero };
  },
};
