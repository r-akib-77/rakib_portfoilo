// src/env.d.ts
// Cloudflare Workers / Pages binding types
// These match the bindings defined in wrangler.toml

interface CloudflareEnv {
  // D1 Database (bound as "DB" in wrangler.toml)
  DB: import("@cloudflare/workers-types").D1Database;

  // Environment variables (set in CF Pages dashboard)
  ADMIN_USERNAME: string;
  ADMIN_PASSWORD: string;
  JWT_SECRET: string;

  R2_S3_ENDPOINT: string;
  R2_ACCESS_KEY_ID: string;
  R2_SECRET_ACCESS_KEY: string;
  R2_BUCKET_NAME: string;
  R2_PUBLIC_URL: string;
}
