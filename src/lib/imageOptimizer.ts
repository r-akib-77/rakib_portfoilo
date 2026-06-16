// src/lib/imageOptimizer.ts
// Image "optimization" for Cloudflare Pages edge runtime.
// Sharp (native binary) cannot run on CF Workers — compression is done
// client-side via the browser Canvas API (see ImageUploader in admin/page.tsx).
// This module is a lightweight passthrough that just renames the file to .webp
// since the client already sent a compressed WebP blob.

export interface OptimizedImage {
  buffer: Buffer;
  mimeType: string;
  filename: string;
}

/**
 * Passthrough: the file was already compressed by the browser to WebP.
 * We just forward the buffer directly to R2.
 */
export async function optimizeImage(
  inputBuffer: Buffer,
  originalFilename: string
): Promise<OptimizedImage> {
  const basename = originalFilename.replace(/\.[^.]+$/, "");
  const filename = basename.endsWith(".webp")
    ? basename
    : `${basename}.webp`;

  return {
    buffer: inputBuffer,
    mimeType: "image/webp",
    filename,
  };
}

/** Same as optimizeImage — client already compressed the thumbnail. */
export async function optimizeThumbnail(
  inputBuffer: Buffer,
  originalFilename: string
): Promise<OptimizedImage> {
  return optimizeImage(inputBuffer, originalFilename);
}
