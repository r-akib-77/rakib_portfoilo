"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  Brain,
  Rocket,
  Trophy,
  Users,
  Cpu,
  Target,
  Sparkles,
} from "lucide-react";

/* ---------------- STABLE STARS ---------------- */

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,

  size: (i % 3) + 1.5,

  left: (i * 13) % 100,

  top: (i * 17) % 100,

  opacity: ((i % 10) + 2) / 12,

  duration: 2 + (i % 5),

  delay: (i % 6) * 0.5,
}));

/* ---------------- DATA ---------------- */

const journey = [
  {
    title: "Problem Solving",

    desc: "Competitive programming and analytical thinking.",

    icon: Brain,

    color: "from-cyan-400 to-blue-500",
  },

  {
    title: "Engineering",

    desc: "Building scalable modern full-stack applications.",

    icon: Rocket,

    color: "from-purple-400 to-fuchsia-500",
  },

  {
    title: "Leadership",

    desc: "Leading Null Pointer with collaboration and innovation.",

    icon: Users,

    color: "from-emerald-400 to-green-500",
  },

  {
    title: "Architecture",

    desc: "Learning system design and cloud architecture.",

    icon: Cpu,

    color: "from-orange-400 to-yellow-500",
  },

  {
    title: "Growth",

    desc: "Focused on becoming a high-impact engineer.",

    icon: Target,

    color: "from-pink-400 to-rose-500",
  },

  {
    title: "Achievements",

    desc: "Continuous growth through projects and contests.",

    icon: Trophy,

    color: "from-indigo-400 to-violet-500",
  },
];

export default function ProfessionalDevelopment() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      {/* GALAXY GLOW */}
      {!isMobile && (
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[120px]
          "
        />
      )}

      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
          [background-size:40px_40px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />

      {/* STARS */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {stars.slice(0, isMobile ? 20 : 60).map((star) => (
          <motion.div
            key={star.id}
            animate={
              isMobile
                ? {}
                : {
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.4, 1],
                  }
            }
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
            className="
                absolute
                rounded-full
                bg-white
              "
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* SHOOTING STARS - DESKTOP ONLY */}
      {!isMobile && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{
                x: "-30%",
                y: "-30%",
                opacity: 0,
              }}
              animate={{
                x: ["0%", "160%"],
                y: ["0%", "160%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
              className="
                absolute
                left-[5%]
                top-[5%]
              "
            >
              {/* TAIL */}
              <div
                className="
                  h-[2px]
                  w-52
                  rotate-[-25deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white
                  to-transparent
                  opacity-90
                  blur-[1px]
                "
              />

              {/* HEAD */}
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  h-2
                  w-2
                  -translate-y-1/2
                  rounded-full
                  bg-white
                  shadow-[0_0_20px_white]
                "
              />
            </motion.div>
          ))}
        </div>
      )}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
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
              text-[10px]
              tracking-[0.25em]
              text-zinc-400
            "
          >
            PROFESSIONAL DEVELOPMENT
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
            text-3xl
            font-black
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          My
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
            Growth Journey
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
          "
        >
          A roadmap of my evolution in software engineering, leadership,
          architecture, and technical growth.
        </motion.p>

        {/* TIMELINE */}
        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-6xl
          "
        >
          {/* CENTER LINE */}
          {!isMobile && (
            <div
              className="
                absolute
                left-0
                top-1/2
                hidden
                h-px
                w-full
                -translate-y-1/2
                bg-gradient-to-r
                from-transparent
                via-purple-500/30
                to-transparent
                lg:block
              "
            />
          )}

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.08,
                  }}
                  whileHover={
                    isMobile
                      ? {}
                      : {
                          y: -6,
                          scale: 1.02,
                        }
                  }
                  className={`
                    group
                    relative
                    ${
                      !isMobile && index % 2 === 0
                        ? "lg:translate-y-8"
                        : !isMobile
                          ? "lg:-translate-y-8"
                          : ""
                    }
                  `}
                >
                  {/* CONNECTOR DOT */}
                  {!isMobile && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-[-12px]
                        z-20
                        hidden
                        h-4
                        w-4
                        -translate-x-1/2
                        rounded-full
                        border
                        border-white/10
                        bg-[#07030D]
                        lg:flex
                        items-center
                        justify-center
                      "
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className={`
                          h-2
                          w-2
                          rounded-full
                          bg-gradient-to-r
                          ${item.color}
                        `}
                      />
                    </div>
                  )}

                  {/* CARD */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-5
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:border-white/20
                    "
                  >
                    {/* BG */}
                    <div
                      className={`
                        absolute
                        inset-0
                        opacity-20
                        bg-gradient-to-br
                        ${item.color}
                      `}
                    />

                    {/* LIGHT */}
                    {!isMobile && (
                      <div
                        className="
                          absolute
                          inset-0
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]
                        "
                      />
                    )}

                    {/* CONTENT */}
                    <div className="relative z-10">
                      {/* TOP */}
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <div
                          className={`
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-2xl
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

                        <h3
                          className="
                            font-[family-name:var(--font-space)]
                            text-lg
                            font-black
                            text-white
                          "
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* DESC */}
                      <p
                        className="
                          mt-4
                          text-[13px]
                          leading-relaxed
                          text-zinc-300
                        "
                      >
                        {item.desc}
                      </p>

                      {/* BAR */}
                      <div
                        className="
                          mt-5
                          h-[2px]
                          overflow-hidden
                          rounded-full
                          bg-white/10
                        "
                      >
                        <motion.div
                          animate={
                            isMobile
                              ? {}
                              : {
                                  x: ["-100%", "100%"],
                                }
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`
                            h-full
                            w-14
                            rounded-full
                            bg-gradient-to-r
                            ${item.color}
                          `}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
