// src/lib/auth.ts
// JWT-based admin authentication using the jose library (Edge-compatible)

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-change-in-production"
);

const COOKIE_NAME = "admin_token";
const TOKEN_EXPIRY = "24h";

export async function signAdminToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRY)
    .sign(JWT_SECRET);
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function getAdminTokenFromCookies(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const token = await getAdminTokenFromCookies();
  if (!token) return false;
  return verifyAdminToken(token);
}

export { COOKIE_NAME };
