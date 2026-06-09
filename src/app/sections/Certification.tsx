"use client";

import { motion } from "framer-motion";

import { Award, BadgeCheck, ExternalLink, CalendarDays } from "lucide-react";

const certifications = [
  {
    title: "Complete Web Development",

    issuer: "Programming Hero",

    date: "2024",

    credential: "PH-WEB-2024",

    description:
      "Advanced full-stack development with React, Next.js, Node.js, MongoDB and scalable deployment workflows.",

    skills: ["React", "Next.js", "MongoDB", "Express", "Tailwind"],

    link: "#",
  },

  {
    title: "Problem Solving & DSA",

    issuer: "LeetCode",

    date: "2024",

    credential: "LC-DSA-991",

    description:
      "Solved advanced algorithmic problems focused on optimization, graphs, recursion, and system-level thinking.",

    skills: ["Algorithms", "Data Structures", "Graphs", "DP", "Optimization"],

    link: "#",
  },

  {
    title: "Backend Engineering",

    issuer: "Coursera",

    date: "2023",

    credential: "BE-ENGINE-223",

    description:
      "Production backend engineering including REST APIs, authentication, databases, and cloud architecture.",

    skills: ["Node.js", "PostgreSQL", "JWT", "Firebase", "API Design"],

    link: "#",
  },
];

export default function Certifications() {
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
      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />

      {/* GLOW */}
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
            ACHIEVEMENTS & CERTIFICATIONS
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
          Professional
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
            Certifications
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
          Verified achievements demonstrating expertise in software engineering,
          backend systems and modern web technologies.
        </motion.p>

        {/* CERTIFICATIONS */}
        <div
          className="
            mt-20
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
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
                delay: index * 0.08,
                duration: 0.7,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-3xl
              "
            >
              {/* HOVER GLOW */}
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

              {/* TOP ICON */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                  "
                >
                  <Award
                    className="
                      text-3xl
                      text-purple-300
                    "
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-3
                    py-1.5
                    text-xs
                    text-emerald-300
                  "
                >
                  <BadgeCheck size={14} />
                  Verified
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3
                  className="
                    mt-7
                    text-2xl
                    font-bold
                    leading-tight
                    text-white
                  "
                >
                  {cert.title}
                </h3>

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-zinc-400
                  "
                >
                  <span>{cert.issuer}</span>

                  <div
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-zinc-600
                    "
                  />

                  <div
                    className="
                      flex
                      items-center
                      gap-1
                    "
                  >
                    <CalendarDays size={14} />

                    {cert.date}
                  </div>
                </div>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {cert.description}
                </p>

                {/* STACK */}
                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {cert.skills.map((skill) => (
                    <div
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-3
                        py-1.5
                        text-xs
                        text-zinc-300
                      "
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.2em]
                        text-zinc-500
                      "
                    >
                      Credential ID
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-zinc-300
                      "
                    >
                      {cert.credential}
                    </p>
                  </div>

                  <a
                    href={cert.link}
                    className="
                      group/link
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-zinc-300
                      transition-all
                      duration-300
                      hover:border-purple-500/30
                      hover:bg-purple-500/10
                      hover:text-white
                    "
                  >
                    <ExternalLink
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:-translate-y-1
                        group-hover/link:translate-x-1
                      "
                    />
                  </a>
                </div>
              </div>

              {/* BOTTOM LIGHT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-purple-500
                  via-fuchsia-500
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
