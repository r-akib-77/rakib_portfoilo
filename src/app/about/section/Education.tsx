"use client";

import { motion } from "framer-motion";

import {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Code2,
  BrainCircuit,
  Rocket,
} from "lucide-react";

const beliefs = [
  {
    title: "Skills Over Reputation",

    desc: "I believe engineering ability is proven through work, consistency, and real problem solving — not by a university name.",

    icon: ShieldCheck,

    color: "from-cyan-400 to-blue-500",
  },

  {
    title: "Real World Experience",

    desc: "Building products, solving challenges, collaborating with teams, and learning continuously matter more than memorizing theory.",

    icon: Rocket,

    color: "from-fuchsia-400 to-purple-500",
  },

  {
    title: "Engineering Mindset",

    desc: "I focus on becoming a strong software engineer through discipline, curiosity, leadership, and practical development.",

    icon: BrainCircuit,

    color: "from-emerald-400 to-green-500",
  },
];

export default function Education() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        py-14
        sm:px-6
        md:px-8
        lg:px-12
      "
    >
      {/* GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/10
          blur-[100px]
          sm:h-[500px]
          sm:w-[500px]
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
            mb-4
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
          <Sparkles
            size={11}
            className="
              text-purple-400
            "
          />

          <span
            className="
              text-[9px]
              tracking-[0.22em]
              text-zinc-400
              sm:text-[10px]
            "
          >
            EDUCATION & MINDSET
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
          Beyond
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
            The Degree
          </span>
        </motion.h2>

        {/* MAIN CARD */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            group
            relative
            mx-auto
            mt-10
            max-w-6xl
            overflow-hidden
            rounded-[26px]
            border
            border-white/10
            bg-white/[0.03]
            p-5
            backdrop-blur-2xl
            sm:p-8
            md:p-10
          "
        >
          {/* BG */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-purple-500/10
              via-fuchsia-500/5
              to-cyan-500/10
            "
          />

          {/* HUGE ICON */}
          <GraduationCap
            size={120}
            className="
              absolute
              -right-6
              -top-6
              text-white/[0.03]
              sm:size-[180px]
              sm:-right-10
              sm:-top-10
            "
          />

          <div className="relative z-10">
            {/* TOP */}
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
              "
            >
              {/* ICON */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-purple-500
                  via-fuchsia-500
                  to-purple-700
                  shadow-[0_0_50px_rgba(168,85,247,0.25)]
                  sm:h-20
                  sm:w-20
                "
              >
                <Code2
                  size={28}
                  className="
                    text-white
                  "
                />
              </div>

              {/* TEXT */}
              <div>
                <p
                  className="
                    text-[10px]
                    tracking-[0.25em]
                    text-zinc-500
                    sm:text-xs
                  "
                >
                  CURRENTLY PURSUING
                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-white
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  B.Sc in Computer Science & Engineering
                </h3>
              </div>
            </div>

            {/* MAIN STATEMENT */}
            <div
              className="
                mt-8
                max-w-4xl
              "
            >
              <h2
                className="
                  text-2xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-4xl
                  md:text-5xl
                "
              >
                A university name
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-300
                    via-purple-300
                    to-fuchsia-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}
                  does not define{" "}
                </span>
                the quality of an engineer.
              </h2>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  leading-relaxed
                  text-zinc-300
                  sm:text-base
                "
              >
                I believe strong engineers are built through curiosity,
                consistency, discipline, practical skills, and real-world
                experience. While pursuing my degree, my main focus is software
                engineering, building impactful projects, solving meaningful
                problems, and continuously improving myself beyond academics
                alone.
              </p>
            </div>

            {/* BELIEFS */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-4
                md:grid-cols-3
              "
            >
              {beliefs.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                      y: -4,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-5
                    "
                  >
                    {/* GLOW */}
                    <div
                      className={`
                        absolute
                        inset-0
                        opacity-10
                        bg-gradient-to-br
                        ${item.color}
                      `}
                    />

                    <div className="relative z-10">
                      {/* ICON */}
                      <div
                        className={`
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          ${item.color}
                        `}
                      >
                        <Icon
                          size={18}
                          className="
                            text-white
                          "
                        />
                      </div>

                      {/* TITLE */}
                      <h4
                        className="
                          mt-4
                          text-lg
                          font-semibold
                          text-white
                        "
                      >
                        {item.title}
                      </h4>

                      {/* DESC */}
                      <p
                        className="
                          mt-3
                          text-sm
                          leading-relaxed
                          text-zinc-400
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
