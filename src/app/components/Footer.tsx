"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/r-akib-77?tab=repositories",
    },

    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/rakibul-hasan-517b192a7",
    },

    {
      icon: FaInstagram,
      href: "https://www.instagram.com/r_akib_77?igsh=MXJnMG5vcjdpa2ZkaQ==",
    },

    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1CRHimXxNu/",
    },

    {
      icon: Mail,
      href: "mailto:rakibulhasanrakib2004@gmail.com",
    },
  ];

  const words = ["SaaS", "Frontend", "Automation", "AI Systems", "Modern UI"];

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        px-5
        py-10
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
          top-0
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />

      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-10
        "
      >
        {/* TOP */}
        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}
          <div
            className="
              max-w-xl
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
                mb-4
                flex
                w-fit
                items-center
                gap-2
              "
            >
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_12px_rgba(168,85,247,0.9)]
                "
              />

              <span
                className="
                  text-[10px]
                  tracking-[0.28em]
                  text-zinc-500
                "
              >
                AVAILABLE FOR WORK
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
              transition={{
                delay: 0.1,
              }}
              className="
                font-[family-name:var(--font-space)]
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              Let&apos;s build
              {/* INFINITE WORD SLIDER */}
              <div
                className="
                  relative
                  mt-2
                  h-[60px]
                  overflow-hidden
                  sm:h-[72px]
                  md:h-[90px]
                "
              >
                <motion.div
                  animate={{
                    y: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    flex
                    flex-col
                  "
                >
                  {/* ORIGINAL */}
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="
                        flex
                        h-[60px]
                        items-center
                        bg-gradient-to-r
                        from-purple-300
                        via-fuchsia-400
                        to-cyan-400
                        bg-clip-text
                        text-transparent
                        sm:h-[72px]
                        md:h-[90px]
                      "
                    >
                      {word}
                    </span>
                  ))}

                  {/* DUPLICATE */}
                  {words.map((word, index) => (
                    <span
                      key={`duplicate-${index}`}
                      className="
                        flex
                        h-[60px]
                        items-center
                        bg-gradient-to-r
                        from-purple-300
                        via-fuchsia-400
                        to-cyan-400
                        bg-clip-text
                        text-transparent
                        sm:h-[72px]
                        md:h-[90px]
                      "
                    >
                      {word}
                    </span>
                  ))}
                </motion.div>
              </div>
              products together.
            </motion.h2>

            {/* DESC */}
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
                delay: 0.15,
              }}
              className="
                mt-5
                max-w-lg
                text-sm
                leading-relaxed
                text-zinc-400
                sm:text-base
              "
            >
              Frontend development, full-stack SaaS, automation systems, startup
              collaboration, and premium web experiences.
            </motion.p>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              items-start
              gap-5
              lg:items-end
            "
          >
            {/* BUTTON */}
            <motion.a
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
              whileHover={{
                y: -2,
              }}
              href="/contact"
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-purple-500/20
                bg-gradient-to-r
                from-purple-500/10
                via-fuchsia-500/10
                to-cyan-500/10
                px-6
                py-3
                text-sm
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-purple-400/40
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-purple-500/20
                "
              />

              <span className="relative z-10">Start a Project</span>
            </motion.a>

            {/* SOCIALS */}
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
              transition={{
                delay: 0.1,
              }}
              className="
                flex
                items-center
                gap-3
              "
            >
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      group
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-zinc-400
                      transition-all
                      duration-300
                      hover:border-purple-500/20
                      hover:bg-purple-500/10
                      hover:text-white
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        blur-2xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                        bg-purple-500/20
                      "
                    />

                    <Icon
                      size={17}
                      className="
                        relative
                        z-10
                      "
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/5
            pt-6
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          {/* LEFT */}
          <div>
            <h3
              className="
                text-lg
                font-semibold
                tracking-tight
                text-white
              "
            >
              Rakib
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-zinc-500
              "
            >
              Full Stack Developer & UI Engineer
            </p>
          </div>

          {/* RIGHT */}
          <p
            className="
              text-xs
              text-zinc-500
              sm:text-sm
            "
          >
            © 2026 Rakib. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
