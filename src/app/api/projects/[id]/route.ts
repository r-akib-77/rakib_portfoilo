// src/app/api/projects/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { db as memDb } from "@/lib/db";
import { getD1 } from "@/lib/cf";
import {
  d1GetProject,
  d1UpdateProject,
  d1DeleteProject,
} from "@/lib/d1db";
import { deleteFromR2 } from "@/lib/r2";

export const runtime = "edge";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const d1 = getD1();
  const project = d1
    ? await d1GetProject(d1, Number(id))
    : memDb.getProject(Number(id)) ?? null;

  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(project);
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
    tags: body.tags
      ? typeof body.tags === "string"
        ? body.tags
        : JSON.stringify(body.tags)
      : undefined,
    github_url: body.github_url ?? null,
    live_url: body.live_url ?? null,
    featured:
      body.featured !== undefined ? (body.featured ? 1 : 0) : undefined,
  };

  const d1 = getD1();
  const updated = d1
    ? await d1UpdateProject(d1, Number(id), data)
    : memDb.updateProject(Number(id), data);

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
  const project = d1
    ? await d1GetProject(d1, Number(id))
    : memDb.getProject(Number(id)) ?? null;

  // Clean up R2 image
  if (project?.image_url?.startsWith("http")) {
    try { await deleteFromR2(project.image_url); } catch { /* ignore */ }
  }

  const deleted = d1
    ? await d1DeleteProject(d1, Number(id))
    : memDb.deleteProject(Number(id));

  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
