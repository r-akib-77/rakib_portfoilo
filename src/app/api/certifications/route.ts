// src/app/api/certifications/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { db as memDb } from "@/lib/db";
import { getD1 } from "@/lib/cf";
import { d1GetCertifications, d1CreateCertification } from "@/lib/d1db";

export const runtime = "edge";

export async function GET() {
  const d1 = getD1();
  const certs = d1
    ? await d1GetCertifications(d1)
    : memDb.getCertifications();
  return NextResponse.json(certs);
}

export async function POST(req: NextRequest) {
  const auth = await isAdminAuthenticated();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const { title, issuer, date, credential, description, skills, link } = body;

    if (!title || !issuer || !date) {
      return NextResponse.json(
        { error: "title, issuer and date are required" },
        { status: 400 }
      );
    }

    const data = {
      title,
      issuer,
      date,
      credential: credential || "",
      description: description || "",
      skills: typeof skills === "string" ? skills : JSON.stringify(skills ?? []),
      link: link || null,
    };

    const d1 = getD1();
    const cert = d1
      ? await d1CreateCertification(d1, data)
      : memDb.createCertification(data);

    return NextResponse.json(cert, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
