// src/app/api/upload/route.ts
// Edge-compatible image upload — optimised client-side (WebP via Canvas),
// forwarded raw to Cloudflare R2 with a 1-year CDN cache header.

import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { uploadToR2, type UploadFolder } from "@/lib/r2";

export const runtime = "edge";

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

export async function POST(req: NextRequest) {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as UploadFolder) || "general";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files are allowed" },
        { status: 400 }
      );
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File too large (max 10 MB)" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Client already compressed to WebP via Canvas — upload directly to R2
    const url = await uploadToR2(buffer, file.name, file.type, folder);

    return NextResponse.json({
      url,
      size: buffer.length,
      // Savings are calculated client-side and displayed in the UI
      savings: 0,
    });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
