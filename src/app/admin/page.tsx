"use client";

import { useState } from "react";
import { ImageIcon, Globe, Tag, FolderPlus } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function AdminProjectsPage() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <FolderPlus size={14} />
            <span className="text-xs tracking-[0.25em] text-zinc-400">
              PROJECT CMS
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-tight">
            Manage
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-zinc-400">
            Upload and manage portfolio projects from a beautiful admin
            dashboard.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* Upload Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="mb-5 font-semibold">Project Cover</h2>

            <label
              htmlFor="image"
              className="group flex h-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] transition-all hover:border-purple-500/50 hover:bg-purple-500/5"
            >
              {preview ? (
                <Image
                  src={preview}
                  alt=""
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                <>
                  <ImageIcon size={40} className="mb-4 text-zinc-500" />
                  <p className="text-sm text-zinc-400">Click to upload image</p>
                </>
              )}
            </label>

            <input
              id="image"
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Project Title
                </label>

                <input
                  placeholder="Nova SaaS"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition-all focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Description
                </label>

                <textarea
                  rows={5}
                  placeholder="Describe your project..."
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition-all focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
                  <Tag size={14} />
                  Tags
                </label>

                <input
                  placeholder="Next.js, Prisma, Stripe"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition-all focus:border-purple-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
                    <FaGithub size={14} />
                    Github URL
                  </label>

                  <input
                    placeholder="https://github.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition-all focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
                    <Globe size={14} />
                    Live URL
                  </label>

                  <input
                    placeholder="https://yourproject.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition-all focus:border-purple-500"
                  />
                </div>
              </div>

              <button
                className="
                  mt-4
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-500
                  via-fuchsia-500
                  to-cyan-500
                  py-4
                  font-semibold
                  transition-all
                  hover:scale-[1.02]
                "
              >
                Publish Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
