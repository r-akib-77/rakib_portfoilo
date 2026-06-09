"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#05010A]
        px-5
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

      {/* TOP GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/20
          blur-[140px]
        "
      />

      {/* BOTTOM GLOW */}
      <div
        className="
          absolute
          bottom-[-200px]
          right-[-120px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-fuchsia-700/20
          blur-[140px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-4xl
          flex-col
          items-center
          text-center
        "
      >
        {/* ICON */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
          "
        >
          {/* ICON GLOW */}
          <div
            className="
              absolute
              inset-0
              rounded-[32px]
              bg-purple-500/10
              blur-2xl
            "
          />

          <SearchX
            className="
              relative
              z-10
              text-purple-300
            "
            size={50}
          />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="
            mt-10
            font-[family-name:var(--font-space)]
            text-[90px]
            font-black
            leading-none
            tracking-tight
            text-white
            sm:text-[120px]
            md:text-[160px]
          "
        >
          4
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
            0
          </span>
          4
        </motion.h1>

        {/* TITLE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-4
            text-3xl
            font-black
            tracking-tight
            text-white
            sm:text-4xl
            md:text-5xl
          "
        >
          Lost in cyberspace.
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
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
          The page you are trying to access does not exist, may have been
          removed, or is temporarily unavailable.
        </motion.p>

        {/* BUTTONS */}
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
            delay: 0.4,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-4
            sm:flex-row
          "
        >
          {/* HOME */}
          <Link
            href="/"
            className="
              group
              relative
              flex
              items-center
              justify-center
              gap-2
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

            <Home size={18} className="relative z-10" />

            <span className="relative z-10">Back to Home</span>
          </Link>

          {/* BACK */}
          <button
            onClick={() => window.history.back()}
            className="
              group
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-7
              py-3.5
              text-sm
              font-medium
              text-zinc-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.06]
              hover:text-white
            "
          >
            <ArrowLeft
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
            Go Back
          </button>
        </motion.div>

        {/* FLOATING TEXT */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mt-20
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-6
            py-3
            text-xs
            tracking-[0.25em]
            text-zinc-500
            backdrop-blur-xl
          "
        >
          ERROR • PAGE NOT FOUND • 404
        </motion.div>
      </div>
    </main>
  );
}
