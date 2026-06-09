"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Mail } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      className="
        relative
        px-5
      
        pt-32
        md:px-8
        lg:px-12
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-14
          lg:grid-cols-2
        "
      >
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          {/* SMALL LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mb-5
              inline-flex
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
            <motion.div
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
                text-[11px]
                tracking-[0.2em]
                text-zinc-400
                md:text-sm
              "
            >
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.8,
            }}
            className="
              font-[family-name:var(--font-space)]
              text-4xl
              font-black
              leading-[1]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
            "
          >
            Building
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
              futuristic{" "}
            </span>
            digital experiences.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-relaxed
              text-zinc-400
              sm:text-base
              md:text-lg
            "
          >
            Full-stack software developer with strong expertise in building
            scalable web applications using modern front-end and back-end
            technologies. Proficient in designing production-ready systems,
            implementing CI/CD pipelines, and automating deployments.
          </motion.p>

          {/* SOCIALS + BUTTON */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="
              mt-10
              flex
              flex-col
              items-start
              gap-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* SOCIALS */}
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com",
                },
                {
                  icon: FaLinkedinIn,
                  href: "https://linkedin.com",
                },
                {
                  icon: Mail,
                  href: "mailto:yourmail@gmail.com",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      group
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-zinc-400
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-purple-500/20
                      hover:bg-purple-500/10
                      hover:text-white
                    "
                  >
                    {/* Glow */}
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

                    <Icon size={18} className="relative z-10" />
                  </motion.a>
                );
              })}
            </div>

            {/* HIRE BUTTON */}
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-purple-500/20
                bg-purple-500/10
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-purple-400/40
                hover:bg-purple-500/20
              "
            >
              {/* Glow */}
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

              <span className="relative z-10">Hire Now</span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
            order-1
            relative
            flex
            justify-center
            lg:order-2
          "
        >
          {/* OUTER GLOW */}
          <div
            className="
              absolute
              inset-0
              scale-110
              rounded-full
              bg-purple-500/10
              blur-[120px]
            "
          />

          {/* FLOATING PROFILE */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* GLASS RING */}
            <div
              className="
                absolute
                inset-0
                rounded-[35px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-3xl
              "
            />

            {/* GRADIENT BORDER */}
            <div
              className="
                absolute
                inset-[-2px]
                rounded-[36px]
                bg-gradient-to-br
                from-purple-500/30
                via-transparent
                to-fuchsia-500/30
                opacity-70
                blur-sm
              "
            />

            {/* IMAGE CONTAINER */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-white/10
                bg-white/[0.03]
                p-2.5
                backdrop-blur-3xl
              "
            >
              <Image
                src="/hero/hero.png"
                alt="Profile"
                width={420}
                height={520}
                priority
                className="
                  h-[340px]
                  w-[260px]
                  rounded-[28px]
                  object-cover
                  sm:h-[420px]
                  sm:w-[320px]
                  lg:h-[500px]
                  lg:w-[370px]
                "
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
