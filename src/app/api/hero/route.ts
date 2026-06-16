// src/app/api/hero/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { db as memDb } from "@/lib/db";
import { getD1 } from "@/lib/cf";
import { d1GetHero, d1UpdateHero } from "@/lib/d1db";

export const runtime = "edge";

export async function GET() {
  const d1 = getD1();
  const hero = d1 ? await d1GetHero(d1) : memDb.getHero();
  return NextResponse.json(hero);
}

export async function PATCH(req: NextRequest) {
  const auth = await isAdminAuthenticated();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const data = {
      ...body,
      github_url: body.github_url || null,
      linkedin_url: body.linkedin_url || null,
      email: body.email || null,
      resume_url: body.resume_url || null,
      available_for_work:
        body.available_for_work !== undefined
          ? body.available_for_work
            ? 1
            : 0
          : undefined,
    };

    const d1 = getD1();
    const updated = d1
      ? await d1UpdateHero(d1, data)
      : memDb.updateHero(data);

    return NextResponse.json(updated);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
