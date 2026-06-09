"use client";

import { motion } from "framer-motion";

import {
  MonitorSmartphone,
  ServerCog,
  Database,
  CloudCog,
  Rocket,
  TrendingUp,
} from "lucide-react";

const stacks = [
  {
    title: "Frontend",

    icon: MonitorSmartphone,

    value: "94%",

    color: "from-cyan-400 to-blue-600",

    skills: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },

  {
    title: "Backend",

    icon: ServerCog,

    value: "87%",

    color: "from-green-400 to-emerald-600",

    skills: ["Node.js", "Express", "JWT", "REST API", "Socket.io"],
  },

  {
    title: "Database",

    icon: Database,

    value: "82%",

    color: "from-orange-400 to-amber-600",

    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Drizzle"],
  },

  {
    title: "DevOps",

    icon: CloudCog,

    value: "74%",

    color: "from-purple-400 to-fuchsia-600",

    skills: ["Docker", "Linux", "CI/CD", "Nginx", "Cloudflare"],
  },

  {
    title: "Deployment",

    icon: Rocket,

    value: "91%",

    color: "from-pink-400 to-rose-600",

    skills: ["Vercel", "Netlify", "Firebase", "AWS", "Render"],
  },
];

export default function TechnicalStack() {
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
          <TrendingUp
            size={14}
            className="
              text-purple-400
            "
          />

          <span
            className="
              text-[11px]
              tracking-[0.25em]
              text-zinc-400
            "
          >
            STACK ANALYTICS
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
            text-3xl
            font-black
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          Technical
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
            Ecosystem
          </span>
        </motion.h2>

        {/* DESC */}
        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-center
            text-sm
            leading-relaxed
            text-zinc-400
            sm:text-base
          "
        >
          Advanced visualization of engineering domains, production systems,
          deployment pipelines, and modern development workflows.
        </p>

        {/* CHART */}
        <div
          className="
            mt-14
            grid
            gap-4
            sm:grid-cols-2
            xl:grid-cols-5
          "
        >
          {stacks.map((stack, index) => {
            const Icon = stack.icon;

            return (
              <motion.div
                key={stack.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                  backdrop-blur-2xl

                  sm:p-5
                "
              >
                {/* TOP */}
                <div
                  className="
                    relative
                    z-10
                  "
                >
                  {/* HEADER */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    {/* ICON */}
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${stack.color}

                        sm:h-14
                        sm:w-14
                      `}
                    >
                      <Icon
                        size={20}
                        className="
                          text-white
                        "
                      />
                    </div>

                    {/* VALUE */}
                    <div className="text-right">
                      <h3
                        className="
                          text-xl
                          font-black
                          text-white

                          sm:text-2xl
                        "
                      >
                        {stack.value}
                      </h3>

                      <p
                        className="
                          text-[10px]
                          tracking-[0.2em]
                          text-zinc-500
                        "
                      >
                        LEVEL
                      </p>
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-4
                      text-base
                      font-semibold
                      text-zinc-100

                      sm:text-lg
                    "
                  >
                    {stack.title}
                  </h3>

                  {/* PROGRESS */}
                  <div
                    className="
                      mt-4
                      h-1.5
                      overflow-hidden
                      rounded-full
                      bg-white/5
                    "
                  >
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: stack.value,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                      }}
                      className={`
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        ${stack.color}
                      `}
                    />
                  </div>

                  {/* SKILLS */}
                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {stack.skills.slice(0, 4).map((skill) => (
                      <div
                        key={skill}
                        className="
                          rounded-lg
                          border
                          border-white/10
                          bg-black/20
                          px-2.5
                          py-1
                          text-[10px]
                          text-zinc-300
                          backdrop-blur-xl

                          sm:px-3
                          sm:text-[11px]
                        "
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-20
                    bg-gradient-to-b
                    ${stack.color}
                  `}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
