// src/lib/cf.ts
// Helper to get Cloudflare Workers bindings (D1, env vars) at request time.
// In local `next dev` this returns null — the in-memory fallback takes over.
// In production (CF Pages) or `wrangler pages dev` it returns real bindings.

import type { D1Database } from "@cloudflare/workers-types";

export interface CFEnv {
  DB?: D1Database;
  ADMIN_USERNAME?: string;
  ADMIN_PASSWORD?: string;
  JWT_SECRET?: string;
  R2_S3_ENDPOINT?: string;
  R2_ACCESS_KEY_ID?: string;
  R2_SECRET_ACCESS_KEY?: string;
  R2_BUCKET_NAME?: string;
  R2_PUBLIC_URL?: string;
}

/**
 * Returns Cloudflare Workers env bindings, or null when running outside CF context.
 */
export function getCFEnv(): CFEnv | null {
  try {
    // Dynamic import to avoid module-level errors on non-CF environments
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getRequestContext } = require("@cloudflare/next-on-pages");
    return getRequestContext().env as CFEnv;
  } catch {
    return null;
  }
}

/**
 * Returns D1 binding if available, otherwise null (fall back to in-memory db).
 */
export function getD1(): D1Database | null {
  return getCFEnv()?.DB ?? null;
}
