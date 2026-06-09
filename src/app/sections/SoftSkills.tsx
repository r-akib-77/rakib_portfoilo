"use client";

import { motion } from "framer-motion";

import {
  Users,
  MessageSquareText,
  BrainCircuit,
  Network,
  Crown,
} from "lucide-react";

const skills = [
  {
    title: "Leadership",
    description:
      "Leading teams with clarity, ownership, and strong decision-making.",
    icon: Crown,
  },

  {
    title: "Team Work",
    description:
      "Collaborating effectively in fast-paced development environments.",
    icon: Users,
  },

  {
    title: "Communication",
    description:
      "Clear technical and non-technical communication with clients and teams.",
    icon: MessageSquareText,
  },

  {
    title: "Problem Solving",
    description:
      "Strong analytical thinking and efficient debugging capabilities.",
    icon: BrainCircuit,
  },

  {
    title: "Networking",
    description:
      "Building strong professional relationships and technical communities.",
    icon: Network,
  },
];

export default function SoftSkills() {
  return (
    <section
      className="
        relative
        px-5
      py-7
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
          transition={{
            duration: 0.6,
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
            PERSONAL STRENGTHS
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
          transition={{
            delay: 0.1,
            duration: 0.7,
          }}
          className="
            text-center
            font-[family-name:var(--font-space)]
            text-3xl
            font-black
            tracking-tight
            text-white
            sm:text-4xl
            md:text-5xl
          "
        >
          Soft
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
            Skills
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
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
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
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
          Beyond technical expertise, I focus on collaboration, communication,
          and delivering impactful solutions.
        </motion.p>

        {/* GRID */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-6xl
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
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
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:border-purple-500/20
                  hover:bg-purple-500/[0.04]
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
                    items-start
                    gap-4
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                    "
                  >
                    <Icon
                      className="
                        text-xl
                        text-purple-300
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    {/* TITLE */}
                    <h3
                      className="
                        text-base
                        font-semibold
                        text-white
                      "
                    >
                      {skill.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-1.5
                        text-sm
                        leading-relaxed
                        text-zinc-400
                      "
                    >
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
