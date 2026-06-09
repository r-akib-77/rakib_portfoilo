"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Crown, Users, Trophy, Sparkles, Cpu, Code2 } from "lucide-react";

export default function NullPointerTeam() {
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
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* TOP LABEL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            px-3
            py-1.5
            backdrop-blur-xl
            sm:px-4
            sm:py-2
          "
        >
          <Sparkles
            size={12}
            className="
              text-purple-400
            "
          />

          <span
            className="
              text-[9px]
              tracking-[0.25em]
              text-zinc-400
              sm:text-[10px]
            "
          >
            PROGRAMMING TEAM
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
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
            sm:text-4xl
            md:text-5xl
          "
        >
          Team
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
            Null Pointer
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
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
            mt-3
            max-w-xl
            text-center
            text-xs
            leading-relaxed
            text-zinc-400
            sm:mt-4
            sm:text-sm
          "
        >
          A competitive programming and software engineering team focused on
          innovation, collaboration, and solving real-world problems.
        </motion.p>

        {/* MAIN CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="
            group
            relative
            mt-10
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            sm:mt-14
            sm:rounded-[30px]
          "
        >
          {/* MAIN GLOW */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-purple-500/[0.05]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              lg:grid-cols-[1fr_0.95fr]
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
                relative
                overflow-hidden
                border-b
                border-white/10
                lg:border-b-0
                lg:border-r
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  h-[210px]
                  sm:h-[320px]
                  lg:h-full
                  lg:min-h-[480px]
                "
              >
                <Image
                  src="/nullPointer/banner.png"
                  alt="Null Pointer Team"
                  fill
                  priority
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#05010A]
                    via-[#05010A]/20
                    to-transparent
                  "
                />
              </div>

              {/* FLOATING TEXT */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  sm:bottom-6
                  sm:left-6
                  sm:right-6
                "
              >
                {/* BADGE */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    px-3
                    py-1.5
                    backdrop-blur-xl
                  "
                >
                  <Code2
                    size={12}
                    className="
                      text-purple-300
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      tracking-[0.22em]
                      text-zinc-200
                    "
                  >
                    NULL POINTER
                  </span>
                </div>

                {/* HEADING */}
                <h3
                  className="
                    mt-3
                    font-[family-name:var(--font-space)]
                    text-xl
                    font-black
                    leading-[1]
                    tracking-tight
                    sm:mt-4
                    sm:text-4xl
                  "
                >
                  <span
                    className="
                      bg-gradient-to-r
                      from-white
                      via-zinc-200
                      to-zinc-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Building Future
                  </span>

                  <br />

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
                    Developers.
                  </span>
                </h3>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                p-5
                sm:p-8
              "
            >
              {/* LEADER */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                "
              >
                {/* ICON */}
                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-purple-500/30
                    bg-gradient-to-br
                    from-purple-500/30
                    via-fuchsia-500/20
                    to-purple-700/30
                    backdrop-blur-xl
                    sm:h-14
                    sm:w-14
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-purple-500/20
                      blur-2xl
                    "
                  />

                  <Crown
                    size={20}
                    className="
                      relative
                      z-10
                      text-white
                    "
                  />
                </div>

                {/* TEXT */}
                <div>
                  <p
                    className="
                      text-[9px]
                      tracking-[0.25em]
                      text-zinc-500
                    "
                  >
                    TEAM LEADER
                  </p>

                  <h3
                    className="
                      mt-1
                      font-[family-name:var(--font-space)]
                      text-xl
                      font-black
                      tracking-tight
                      sm:text-3xl
                    "
                  >
                    <span
                      className="
                        bg-gradient-to-r
                        from-white
                        via-purple-200
                        to-fuchsia-400
                        bg-clip-text
                        text-transparent
                      "
                    >
                      MD Rakibul Hasan
                    </span>
                  </h3>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  text-xs
                  leading-relaxed
                  text-zinc-400
                  sm:mt-7
                  sm:text-sm
                "
              >
                Leading a dedicated programming team focused on competitive
                coding, teamwork, software engineering, and building impactful
                digital solutions.
              </p>

              {/* STATS */}
              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-3
                  sm:mt-8
                "
              >
                {[
                  {
                    icon: Users,
                    title: "Members",
                    value: "5",
                    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
                    iconBg: "from-cyan-400 to-blue-500",
                  },

                  {
                    icon: Trophy,
                    title: "Contests",
                    value: "20+",
                    gradient:
                      "from-yellow-500/20 via-orange-500/10 to-transparent",
                    iconBg: "from-yellow-400 to-orange-500",
                  },

                  {
                    icon: Cpu,
                    title: "Projects",
                    value: "10+",
                    gradient:
                      "from-purple-500/20 via-fuchsia-500/10 to-transparent",
                    iconBg: "from-purple-400 to-fuchsia-500",
                  },

                  {
                    icon: Crown,
                    title: "Leadership",
                    value: "Active",
                    gradient:
                      "from-emerald-500/20 via-green-500/10 to-transparent",
                    iconBg: "from-emerald-400 to-green-500",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        group/stat
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-3
                        backdrop-blur-2xl
                        transition-all
                        duration-500
                        hover:border-white/20
                        sm:p-4
                      "
                    >
                      {/* BG */}
                      <div
                        className={`
                          absolute
                          inset-0
                          bg-gradient-to-br
                          ${item.gradient}
                          opacity-80
                        `}
                      />

                      {/* CONTENT */}
                      <div className="relative z-10">
                        {/* ICON */}
                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-br
                            ${item.iconBg}
                            shadow-lg
                            sm:h-10
                            sm:w-10
                          `}
                        >
                          <Icon
                            size={15}
                            className="
                              text-white
                            "
                          />
                        </div>

                        {/* VALUE */}
                        <h4
                          className="
                            mt-4
                            text-lg
                            font-black
                            tracking-tight
                            text-white
                            sm:text-2xl
                          "
                        >
                          {item.value}
                        </h4>

                        {/* TITLE */}
                        <p
                          className="
                            mt-1
                            text-[10px]
                            tracking-[0.12em]
                            text-zinc-300
                          "
                        >
                          {item.title}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
