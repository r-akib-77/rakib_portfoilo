"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        toast.success("Welcome back, Admin!");
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "Invalid credentials");
      }
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05010A] px-4">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[160px]" />
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-fuchsia-700/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyan-700/10 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo / Badge */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl">
            <ShieldCheck size={32} className="text-purple-400" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-black tracking-tight text-white">
              Admin{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Portal
              </span>
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Sign in to manage your portfolio
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">
                Username
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                  autoComplete="username"
                  className="w-full rounded-xl border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-white outline-none placeholder:text-zinc-600 transition-all focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-white/10 bg-black/40 py-3 pl-11 pr-12 text-white outline-none placeholder:text-zinc-600 transition-all focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="relative mt-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 py-3.5 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in…
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Hint */}
          <p className="mt-6 text-center text-xs text-zinc-600">
            Credentials are set via environment variables.
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-700">
          © {new Date().getFullYear()} Rakib&apos;s Portfolio CMS
        </p>
      </div>
    </main>
  );
}
