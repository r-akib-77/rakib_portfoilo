-- Cloudflare D1 Schema for Rakib's Portfolio
-- Run: npx wrangler d1 execute portfolio-db --file=./schema.sql --remote
-- Local:  npx wrangler d1 execute portfolio-db --file=./schema.sql

-- ── Projects ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  title        TEXT    NOT NULL,
  description  TEXT    NOT NULL,
  image_url    TEXT    NOT NULL,
  tags         TEXT    NOT NULL DEFAULT '[]',
  github_url   TEXT,
  live_url     TEXT,
  featured     INTEGER NOT NULL DEFAULT 0,
  created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- ── Certifications ───────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS certifications (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  title        TEXT    NOT NULL,
  issuer       TEXT    NOT NULL,
  date         TEXT    NOT NULL,
  credential   TEXT    NOT NULL DEFAULT '',
  description  TEXT    NOT NULL DEFAULT '',
  skills       TEXT    NOT NULL DEFAULT '[]',
  link         TEXT,
  created_at   TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- ── Hero ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS hero (
  id                 INTEGER PRIMARY KEY DEFAULT 1,
  name               TEXT    NOT NULL DEFAULT 'Rakib',
  role               TEXT    NOT NULL DEFAULT 'FULL STACK ENGINEER',
  tagline            TEXT    NOT NULL DEFAULT 'Building futuristic digital experiences.',
  bio                TEXT    NOT NULL DEFAULT '',
  photo_url          TEXT    NOT NULL DEFAULT '/hero/hero.png',
  github_url         TEXT,
  linkedin_url       TEXT,
  email              TEXT,
  resume_url         TEXT,
  available_for_work INTEGER NOT NULL DEFAULT 1,
  updated_at         TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- ── Seed: initial hero row (safe to re-run) ───────────────────────────────────
INSERT OR IGNORE INTO hero (id, name, role, tagline, bio, photo_url,
  github_url, linkedin_url, email, resume_url, available_for_work)
VALUES (
  1,
  'Rakib',
  'FULL STACK ENGINEER',
  'Building futuristic digital experiences.',
  'Full-stack software developer with strong expertise in building scalable web applications using modern front-end and back-end technologies. Proficient in designing production-ready systems, implementing CI/CD pipelines, and automating deployments.',
  '/hero/hero.png',
  'https://github.com',
  'https://linkedin.com',
  'yourmail@gmail.com',
  '/resume.pdf',
  1
);

-- ── Seed: initial projects (safe to re-run) ──────────────────────────────────
INSERT OR IGNORE INTO projects (id, title, description, image_url, tags, github_url, live_url, featured)
VALUES
  (1, 'BritTrade-Trading',
   'BritTrade-Trading is a modern, high-performance trading platform built to simplify complex financial markets through a seamless and intuitive user experience.',
   '/projectPic/bit-trade.png',
   '["TanStack Query","Express","JavaScript","Firebase","Tailwind"]',
   NULL, 'https://brittrade.britsync.co.uk/', 1),
  (2, 'Odessey-FC',
   'Welcome to the official frontend portal framework for Odyssey FC. This application delivers a premium, highly responsive dark-aesthetic user interface.',
   '/projectPic/odyssey.png',
   '["Next.js","MongoDB","Node.js","Prisma","Tailwind"]',
   NULL, 'https://odessey-fc.pages.dev/', 1),
  (3, 'LeadHunter — Ultimate B2B Lead Generation & Outreach System',
   'LeadHunter is a powerful, full-stack lead generation and automated outreach platform combining a high-performance scraping engine with a sophisticated email campaign manager.',
   '/projectPic/leadhunter.png',
   '["React","Socket.io","Node.js","MongoDB"]',
   NULL, 'https://leadhunter.uk/', 1);

-- ── Seed: initial certifications ─────────────────────────────────────────────
INSERT OR IGNORE INTO certifications (id, title, issuer, date, credential, description, skills, link)
VALUES
  (1, 'Complete Web Development', 'Programming Hero', '2024', 'PH-WEB-2024',
   'Advanced full-stack development with React, Next.js, Node.js, MongoDB and scalable deployment workflows.',
   '["React","Next.js","MongoDB","Express","Tailwind"]', '#'),
  (2, 'Problem Solving & DSA', 'LeetCode', '2024', 'LC-DSA-991',
   'Solved advanced algorithmic problems focused on optimization, graphs, recursion, and system-level thinking.',
   '["Algorithms","Data Structures","Graphs","DP","Optimization"]', '#'),
  (3, 'Backend Engineering', 'Coursera', '2023', 'BE-ENGINE-223',
   'Production backend engineering including REST APIs, authentication, databases, and cloud architecture.',
   '["Node.js","PostgreSQL","JWT","Firebase","API Design"]', '#');
