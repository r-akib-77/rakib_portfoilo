"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "About", "Projects", "Contact", "Resume"];

export default function Navbar() {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          fixed
          left-1/2
          top-5
          z-50
          w-[95%]
          max-w-7xl
          -translate-x-1/2
        "
      >
        <motion.nav
          animate={{
            backdropFilter: scrolled ? "blur(28px)" : "blur(20px)",

            backgroundColor: scrolled
              ? "rgba(255,255,255,0.06)"
              : "rgba(255,255,255,0.03)",

            borderColor: scrolled
              ? "rgba(255,255,255,0.14)"
              : "rgba(255,255,255,0.08)",
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            px-6
            py-4
            shadow-[0_8px_40px_rgba(0,0,0,0.35)]
          "
        >
          {/* Animated Gradient Border */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-3xl
              opacity-50
            "
          >
            <div
              className="
                absolute
                inset-[-1px]
                rounded-3xl
                bg-[linear-gradient(120deg,transparent,rgba(168,85,247,0.5),transparent)]
                animate-[spin_12s_linear_infinite]
              "
            />
          </div>

          {/* Noise Texture */}
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

          <div className="relative z-10 flex items-center justify-between">
            {/* LEFT SIDE */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 14,
              }}
              className="
                flex
                items-center
                gap-4
                cursor-pointer
              "
            >
              {/* Floating Logo */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    scale-150
                    rounded-full
                    bg-purple-500/40
                    blur-3xl
                  "
                />

                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={90}
                  height={90}
                  priority
                  className="
                    relative
                    z-10
                    drop-shadow-[0_0_40px_rgba(168,85,247,0.7)]
                  "
                />
              </motion.div>

              {/* TEXT */}
              <div>
                <motion.h1
                  whileHover={{
                    scale: 1.04,
                  }}
                  className="
                    bg-gradient-to-r
                    from-white
                    via-purple-300
                    to-fuchsia-500
                    bg-clip-text
                    font-[family-name:var(--font-space)]
                    text-3xl
                    font-black
                    tracking-tight
                    text-transparent
                    md:text-4xl
                  "
                >
                  Rakib.
                </motion.h1>

                <p
                  className="
                    mt-1
                    text-[10px]
                    tracking-[0.35em]
                    text-zinc-500
                    md:text-xs
                  "
                >
                  FULL STACK ENGINEER
                </p>
              </div>
            </motion.div>

            {/* DESKTOP NAV */}
            <div
              className="
                hidden
                items-center
                gap-3
                md:flex
              "
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    border
                    border-transparent
                    px-5
                    py-2.5
                    md:text-lg
                    font-medium
                    text-zinc-300
                    transition-all
                    duration-300
                    hover:border-purple-400/20
                    hover:bg-white/[0.03]
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

                  {/* Gradient Border */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-purple-500/0
                      transition-all
                      duration-300
                      group-hover:border-purple-500/30
                    "
                  />

                  <span className="relative z-10">{item}</span>
                </motion.a>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
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
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                md:hidden
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-purple-500/10
                  blur-xl
                "
              />

              {mobileOpen ? (
                <X className="relative z-10 text-white" />
              ) : (
                <Menu className="relative z-10 text-white" />
              )}
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              left-1/2
              top-28
              z-40
              w-[92%]
              max-w-md
              -translate-x-1/2
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#0B0715]/80
              p-4
              backdrop-blur-3xl
              md:hidden
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-purple-500/10
                blur-3xl
              "
            />

            <div className="relative z-10 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/5
                    bg-white/[0.03]
                    px-5
                    py-4
                    text-sm
                    font-medium
                    text-zinc-300
                    transition-all
                    duration-300
                    hover:border-purple-500/20
                    hover:bg-purple-500/10
                    hover:text-white
                  "
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
