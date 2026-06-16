// src/app/api/certifications/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { db as memDb } from "@/lib/db";
import { getD1 } from "@/lib/cf";
import {
  d1GetCertification,
  d1UpdateCertification,
  d1DeleteCertification,
} from "@/lib/d1db";

export const runtime = "edge";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const d1 = getD1();
  const cert = d1
    ? await d1GetCertification(d1, Number(id))
    : memDb.getCertification(Number(id)) ?? null;

  if (!cert) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(cert);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await isAdminAuthenticated();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();

  const data = {
    ...body,
    skills: body.skills
      ? typeof body.skills === "string"
        ? body.skills
        : JSON.stringify(body.skills)
      : undefined,
    link: body.link ?? null,
  };

  const d1 = getD1();
  const updated = d1
    ? await d1UpdateCertification(d1, Number(id), data)
    : memDb.updateCertification(Number(id), data);

  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await isAdminAuthenticated();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const d1 = getD1();
  const deleted = d1
    ? await d1DeleteCertification(d1, Number(id))
    : memDb.deleteCertification(Number(id));

  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
