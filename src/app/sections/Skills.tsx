"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiDrizzle,
  SiVite,
  SiVercel,
  SiNetlify,
  SiCloudflare,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { CgCPlusPlus } from "react-icons/cg";

import { TbBrandCpp } from "react-icons/tb";

import {
  Monitor,
  Server,
  Database,
  Boxes,
  Wrench,
  Rocket,
  GitBranch,
  Code2,
} from "lucide-react";

const categories = {
  Frontend: {
    icon: Monitor,

    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-400",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
    ],
  },

  Backend: {
    icon: Server,

    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-zinc-300",
      },
      {
        name: "JWT",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-orange-400",
      },
    ],
  },

  Database: {
    icon: Database,

    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-400",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-sky-400",
      },
    ],
  },

  ORM: {
    icon: Boxes,

    skills: [
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "text-cyan-200",
      },
      {
        name: "Drizzle",
        icon: SiDrizzle,
        color: "text-lime-300",
      },
    ],
  },

  Tools: {
    icon: Wrench,

    skills: [
      {
        name: "NPM",
        icon: FaJs,
        color: "text-red-500",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-yellow-300",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "text-blue-400",
      },
    ],
  },

  Hosting: {
    icon: Rocket,

    skills: [
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-white",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "text-cyan-400",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-orange-400",
      },
      {
        name: "Cloudflare",
        icon: SiCloudflare,
        color: "text-orange-500",
      },
    ],
  },

  Git: {
    icon: GitBranch,

    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
      },
    ],
  },

  Languages: {
    icon: Code2,

    skills: [
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-400",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-300",
      },
      {
        name: "C",
        icon: TbBrandCpp,
        color: "text-blue-300",
      },
      {
        name: "C++",
        icon: CgCPlusPlus,
        color: "text-blue-400",
      },
    ],
  },
};

const tabs = Object.keys(categories);

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev);

        const nextIndex = (currentIndex + 1) % tabs.length;

        return tabs[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        px-5
    
        md:px-8
        lg:px-12
      "
    >
      {/* GRID BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]
        "
      />

      {/* PURPLE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/10
          blur-[160px]
        "
      />

      {/* NOISE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
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
          <motion.div
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
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
            MY EXPERTISE
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
          Skills &
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
            Technologies
          </span>
        </motion.h2>

        {/* DESC */}
        <p
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
          A comprehensive toolkit for building modern scalable applications.
        </p>

        {/* FILTERS */}
        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          {tabs.map((tab) => {
            const TabIcon = categories[tab as keyof typeof categories].icon;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative
                  flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-2xl
                  border
                  px-4
                  py-2.5
                  text-xs
                  font-medium
                  transition-all
                  duration-300
                  backdrop-blur-xl
                  md:px-5
                  md:py-3
                  md:text-sm

                  ${
                    activeTab === tab
                      ? "border-purple-500/30 bg-purple-500/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
                  }
                `}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="
                      absolute
                      inset-0
                      bg-purple-500/10
                    "
                  />
                )}

                <TabIcon size={14} className="relative z-10" />

                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* FIXED GRID AREA */}
        <div
          className="
            relative
            mt-14
            flex
            min-h-[420px]
            w-full
            items-start
            justify-center
            md:min-h-[450px]
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              layout
              key={activeTab}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                absolute
                mx-auto
                grid
                w-full
                max-w-5xl
                auto-rows-fr
                grid-cols-2
                gap-3
                sm:grid-cols-3
                md:gap-4
                lg:grid-cols-5
              "
            >
              {categories[activeTab as keyof typeof categories].skills.map(
                (skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                      group
                      relative
                      flex
                      min-h-[135px]
                      flex-col
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-3
                      backdrop-blur-2xl
                      transition-all
                      duration-300
                      hover:border-purple-500/20
                      hover:bg-purple-500/[0.05]
                      md:min-h-[160px]
                      md:p-4
                    "
                    >
                      {/* Glow */}
                      <div
                        className="
                        absolute
                        inset-0
                        opacity-0
                        blur-3xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                        bg-purple-500/10
                      "
                      />

                      <div
                        className="
                        relative
                        z-10
                        flex
                        flex-col
                        items-center
                        gap-3
                      "
                      >
                        {/* ICON */}
                        <div
                          className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-black/20
                          md:h-12
                          md:w-12
                        "
                        >
                          <Icon
                            className={`
                            ${skill.color}
                            text-xl
                            md:text-2xl
                          `}
                          />
                        </div>

                        {/* NAME */}
                        <p
                          className="
                          text-center
                          text-[11px]
                          font-medium
                          text-zinc-200
                          md:text-sm
                        "
                        >
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  );
                },
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
