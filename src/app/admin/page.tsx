"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FolderPlus, Award, User, LogOut, ImageIcon, Tag, Globe, Trash2,
  Edit3, Save, X, CheckCircle, AlertCircle, Loader2, Eye,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tags: string;
  github_url?: string | null;
  live_url?: string | null;
  featured: number;
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  description: string;
  skills: string;
  link?: string | null;
}

interface HeroData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  photo_url: string;
  github_url?: string | null;
  linkedin_url?: string | null;
  email?: string | null;
  resume_url?: string | null;
  available_for_work: number;
}

// ─── Image Uploader ───────────────────────────────────────────────────────────
function ImageUploader({
  folder,
  value,
  onChange,
}: {
  folder: "projects" | "hero" | "certs" | "general";
  value: string;
  onChange: (url: string) => void;
}) {
  const [preview, setPreview] = useState<string>(value);
  const [uploading, setUploading] = useState(false);
  const [savings, setSavings] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setPreview(value); }, [value]);

  /** Compress image to WebP via browser Canvas (runs before upload, no server Sharp needed). */
  const compressToWebP = (file: File, maxW = 1920, quality = 0.82): Promise<File> =>
    new Promise((resolve) => {
      const img = document.createElement("img");
      const blobUrl = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(blobUrl);
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => resolve(blob
            ? new File([blob], file.name.replace(/\.[^.]+$/, ".webp"), { type: "image/webp" })
            : file
          ),
          "image/webp",
          quality
        );
      };
      img.src = blobUrl;
    });

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show instant local preview
    setPreview(URL.createObjectURL(file));
    setUploading(true);
    setSavings(null);

    try {
      // Client-side WebP compression (replaces Sharp — works on CF Workers edge)
      const compressed = await compressToWebP(file);
      const pct = Math.round((1 - compressed.size / file.size) * 100);

      const fd = new FormData();
      fd.append("file", compressed);
      fd.append("folder", folder);

      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error((await res.json()).error ?? "Upload failed");

      const data = await res.json();
      onChange(data.url);
      setSavings(pct);
      toast.success(`Uploaded! ${pct}% smaller · WebP`);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
      setPreview(value);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label
        className="group relative flex h-56 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/10 bg-white/[0.02] transition-all hover:border-purple-500/50 hover:bg-purple-500/5"
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <>
            <Image
              src={preview}
              alt="Preview"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover rounded-2xl"
              unoptimized={preview.startsWith("blob:")}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              <ImageIcon size={24} className="text-white" />
              <p className="text-xs text-white">Change image</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 text-zinc-500">
            <ImageIcon size={36} />
            <p className="text-sm">Click to upload image</p>
            <p className="text-xs text-zinc-600">PNG, JPG, WebP — max 10 MB</p>
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/70">
            <Loader2 size={28} className="animate-spin text-purple-400" />
          </div>
        )}
      </label>
      <input ref={inputRef} type="file" hidden accept="image/*" onChange={handleFile} />
      {savings !== null && (
        <p className="text-xs text-emerald-400 flex items-center gap-1">
          <CheckCircle size={12} /> Optimized to WebP — {savings}% size reduction
        </p>
      )}
    </div>
  );
}

// ─── Input & Textarea helpers ─────────────────────────────────────────────────
const inputCls =
  "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-zinc-600 transition-all focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20";

const labelCls = "mb-1.5 flex items-center gap-2 text-sm text-zinc-400";

function OptionalBadge() {
  return (
    <span className="ml-auto rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-zinc-600">
      optional
    </span>
  );
}

// ─── PROJECTS TAB ─────────────────────────────────────────────────────────────
function ProjectsTab() {
  const blank = {
    title: "", description: "", image_url: "", tags: "",
    github_url: "", live_url: "", featured: false,
  };
  const [form, setForm] = useState({ ...blank });
  const [projects, setProjects] = useState<Project[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => setProjects(d))
      .finally(() => setFetching(false));
  }, []);

  const save = async () => {
    if (!form.title || !form.description || !form.image_url) {
      toast.error("Title, description, and image are required");
      return;
    }
    setLoading(true);
    try {
      const url = editId ? `/api/projects/${editId}` : "/api/projects";
      const method = editId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tags: form.tags,
          github_url: form.github_url || null,
          live_url: form.live_url || null,
          featured: form.featured,
        }),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      const saved = await res.json();
      if (editId) {
        setProjects((prev) => prev.map((p) => (p.id === editId ? saved : p)));
        toast.success("Project updated!");
      } else {
        setProjects((prev) => [saved, ...prev]);
        toast.success("Project published!");
      }
      setForm({ ...blank });
      setEditId(null);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setLoading(false);
    }
  };

  const del = async (id: number) => {
    if (!confirm("Delete this project?")) return;
    const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
    if (res.ok) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast.success("Deleted");
    }
  };

  const startEdit = (p: Project) => {
    setEditId(p.id);
    setForm({
      title: p.title,
      description: p.description,
      image_url: p.image_url,
      tags: typeof p.tags === "string" ? JSON.parse(p.tags).join(", ") : "",
      github_url: p.github_url ?? "",
      live_url: p.live_url ?? "",
      featured: p.featured === 1,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-10">
      {/* Form */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-lg font-bold text-white">
          {editId ? "✏️ Edit Project" : "➕ Add New Project"}
        </h2>
        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <ImageUploader
            folder="projects"
            value={form.image_url}
            onChange={(url) => setForm((f) => ({ ...f, image_url: url }))}
          />
          <div className="space-y-4">
            <div>
              <label className={labelCls}>Project Title</label>
              <input
                className={inputCls}
                placeholder="Nova SaaS Platform"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />
            </div>
            <div>
              <label className={labelCls}>Description</label>
              <textarea
                rows={4}
                className={inputCls}
                placeholder="Describe your project..."
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>
            <div>
              <label className={labelCls}><Tag size={14} /> Tags</label>
              <input
                className={inputCls}
                placeholder="Next.js, Prisma, Stripe"
                value={form.tags}
                onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className={labelCls}>
                  <FaGithub size={14} /> GitHub URL <OptionalBadge />
                </label>
                <input
                  className={inputCls}
                  placeholder="https://github.com/..."
                  value={form.github_url}
                  onChange={(e) => setForm((f) => ({ ...f, github_url: e.target.value }))}
                />
              </div>
              <div>
                <label className={labelCls}>
                  <Globe size={14} /> Live URL <OptionalBadge />
                </label>
                <input
                  className={inputCls}
                  placeholder="https://myproject.com"
                  value={form.live_url}
                  onChange={(e) => setForm((f) => ({ ...f, live_url: e.target.value }))}
                />
              </div>
            </div>
            <label className="flex cursor-pointer items-center gap-3">
              <div
                onClick={() => setForm((f) => ({ ...f, featured: !f.featured }))}
                className={`relative h-6 w-11 rounded-full transition-colors ${form.featured ? "bg-purple-600" : "bg-white/10"}`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${form.featured ? "translate-x-6" : "translate-x-1"}`}
                />
              </div>
              <span className="text-sm text-zinc-400">Featured project</span>
            </label>
            <div className="flex gap-3 pt-2">
              <button
                onClick={save}
                disabled={loading}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                {editId ? "Update Project" : "Publish Project"}
              </button>
              {editId && (
                <button
                  onClick={() => { setEditId(null); setForm({ ...blank }); }}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-400 hover:bg-white/10"
                >
                  <X size={16} /> Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-white">Existing Projects</h2>
        {fetching ? (
          <div className="flex justify-center py-10">
            <Loader2 size={28} className="animate-spin text-purple-400" />
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-zinc-500 py-10">No projects yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.id} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden group">
                <div className="relative h-40">
                  <Image
                    src={p.image_url}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  {p.featured === 1 && (
                    <span className="absolute right-2 top-2 rounded-full bg-purple-600/90 px-2 py-0.5 text-[10px] font-bold text-white">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-white line-clamp-1">{p.title}</p>
                  <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{p.description}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => startEdit(p)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-2 text-xs text-zinc-400 hover:border-purple-500/50 hover:text-purple-300 transition-colors"
                    >
                      <Edit3 size={12} /> Edit
                    </button>
                    <button
                      onClick={() => del(p.id)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/5 py-2 text-xs text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── CERTIFICATIONS TAB ───────────────────────────────────────────────────────
function CertificationsTab() {
  const blank = { title: "", issuer: "", date: "", credential: "", description: "", skills: "", link: "" };
  const [form, setForm] = useState({ ...blank });
  const [certs, setCerts] = useState<Certification[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetch("/api/certifications")
      .then((r) => r.json())
      .then(setCerts)
      .finally(() => setFetching(false));
  }, []);

  const save = async () => {
    if (!form.title || !form.issuer || !form.date) {
      toast.error("Title, issuer and date are required");
      return;
    }
    setLoading(true);
    try {
      const tagsArr = form.skills.split(",").map((s) => s.trim()).filter(Boolean);
      const url = editId ? `/api/certifications/${editId}` : "/api/certifications";
      const method = editId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, skills: JSON.stringify(tagsArr), link: form.link || null }),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      const saved = await res.json();
      if (editId) {
        setCerts((prev) => prev.map((c) => (c.id === editId ? saved : c)));
        toast.success("Certification updated!");
      } else {
        setCerts((prev) => [saved, ...prev]);
        toast.success("Certification added!");
      }
      setForm({ ...blank });
      setEditId(null);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setLoading(false);
    }
  };

  const del = async (id: number) => {
    if (!confirm("Delete this certification?")) return;
    const res = await fetch(`/api/certifications/${id}`, { method: "DELETE" });
    if (res.ok) { setCerts((prev) => prev.filter((c) => c.id !== id)); toast.success("Deleted"); }
  };

  const startEdit = (c: Certification) => {
    setEditId(c.id);
    setForm({
      title: c.title,
      issuer: c.issuer,
      date: c.date,
      credential: c.credential,
      description: c.description,
      skills: typeof c.skills === "string" ? JSON.parse(c.skills).join(", ") : "",
      link: c.link ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-10">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-lg font-bold text-white">
          {editId ? "✏️ Edit Certification" : "➕ Add Certification"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Title</label>
            <input className={inputCls} placeholder="Complete Web Development" value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}>Issuer</label>
            <input className={inputCls} placeholder="Coursera" value={form.issuer}
              onChange={(e) => setForm((f) => ({ ...f, issuer: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}>Date</label>
            <input className={inputCls} placeholder="2024" value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}>Credential ID <OptionalBadge /></label>
            <input className={inputCls} placeholder="CERT-12345" value={form.credential}
              onChange={(e) => setForm((f) => ({ ...f, credential: e.target.value }))} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Description <OptionalBadge /></label>
            <textarea rows={3} className={inputCls} placeholder="What you learned..."
              value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}><Tag size={14} /> Skills (comma-separated)</label>
            <input className={inputCls} placeholder="React, Node.js, MongoDB" value={form.skills}
              onChange={(e) => setForm((f) => ({ ...f, skills: e.target.value }))} />
          </div>
          <div>
            <label className={labelCls}><Globe size={14} /> Certificate Link <OptionalBadge /></label>
            <input className={inputCls} placeholder="https://coursera.org/verify/..." value={form.link}
              onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))} />
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <button onClick={save} disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60">
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            {editId ? "Update" : "Add Certification"}
          </button>
          {editId && (
            <button onClick={() => { setEditId(null); setForm({ ...blank }); }}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-400 hover:bg-white/10">
              <X size={16} /> Cancel
            </button>
          )}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-white">Existing Certifications</h2>
        {fetching ? (
          <div className="flex justify-center py-10"><Loader2 size={28} className="animate-spin text-purple-400" /></div>
        ) : certs.length === 0 ? (
          <p className="text-center text-zinc-500 py-10">No certifications yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {certs.map((c) => {
              const skills = (() => { try { return JSON.parse(c.skills); } catch { return []; } })();
              return (
                <div key={c.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">{c.title}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">{c.issuer} · {c.date}</p>
                    </div>
                    {c.link && (
                      <a href={c.link} target="_blank" rel="noopener noreferrer"
                        className="shrink-0 text-purple-400 hover:text-purple-300">
                        <Eye size={16} />
                      </a>
                    )}
                  </div>
                  {c.description && <p className="mt-2 text-xs text-zinc-500 line-clamp-2">{c.description}</p>}
                  {skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {skills.map((s: string) => (
                        <span key={s} className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-300">{s}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex gap-2">
                    <button onClick={() => startEdit(c)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-2 text-xs text-zinc-400 hover:border-purple-500/50 hover:text-purple-300 transition-colors">
                      <Edit3 size={12} /> Edit
                    </button>
                    <button onClick={() => del(c.id)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/5 py-2 text-xs text-red-400 hover:bg-red-500/10 transition-colors">
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── HERO TAB ─────────────────────────────────────────────────────────────────
function HeroTab() {
  const [form, setForm] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetch("/api/hero").then((r) => r.json()).then(setForm).finally(() => setFetching(false));
  }, []);

  const save = async () => {
    if (!form) return;
    setLoading(true);
    try {
      const res = await fetch("/api/hero", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      toast.success("Hero section updated!");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div className="flex justify-center py-20"><Loader2 size={28} className="animate-spin text-purple-400" /></div>;
  if (!form) return <p className="text-center text-red-400 py-10">Failed to load hero data.</p>;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-lg font-bold text-white">✏️ Edit Hero Section</h2>
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div>
          <label className={labelCls}>Profile Photo</label>
          <ImageUploader
            folder="hero"
            value={form.photo_url}
            onChange={(url) => setForm((f) => f ? { ...f, photo_url: url } : f)}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelCls}>Name</label>
            <input className={inputCls} value={form.name}
              onChange={(e) => setForm((f) => f ? { ...f, name: e.target.value } : f)} />
          </div>
          <div>
            <label className={labelCls}>Role / Title</label>
            <input className={inputCls} placeholder="Full Stack Engineer" value={form.role}
              onChange={(e) => setForm((f) => f ? { ...f, role: e.target.value } : f)} />
          </div>
          <div>
            <label className={labelCls}>Tagline</label>
            <input className={inputCls} placeholder="Building futuristic experiences." value={form.tagline}
              onChange={(e) => setForm((f) => f ? { ...f, tagline: e.target.value } : f)} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Bio</label>
            <textarea rows={4} className={inputCls} value={form.bio}
              onChange={(e) => setForm((f) => f ? { ...f, bio: e.target.value } : f)} />
          </div>

          {/* Optional social links */}
          <div>
            <label className={labelCls}><FaGithub size={14} /> GitHub URL <OptionalBadge /></label>
            <input className={inputCls} placeholder="https://github.com/..." value={form.github_url ?? ""}
              onChange={(e) => setForm((f) => f ? { ...f, github_url: e.target.value || null } : f)} />
          </div>
          <div>
            <label className={labelCls}><FaLinkedin size={14} /> LinkedIn URL <OptionalBadge /></label>
            <input className={inputCls} placeholder="https://linkedin.com/in/..." value={form.linkedin_url ?? ""}
              onChange={(e) => setForm((f) => f ? { ...f, linkedin_url: e.target.value || null } : f)} />
          </div>
          <div>
            <label className={labelCls}>Email <OptionalBadge /></label>
            <input className={inputCls} type="email" placeholder="hello@example.com" value={form.email ?? ""}
              onChange={(e) => setForm((f) => f ? { ...f, email: e.target.value || null } : f)} />
          </div>
          <div>
            <label className={labelCls}>Resume URL <OptionalBadge /></label>
            <input className={inputCls} placeholder="/resume.pdf or https://..." value={form.resume_url ?? ""}
              onChange={(e) => setForm((f) => f ? { ...f, resume_url: e.target.value || null } : f)} />
          </div>

          <div className="sm:col-span-2">
            <label className="flex cursor-pointer items-center gap-3">
              <div
                onClick={() => setForm((f) => f ? { ...f, available_for_work: f.available_for_work === 1 ? 0 : 1 } : f)}
                className={`relative h-6 w-11 rounded-full transition-colors ${form.available_for_work === 1 ? "bg-emerald-600" : "bg-white/10"}`}
              >
                <span className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${form.available_for_work === 1 ? "translate-x-6" : "translate-x-1"}`} />
              </div>
              <span className="text-sm text-zinc-400">Available for work</span>
              {form.available_for_work === 1
                ? <span className="flex items-center gap-1 text-xs text-emerald-400"><CheckCircle size={12} /> Active</span>
                : <span className="flex items-center gap-1 text-xs text-zinc-500"><AlertCircle size={12} /> Not available</span>
              }
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button onClick={save} disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 px-8 py-3 font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          Save Hero Data
        </button>
      </div>
    </div>
  );
}

// ─── MAIN ADMIN PAGE ──────────────────────────────────────────────────────────
type Tab = "projects" | "certifications" | "hero";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "projects", label: "Projects", icon: <FolderPlus size={16} /> },
  { id: "certifications", label: "Certifications", icon: <Award size={16} /> },
  { id: "hero", label: "Hero Section", icon: <User size={16} /> },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("projects");
  const [authChecked, setAuthChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me").then((r) => {
      if (r.ok) { setAuthenticated(true); }
      else { router.replace("/admin/login"); }
    }).finally(() => setAuthChecked(true));
  }, [router]);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    toast.success("Logged out");
    router.push("/admin/login");
  };

  if (!authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#05010A]">
        <Loader2 size={32} className="animate-spin text-purple-400" />
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <main className="min-h-screen bg-[#05010A] text-white md:pt-28 pt-20">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-32 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-700/15 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        {/* Header */}
        <div className="mb-10 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs tracking-[0.25em] text-zinc-400">PORTFOLIO CMS</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Admin{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="mt-3 text-zinc-400 max-w-md">
              Manage your portfolio content — projects, certifications, and your hero section.
            </p>
          </div>
          <button
            onClick={logout}
            className="mt-2 flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-400 transition-colors hover:border-red-500/40 hover:text-red-400"
          >
            <LogOut size={15} /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                tab === t.id
                  ? "bg-gradient-to-r from-purple-600/80 via-fuchsia-600/80 to-cyan-600/80 text-white shadow-lg shadow-purple-500/20"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.07]"
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === "projects" && <ProjectsTab />}
        {tab === "certifications" && <CertificationsTab />}
        {tab === "hero" && <HeroTab />}
      </div>
    </main>
  );
}
