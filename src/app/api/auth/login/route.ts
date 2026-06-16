// src/app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { signAdminToken, COOKIE_NAME } from "@/lib/auth";
import { getCFEnv } from "@/lib/cf";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // Prefer CF Workers env vars, fall back to process.env for local next dev
    const cfEnv = getCFEnv();
    const validUser = cfEnv?.ADMIN_USERNAME ?? process.env.ADMIN_USERNAME ?? "admin";
    const validPass = cfEnv?.ADMIN_PASSWORD ?? process.env.ADMIN_PASSWORD ?? "admin";

    if (username !== validUser || password !== validPass) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await signAdminToken();
    const res = NextResponse.json({ success: true });
    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 h
    });

    return res;
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
