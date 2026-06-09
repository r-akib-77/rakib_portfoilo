"use client";

import { motion } from "framer-motion";

import {
  Download,
  FileText,
  Sparkles,
  ArrowDown,
  ShieldCheck,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

export default function ResumeSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        py-16
        sm:px-6
        mt-22
        md:mt-28
        md:px-8
        lg:px-12
      "
    >
      {/* BG GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-fuchsia-700/10
          blur-[120px]
          md:h-[550px]
          md:w-[550px]
        "
      />

      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
          [background-size:40px_40px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]
        "
      />

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
              text-fuchsia-400
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
            PROFESSIONAL PROFILE
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
          Download My
          <span
            className="
              bg-gradient-to-r
              from-fuchsia-300
              via-purple-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            {" "}
            Resume
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
            mt-4
            max-w-2xl
            text-center
            text-[13px]
            leading-relaxed
            text-zinc-400
            sm:text-sm
            md:text-base
          "
        >
          Explore my technical expertise, engineering mindset, leadership
          journey, and project-based development experience.
        </motion.p>

        {/* MAIN CARD */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
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
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
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

          {/* HOVER LIGHT */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-8
              p-5
              md:grid-cols-[0.9fr_1.1fr]
              md:p-8
            "
          >
            {/* MOBILE DOWNLOAD BTN */}
            <motion.a
              whileTap={{
                scale: 0.97,
              }}
              href="/resume.pdf"
              download
              className="
                group/btn
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-purple-500/20
                bg-gradient-to-r
                from-purple-500
                via-fuchsia-500
                to-cyan-500
                px-5
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_0_40px_rgba(168,85,247,0.25)]
                md:hidden
              "
            >
              <Download size={18} />
              Download CV
              <ArrowDown size={16} />
            </motion.a>

            {/* LEFT */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-black/20
                p-5
                md:p-6
              "
            >
              {/* ICON */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-[24px]
                  bg-gradient-to-br
                  from-fuchsia-500
                  via-purple-500
                  to-cyan-500
                  shadow-[0_0_60px_rgba(168,85,247,0.35)]
                  md:h-28
                  md:w-28
                "
              >
                <FileText
                  size={42}
                  className="
                    text-white
                  "
                />
              </motion.div>

              {/* TEXT */}
              <div
                className="
                  mt-6
                  text-center
                "
              >
                <h3
                  className="
                    text-xl
                    font-black
                    text-white
                    md:text-2xl
                  "
                >
                  Resume.pdf
                </h3>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-relaxed
                    text-zinc-400
                    sm:text-sm
                  "
                >
                  Complete overview of my projects, engineering skills,
                  development experience, and technical journey.
                </p>
              </div>

              {/* STATS */}
              <div
                className="
                  mt-6
                  grid
                  grid-cols-3
                  gap-2
                  md:gap-3
                "
              >
                {[
                  {
                    icon: Code2,
                    value: "20+",
                    label: "Projects",
                  },

                  {
                    icon: BriefcaseBusiness,
                    value: "3+",
                    label: "Services",
                  },

                  {
                    icon: ShieldCheck,
                    value: "100%",
                    label: "Focused",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
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
                        delay: index * 0.08,
                      }}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-3
                        text-center
                      "
                    >
                      <Icon
                        size={16}
                        className="
                          mx-auto
                          text-purple-300
                        "
                      />

                      <h4
                        className="
                          mt-2
                          text-base
                          font-bold
                          text-white
                          md:text-lg
                        "
                      >
                        {item.value}
                      </h4>

                      <p
                        className="
                          text-[10px]
                          text-zinc-500
                        "
                      >
                        {item.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                flex-col
                justify-center
              "
            >
              <p
                className="
                  text-[10px]
                  tracking-[0.25em]
                  text-zinc-500
                "
              >
                ENGINEERING PROFILE
              </p>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Building
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
                  modern digital{" "}
                </span>
                experiences with engineering precision.
              </h3>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-[13px]
                  leading-relaxed
                  text-zinc-400
                  sm:text-sm
                  md:text-base
                "
              >
                My resume showcases frontend engineering, full-stack systems,
                SaaS applications, automation workflows, leadership experience,
                and practical software development expertise.
              </p>

              {/* DESKTOP BUTTON */}
              <motion.a
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="/resume.pdf"
                download
                className="
                  group/btn
                  mt-8
                  hidden
                  w-fit
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-purple-500/20
                  bg-gradient-to-r
                  from-purple-500
                  via-fuchsia-500
                  to-cyan-500
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_0_40px_rgba(168,85,247,0.25)]
                  transition-all
                  duration-300
                  md:flex
                "
              >
                <Download
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover/btn:translate-y-1
                  "
                />
                Download CV
                <ArrowDown
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover/btn:translate-y-1
                  "
                />
              </motion.a>

              {/* STATUS */}
              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                    animate-pulse
                  "
                />

                <p
                  className="
                    text-sm
                    text-zinc-400
                  "
                >
                  Available for freelance & collaboration
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
