"use client";

import { motion } from "framer-motion";

import { Trophy, Brain, Flame, Target, ArrowUpRight } from "lucide-react";

const stats = [
  {
    label: "Problems Solved",
    value: "850+",
    icon: Brain,
  },

  {
    label: "Contest Rating",
    value: "1780",
    icon: Trophy,
  },

  {
    label: "Daily Streak",
    value: "120",
    icon: Flame,
  },

  {
    label: "Contests",
    value: "65+",
    icon: Target,
  },
];

const platforms = [
  {
    name: "LeetCode",
    solved: 520,
  },

  {
    name: "Codeforces",
    solved: 180,
  },

  {
    name: "CodeChef",
    solved: 95,
  },

  {
    name: "AtCoder",
    solved: 55,
  },
];

export default function ProblemSolving() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-5
      md:py-7
      py-5
        md:px-8
        lg:px-12
      "
    >
      {/* GRID BG */}
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
              text-[10px]
              tracking-[0.25em]
              text-zinc-400
              md:text-[11px]
            "
          >
            COMPETITIVE PROGRAMMING
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
          Problem
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
            Solving
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
          transition={{
            delay: 0.1,
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
          Passionate about algorithms, data structures, and competitive
          programming with consistent problem-solving practice across multiple
          platforms.
        </motion.p>

        {/* TOP STATS */}
        <div
          className="
            mt-14
            grid
            grid-cols-2
            gap-4
            lg:grid-cols-4
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
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
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                  backdrop-blur-2xl
                  md:p-5
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
                    items-center
                    justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-[11px]
                        text-zinc-500
                        md:text-sm
                      "
                    >
                      {item.label}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-black
                        text-white
                        md:text-4xl
                      "
                    >
                      {item.value}
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-purple-500/10
                      md:h-12
                      md:w-12
                    "
                  >
                    <Icon
                      className="
                        h-5
                        w-5
                        text-purple-300
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            mt-12
            grid
            gap-6
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* ADVANCED GRAPH CARD */}
          <motion.div
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
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-3xl
              md:p-6
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-purple-500/5
              "
            />

            {/* Top Gradient */}
            <div
              className="
                absolute
                left-0
                top-0
                h-[220px]
                w-full
                bg-gradient-to-b
                from-purple-500/10
                to-transparent
              "
            />

            <div className="relative z-10">
              {/* HEADER */}
              <div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-white
                      md:text-xl
                    "
                  >
                    Problem Solving Analytics
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-zinc-400
                    "
                  >
                    Performance across coding platforms
                  </p>
                </div>

                <div
                  className="
                    w-fit
                    rounded-2xl
                    border
                    border-purple-500/20
                    bg-purple-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-purple-200
                  "
                >
                  850+ Solved
                </div>
              </div>

              {/* CHART AREA */}
              <div
                className="
                  mt-10
                  flex
                  h-[220px]
                  items-end
                  justify-between
                  gap-2
                  md:h-[260px]
                  md:gap-4
                "
              >
                {platforms.map((platform, index) => {
                  const height = (platform.solved / 520) * 100;

                  return (
                    <motion.div
                      key={platform.name}
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
                        delay: index * 0.12,
                      }}
                      className="
                        flex
                        flex-1
                        flex-col
                        items-center
                      "
                    >
                      {/* VALUE */}
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                        }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                        }}
                        className="
                          mb-3
                          text-xs
                          font-semibold
                          text-zinc-200
                          md:text-sm
                        "
                      >
                        {platform.solved}
                      </motion.div>

                      {/* BAR WRAPPER */}
                      <div
                        className="
                          relative
                          flex
                          h-[180px]
                          w-full
                          items-end
                          justify-center
                          md:h-[220px]
                        "
                      >
                        {/* BG TRACK */}
                        <div
                          className="
                            absolute
                            inset-y-0
                            w-full
                            rounded-full
                            bg-white/[0.03]
                          "
                        />

                        {/* ACTIVE BAR */}
                        <motion.div
                          initial={{
                            height: 0,
                          }}
                          whileInView={{
                            height: `${height}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1,
                            delay: index * 0.15,
                            ease: "easeOut",
                          }}
                          className="
                            relative
                            w-full
                            rounded-full
                            bg-gradient-to-t
                            from-purple-700
                            via-fuchsia-500
                            to-purple-300
                            shadow-[0_0_35px_rgba(168,85,247,0.45)]
                          "
                        >
                          {/* SHINE */}
                          <div
                            className="
                              absolute
                              inset-0
                              rounded-full
                              bg-gradient-to-t
                              from-transparent
                              via-white/20
                              to-white/30
                            "
                          />

                          {/* GLOW */}
                          <div
                            className="
                              absolute
                              inset-0
                              rounded-full
                              bg-purple-500/20
                              blur-xl
                            "
                          />
                        </motion.div>
                      </div>

                      {/* LABEL */}
                      <p
                        className="
                          mt-3
                          text-center
                          text-[10px]
                          font-medium
                          text-zinc-300
                          md:mt-4
                          md:text-sm
                        "
                      >
                        {platform.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* BOTTOM STATS */}
              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-3
                  md:mt-10
                  md:grid-cols-4
                  md:gap-4
                "
              >
                {[
                  {
                    label: "Easy",
                    value: "320",
                  },

                  {
                    label: "Medium",
                    value: "410",
                  },

                  {
                    label: "Hard",
                    value: "120",
                  },

                  {
                    label: "Contest",
                    value: "65+",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-3
                      text-center
                      md:p-4
                    "
                  >
                    <h4
                      className="
                        text-lg
                        font-bold
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
                        md:text-xs
                      "
                    >
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SIDE CARD */}
          <motion.div
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
              delay: 0.1,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-3xl
              md:p-6
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-purple-500/5
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-white
                      md:text-xl
                    "
                  >
                    Achievements
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-zinc-400
                    "
                  >
                    Competitive journey
                  </p>
                </div>

                <ArrowUpRight
                  className="
                    text-purple-300
                  "
                />
              </div>

              <div
                className="
                  mt-8
                  space-y-4
                "
              >
                {[
                  "Solved 850+ algorithmic problems",
                  "Strong understanding of DSA",
                  "Regular contest participant",
                  "Advanced optimization techniques",
                  "Strong debugging & analytical skills",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -20,
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
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-4
                    "
                  >
                    <div
                      className="
                        mt-1.5
                        h-2
                        w-2
                        rounded-full
                        bg-purple-400
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-relaxed
                        text-zinc-300
                      "
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM MINI CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="
                  mt-8
                  overflow-hidden
                  rounded-3xl
                  border
                  border-purple-500/20
                  bg-gradient-to-br
                  from-purple-500/10
                  to-fuchsia-500/10
                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-zinc-300
                  "
                >
                  Current Focus
                </p>

                <h4
                  className="
                    mt-2
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  Dynamic Programming
                </h4>

                <div
                  className="
                    mt-4
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-white/10
                  "
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "82%",
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-purple-400
                      to-fuchsia-500
                    "
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
