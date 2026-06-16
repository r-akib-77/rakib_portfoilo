"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Nova SaaS",
    desc: "Multi-tenant SaaS platform with authentication, subscriptions and analytics.",
    image: "/projects/saas.webp",
    tags: ["Next.js", "Stripe", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "TaskFlow",
    desc: "Modern project management application with real-time collaboration.",
    image: "/projects/taskflow.webp",
    tags: ["React", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Automation",
    desc: "AI-powered automation workflows built with N8N and OpenAI.",
    image: "/projects/automation.webp",
    tags: ["N8N", "OpenAI", "Automation"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Finance Dashboard",
    desc: "Beautiful analytics dashboard with charts and reporting tools.",
    image: "/projects/dashboard.webp",
    tags: ["Next.js", "Chart.js", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Mobile SaaS",
    desc: "Cross-platform mobile application with modern backend architecture.",
    image: "/projects/mobile.webp",
    tags: ["React Native", "Expo", "Supabase"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        py-20
        sm:px-6
        md:mt-20
        pt-32
        md:px-8
        lg:px-12
      "
    >
      {/* BG GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/10
          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mb-5
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <Sparkles size={12} className="text-purple-400" />

          <span
            className="
              text-[10px]
              tracking-[0.25em]
              text-zinc-400
            "
          >
            FEATURED PROJECTS
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-center
            font-[family-name:var(--font-space)]
            text-4xl
            font-black
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          Selected
          <span
            className="
              bg-gradient-to-r
              from-purple-300
              via-fuchsia-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            {" "}
            Projects
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-center
            text-sm
            leading-relaxed
            text-zinc-400
          "
        >
          A collection of SaaS products, full-stack applications, automation
          systems, and modern digital experiences.
        </motion.p>

        {/* PROJECT GRID */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-white/20
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  h-28
                  overflow-hidden
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-bold text-white">
                  {project.title}
                </h3>

                <p
                  className="
                    mt-2
                    line-clamp-2
                    text-xs
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {project.desc}
                </p>

                {/* TAGS */}
                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-1.5
                  "
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-2
                        py-1
                        text-[10px]
                        text-zinc-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div
                  className="
                    mt-auto
                    pt-4
                    flex
                    gap-2
                  "
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-1.5
                      rounded-lg
                      border
                      border-white/10
                      py-2
                      text-xs
                      text-white
                      transition-all
                      duration-300
                      hover:border-purple-500/30
                      hover:bg-purple-500/10
                    "
                  >
                    <FaGithub size={13} />
                    Code
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-1.5
                      rounded-lg
                      bg-gradient-to-r
                      from-purple-500
                      via-fuchsia-500
                      to-cyan-500
                      py-2
                      text-xs
                      font-medium
                      text-white
                    "
                  >
                    <ExternalLink size={13} />
                    Live
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
