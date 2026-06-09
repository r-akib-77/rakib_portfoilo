"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Rocket,
  BrainCircuit,
  Layers3,
  Globe,
  Code2,
} from "lucide-react";

const cards = [
  {
    title: "Creative Developer",

    description: "Building immersive modern digital experiences.",

    icon: Sparkles,
  },

  {
    title: "Full Stack Engineer",

    description: "Scalable backend systems and modern apps.",

    icon: Layers3,
  },

  {
    title: "Problem Solver",

    description: "Strong analytical and optimization mindset.",

    icon: BrainCircuit,
  },

  {
    title: "Tech Explorer",

    description: "Learning modern technologies and systems.",

    icon: Rocket,
  },
];

export default function ExploreMe() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-5
        py-12
        md:px-8
        md:py-16
        mt-22
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
      >
        {/* LABEL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
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
            mb-3
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-1.5
            backdrop-blur-xl
          "
        >
          <motion.div
            animate={{
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-purple-400
            "
          />

          <span
            className="
              text-[9px]
              tracking-[0.22em]
              text-zinc-400
            "
          >
            EXPLORE ME
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 10,
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
            text-2xl
            font-black
            tracking-tight
            text-white
            sm:text-3xl
            md:text-4xl
          "
        >
          More Than
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
            Code
          </span>
        </motion.h2>

        {/* DESC */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
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
            mt-3
            max-w-xl
            text-center
            text-xs
            leading-relaxed
            text-zinc-400
            sm:text-sm
          "
        >
          Passionate about building impactful products, scalable systems and
          premium user experiences.
        </motion.p>

        {/* CONTENT */}
        <div
          className="
            mt-10
            grid
            gap-4
            lg:grid-cols-[1fr_0.9fr]
          "
        >
          {/* LEFT */}
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
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-3xl
              md:p-5
            "
          >
            <div className="relative z-10">
              {/* ICON */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-black/20
                "
              >
                <Globe
                  className="
                    text-purple-300
                  "
                  size={22}
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-5
                  max-w-lg
                  text-xl
                  font-black
                  leading-tight
                  text-white
                  md:text-3xl
                "
              >
                Engineering scalable products with creativity and precision.
              </h3>

              {/* DESC */}
              <p
                className="
                  mt-4
                  max-w-xl
                  text-xs
                  leading-relaxed
                  text-zinc-400
                  md:text-sm
                "
              >
                Focused on modern UI systems, scalable backend architectures and
                clean engineering workflows.
              </p>

              {/* STATS */}
              <div
                className="
                  mt-6
                  grid
                  grid-cols-3
                  gap-2.5
                "
              >
                {[
                  {
                    value: "3+",
                    label: "Years",
                  },

                  {
                    value: "25+",
                    label: "Projects",
                  },

                  {
                    value: "500+",
                    label: "Solved",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-3
                      text-center
                    "
                  >
                    <h4
                      className="
                        text-lg
                        font-black
                        text-white
                        md:text-xl
                      "
                    >
                      {item.value}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        text-zinc-500
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div
            className="
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-1
            "
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-3.5
                    backdrop-blur-3xl
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
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
                          text-purple-300
                        "
                        size={18}
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3
                        className="
                          text-sm
                          font-semibold
                          text-white
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-relaxed
                          text-zinc-400
                        "
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TEXT SLIDER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-10
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            py-3
            backdrop-blur-2xl
          "
        >
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              min-w-max
              items-center
              gap-8
              whitespace-nowrap
            "
          >
            {[
              "FULL STACK ENGINEER",
              "PROBLEM SOLVER",
              "SCALABLE SYSTEMS",
              "MODERN WEB APPS",
              "NEXT.JS DEVELOPER",
              "UI/UX FOCUSED",
              "CREATIVE THINKER",
              "FULL STACK ENGINEER",
              "PROBLEM SOLVER",
              "SCALABLE SYSTEMS",
              "MODERN WEB APPS",
              "NEXT.JS DEVELOPER",
              "UI/UX FOCUSED",
              "CREATIVE THINKER",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-center
                  gap-2.5
                "
              >
                <Code2
                  className="
                    text-purple-400
                  "
                  size={14}
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    tracking-[0.18em]
                    text-zinc-300
                    md:text-xs
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
