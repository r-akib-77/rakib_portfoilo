// src/lib/d1db.ts
// Cloudflare D1 (SQLite edge database) CRUD operations.
// Called by API routes when a D1 binding is available.
// Falls back to the in-memory store (db.ts) when running locally via next dev.

import type { D1Database } from "@cloudflare/workers-types";
import type { Project, Certification, HeroData } from "./db";

// D1 returns Record<string, unknown>[] — cast via unknown to our typed interfaces
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cast = <T>(v: any): T => v as unknown as T;

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export async function d1GetProjects(db: D1Database): Promise<Project[]> {
  const { results } = await db
    .prepare("SELECT * FROM projects ORDER BY created_at DESC")
    .all();
  return cast<Project[]>(results);
}

export async function d1GetProject(
  db: D1Database,
  id: number
): Promise<Project | null> {
  const row = await db
    .prepare("SELECT * FROM projects WHERE id = ?")
    .bind(id)
    .first();
  return row ? cast<Project>(row) : null;
}

export async function d1CreateProject(
  db: D1Database,
  data: Omit<Project, "id" | "created_at" | "updated_at">
): Promise<Project> {
  const now = new Date().toISOString();
  const { meta } = await db
    .prepare(
      `INSERT INTO projects (title, description, image_url, tags, github_url, live_url, featured, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      data.title,
      data.description,
      data.image_url,
      data.tags,
      data.github_url ?? null,
      data.live_url ?? null,
      data.featured,
      now,
      now
    )
    .run();

  const inserted = await db
    .prepare("SELECT * FROM projects WHERE id = ?")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .bind((meta as any).last_row_id)
    .first();
  return cast<Project>(inserted);
}

export async function d1UpdateProject(
  db: D1Database,
  id: number,
  data: Partial<Omit<Project, "id" | "created_at">>
): Promise<Project | null> {
  const entries = Object.entries(data).filter(([, v]) => v !== undefined);
  if (!entries.length) return d1GetProject(db, id);

  const fields = entries.map(([k]) => `${k} = ?`).join(", ");
  const values = entries.map(([, v]) => v);
  const now = new Date().toISOString();

  await db
    .prepare(`UPDATE projects SET ${fields}, updated_at = ? WHERE id = ?`)
    .bind(...values, now, id)
    .run();

  return d1GetProject(db, id);
}

export async function d1DeleteProject(
  db: D1Database,
  id: number
): Promise<boolean> {
  const { meta } = await db
    .prepare("DELETE FROM projects WHERE id = ?")
    .bind(id)
    .run();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (meta as any).changes > 0;
}

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────

export async function d1GetCertifications(db: D1Database): Promise<Certification[]> {
  const { results } = await db
    .prepare("SELECT * FROM certifications ORDER BY created_at DESC")
    .all();
  return cast<Certification[]>(results);
}

export async function d1GetCertification(
  db: D1Database,
  id: number
): Promise<Certification | null> {
  const row = await db
    .prepare("SELECT * FROM certifications WHERE id = ?")
    .bind(id)
    .first();
  return row ? cast<Certification>(row) : null;
}

export async function d1CreateCertification(
  db: D1Database,
  data: Omit<Certification, "id" | "created_at">
): Promise<Certification> {
  const now = new Date().toISOString();
  const { meta } = await db
    .prepare(
      `INSERT INTO certifications (title, issuer, date, credential, description, skills, link, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      data.title,
      data.issuer,
      data.date,
      data.credential ?? "",
      data.description ?? "",
      data.skills,
      data.link ?? null,
      now
    )
    .run();

  const inserted = await db
    .prepare("SELECT * FROM certifications WHERE id = ?")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .bind((meta as any).last_row_id)
    .first();
  return cast<Certification>(inserted);
}

export async function d1UpdateCertification(
  db: D1Database,
  id: number,
  data: Partial<Omit<Certification, "id" | "created_at">>
): Promise<Certification | null> {
  const entries = Object.entries(data).filter(([, v]) => v !== undefined);
  if (!entries.length) return d1GetCertification(db, id);

  const fields = entries.map(([k]) => `${k} = ?`).join(", ");
  const values = entries.map(([, v]) => v);

  await db
    .prepare(`UPDATE certifications SET ${fields} WHERE id = ?`)
    .bind(...values, id)
    .run();

  return d1GetCertification(db, id);
}

export async function d1DeleteCertification(
  db: D1Database,
  id: number
): Promise<boolean> {
  const { meta } = await db
    .prepare("DELETE FROM certifications WHERE id = ?")
    .bind(id)
    .run();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (meta as any).changes > 0;
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

export async function d1GetHero(db: D1Database): Promise<HeroData | null> {
  const row = await db.prepare("SELECT * FROM hero WHERE id = 1").first();
  return row ? cast<HeroData>(row) : null;
}

export async function d1UpdateHero(
  db: D1Database,
  data: Partial<Omit<HeroData, "id">>
): Promise<HeroData> {
  const entries = Object.entries(data).filter(([, v]) => v !== undefined);
  const now = new Date().toISOString();

  if (entries.length) {
    const fields = entries.map(([k]) => `${k} = ?`).join(", ");
    const values = entries.map(([, v]) => v);
    await db
      .prepare(`UPDATE hero SET ${fields}, updated_at = ? WHERE id = 1`)
      .bind(...values, now)
      .run();
  }

  return (await d1GetHero(db)) as HeroData;
}
