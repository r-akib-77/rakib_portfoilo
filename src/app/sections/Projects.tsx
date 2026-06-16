"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "BritTrade-Trading",

    description:
      "BritTrade-Trading is a modern, high-performance trading platform built to simplify complex financial markets through a seamless and intuitive user experience.Designed with speed, security, and real-time data visualization in mind, it empowers traders to execute strategies with confidence and precision",

    image: "/projectPic/bit-trade.png",

    preview: "/projectPic/bit-trade.png",

    github: "https://github.com/r-akib-77/BritTrade-Trading",

    live: "https://brittrade.britsync.co.uk/",

    tech: [
      {
        name: "TanStack Query",
        icon: FaReact,
        color: "text-cyan-400",
      },

      {
        name: "Express",
        icon: SiExpress,
        color: "text-zinc-300",
      },

      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },

      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-orange-400",
      },

      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
    ],

    floatingIcons: [
      {
        icon: FaReact,
        color: "text-cyan-400",
      },

      {
        icon: SiNextdotjs,
        color: "text-white",
      },

      {
        icon: FaNodeJs,
        color: "text-green-500",
      },
    ],
  },

  {
    title: "Odessey-FC ",

    description:
      "Welcome to the official frontend portal framework for Odyssey FC. This application delivers a premium, highly responsive dark-aesthetic user interface designed to bridge fans, players, and corporate partners. Built with cutting-edge React architectures, it provides fluid motion design alongside clean backend control panels.",

    image: "/projectPic/odyssey.png",

    preview: "/projectPic/odyssey.png",

    github: "https://github.com/r-akib-77/Odessey-FC",

    live: "https://odessey-fc.pages.dev/",

    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },

      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },

      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },

      {
        name: "Prisma",
        icon: SiPrisma,
        color: "text-cyan-200",
      },

      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
    ],

    floatingIcons: [
      {
        icon: SiNextdotjs,
        color: "text-white",
      },

      {
        icon: SiPostgresql,
        color: "text-blue-400",
      },

      {
        icon: SiTypescript,
        color: "text-blue-500",
      },
    ],
  },

  {
    title: "LeadHunter — Ultimate B2B Lead Generation & Outreach System",

    description:
      "LeadHunter is a powerful, full-stack lead generation and automated outreach platform. It combines a high-performance scraping engine with a sophisticated email campaign manager, all within a sleek, modern dashboard.",

    image: "/projectPic/leadhunter.png",

    preview: "/projectPic/leadhunter.png",

    github: "https://github.com/r-akib-77/LeadHunter",

    live: "https://leadhunter.uk/",

    tech: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },

      {
        name: "Socket.io",
        icon: SiSocketdotio,
        color: "text-white",
      },

      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },

      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
    ],

    floatingIcons: [
      {
        icon: FaReact,
        color: "text-cyan-400",
      },

      {
        icon: SiSocketdotio,
        color: "text-white",
      },

      {
        icon: FaNodeJs,
        color: "text-green-500",
      },
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-5
        py-24
        md:px-8
        lg:px-12
      "
    >
      {/* BG GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/10
          blur-[140px]
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
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
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
            px-5
            py-2
            backdrop-blur-xl
          "
        >
          <div
            className="
              h-2
              w-2
              rounded-full
              bg-purple-400
            "
          />

          <span
            className="
              text-[11px]
              tracking-[0.25em]
              text-zinc-400
            "
          >
            FEATURED WORK
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
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
          Featured
          <span
            className="
              bg-gradient-to-r
              from-purple-300
              via-fuchsia-400
              to-purple-600
              bg-clip-text
              text-transparent
            "
          >
            {" "}
            Projects
          </span>
        </motion.h2>

        {/* DESC */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-center
            text-sm
            leading-relaxed
            text-zinc-400
            sm:text-base
          "
        >
          Selected projects showcasing scalable architecture, premium user
          experiences and modern engineering.
        </motion.p>

        {/* PROJECTS */}
        <div className="mt-24 space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className={`
                grid
                items-center
                gap-12
                lg:grid-cols-2

                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* IMAGE SIDE */}
              <div className="relative">
                {/* MAIN BROWSER */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-[#0F0F12]
                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                  "
                >
                  {/* TOP BAR */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-4
                      py-3
                    "
                  >
                    <div className="h-3 w-3 rounded-full bg-red-400" />

                    <div className="h-3 w-3 rounded-full bg-yellow-400" />

                    <div className="h-3 w-3 rounded-full bg-green-400" />

                    <div
                      className="
                        ml-4
                        h-6
                        w-[180px]
                        rounded-full
                        bg-white/[0.05]
                      "
                    />
                  </div>

                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      h-[220px]
                      md:h-[360px]
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
                        hover:scale-105
                      "
                    />
                  </div>
                </motion.div>

                {/* FLOATING WINDOW */}
                <motion.div
                  whileHover={{
                    rotate: 0,
                    y: -4,
                  }}
                  className={`
                    absolute
                    -bottom-10
                    ${
                      index % 2 === 0
                        ? "-right-6 md:-right-10"
                        : "-left-6 md:-left-10"
                    }
                    hidden
                    w-[220px]
                    rotate-[-4deg]
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/10
                    bg-[#111111]
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                    backdrop-blur-2xl
                    md:block
                  `}
                >
                  {/* MINI BAR */}
                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      border-b
                      border-white/10
                      px-3
                      py-2
                    "
                  >
                    <div className="h-2 w-2 rounded-full bg-red-400" />

                    <div className="h-2 w-2 rounded-full bg-yellow-400" />

                    <div className="h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  <div
                    className="
                      relative
                      h-[140px]
                    "
                  >
                    <Image
                      src={project.preview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* FLOATING STACK ICONS */}
                <div
                  className="
                    absolute
                    -bottom-7
                    left-1/2
                    flex
                    -translate-x-1/2
                    items-center
                    gap-3
                  "
                >
                  {project.floatingIcons.map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: i * 0.1,
                        }}
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-[#111111]
                          shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                          backdrop-blur-2xl
                        "
                      >
                        <Icon className={`${item.color} text-xl`} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`
                  ${index % 2 !== 0 ? "lg:pr-10" : "lg:pl-10"}
                `}
              >
                {/* TITLE */}
                <h3
                  className="
                    max-w-[520px]
                    font-[family-name:var(--font-space)]
                    text-3xl
                    font-black
                    leading-tight
                    text-white
                    md:text-5xl
                  "
                >
                  {project.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-5
                    max-w-[520px]
                    text-sm
                    leading-relaxed
                    text-zinc-400
                    md:text-base
                  "
                >
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {project.tech.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="
                          flex
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
                        <Icon className={`${tech.color} text-sm`} />

                        <span
                          className="
                            text-xs
                            text-zinc-300
                          "
                        >
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* BUTTONS */}
                <div
                  className="
                    mt-9
                    flex
                    items-center
                    gap-4
                  "
                >
                  {/* GITHUB */}
                  <a
                    href={project.github}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-3
                      text-white
                      transition-all
                      duration-300
                      hover:border-purple-500/30
                      hover:bg-purple-500/10
                    "
                  >
                    <FaGithub size={17} />

                    <span className="text-sm font-medium">Code</span>
                  </a>

                  {/* LIVE */}
                  <a
                    href={project.live}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      border-purple-500/30
                      bg-purple-500/10
                      px-5
                      py-3
                      text-white
                      transition-all
                      duration-300
                      hover:bg-purple-500/20
                    "
                  >
                    <ExternalLink
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />

                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
