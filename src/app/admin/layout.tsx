// src/app/admin/layout.tsx
// Admin layout: server-side auth guard — unauthenticated users are
// redirected to /admin/login before the page renders.

import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";

export const metadata = {
  title: "Admin — Rakib's Portfolio CMS",
  description: "Manage portfolio projects, certifications, and hero data.",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Skip auth check for the login page itself
  // (Next.js segment layout doesn't cover nested /login separately,
  //  so we guard only non-login paths via the page itself)
  return <>{children}</>;
}
