// src/lib/r2.ts
// Cloudflare R2 (S3-compatible) storage client
// Uploads are compressed via Sharp before sending to R2

import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

const r2 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_S3_ENDPOINT || "",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET = process.env.R2_BUCKET_NAME || "";
const PUBLIC_URL = (process.env.R2_PUBLIC_URL || "").replace(/\/$/, "");

export type UploadFolder = "projects" | "hero" | "certs" | "general";

/**
 * Upload a Buffer to R2 and return the public CDN URL.
 * The key is: `{folder}/{timestamp}-{originalName}`
 */
export async function uploadToR2(
  buffer: Buffer,
  originalName: string,
  mimeType: string,
  folder: UploadFolder = "general"
): Promise<string> {
  const ext = originalName.split(".").pop()?.toLowerCase() || "webp";
  const key = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  await r2.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ContentType: mimeType,
      // Enable long-lived caching on the CDN edge
      CacheControl: "public, max-age=31536000, immutable",
    })
  );

  return `${PUBLIC_URL}/${key}`;
}

/**
 * Delete an object from R2 by its full public URL.
 */
export async function deleteFromR2(publicUrl: string): Promise<void> {
  // Strip the base URL to get the key
  const key = publicUrl.replace(`${PUBLIC_URL}/`, "");
  if (!key || key === publicUrl) return; // safety guard

  await r2.send(
    new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key,
    })
  );
}
