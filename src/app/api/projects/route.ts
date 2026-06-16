// src/app/api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { db as memDb } from "@/lib/db";
import { getD1 } from "@/lib/cf";
import {
  d1GetProjects,
  d1CreateProject,
} from "@/lib/d1db";

export const runtime = "edge";

export async function GET() {
  const d1 = getD1();
  const projects = d1
    ? await d1GetProjects(d1)
    : memDb.getProjects();
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const auth = await isAdminAuthenticated();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const { title, description, image_url, tags, github_url, live_url, featured } = body;

    if (!title || !description || !image_url) {
      return NextResponse.json(
        { error: "title, description and image_url are required" },
        { status: 400 }
      );
    }

    const data = {
      title,
      description,
      image_url,
      tags: typeof tags === "string" ? tags : JSON.stringify(tags ?? []),
      github_url: github_url || null,
      live_url: live_url || null,
      featured: featured ? 1 : 0,
    };

    const d1 = getD1();
    const project = d1
      ? await d1CreateProject(d1, data)
      : memDb.createProject(data);

    return NextResponse.json(project, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
