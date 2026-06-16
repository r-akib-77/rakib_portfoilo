"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Rocket, Code2 } from "lucide-react";

export default function BuyPage() {
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
        px-4
        py-24
        md:pt-40
        pt-34
        sm:px-6
        md:px-8
      "
    >
      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/20
          blur-[100px]

          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[140px]

          md:h-[700px]
          md:w-[700px]
          md:blur-[180px]
        "
      />

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
          duration: 0.6,
        }}
        className="
          relative
          z-10
          w-full
          max-w-md
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.03]
          p-5
          text-center
          backdrop-blur-2xl

          sm:max-w-xl
          sm:p-8

          md:max-w-2xl
          md:rounded-[32px]
          md:p-12
        "
      >
        {/* ICON */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            mx-auto
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-fuchsia-500
            via-purple-500
            to-cyan-500
            shadow-[0_0_50px_rgba(168,85,247,0.45)]

            sm:h-20
            sm:w-20

            md:h-24
            md:w-24
          "
        >
          <Code2
            size={28}
            className="
              text-white
              sm:size-9
            "
          />
        </motion.div>

        {/* TITLE */}
        <h1
          className="
            text-3xl
            font-black
            text-white

            sm:text-4xl

            md:text-5xl
          "
        >
          Buy
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
            Source Code
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-relaxed
            text-zinc-400

            sm:mt-5
            sm:text-base
          "
        >
          Purchase the complete source code with full access, deployment
          support, customization guidance, documentation, and future updates.
        </p>

        {/* FEATURES */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2

            md:grid-cols-3
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-3

              sm:p-4
            "
          >
            <Rocket size={24} className="mx-auto text-purple-400" />

            <h3
              className="
                mt-3
                font-semibold
                text-white
              "
            >
              Fast Setup
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-zinc-500
              "
            >
              Ready to deploy and launch quickly.
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-3

              sm:p-4
            "
          >
            <ShieldCheck size={24} className="mx-auto text-cyan-400" />

            <h3
              className="
                mt-3
                font-semibold
                text-white
              "
            >
              Premium Support
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-zinc-500
              "
            >
              Help with deployment and customization.
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-3

              sm:p-4
            "
          >
            <Code2 size={24} className="mx-auto text-fuchsia-400" />

            <h3
              className="
                mt-3
                font-semibold
                text-white
              "
            >
              Clean Code
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-zinc-500
              "
            >
              Production-ready and well structured.
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <a
          href="https://wa.me/8801646774173?text=Hi%20Rakib,%20I%20want%20to%20buy%20your%20source%20code."
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8
            inline-flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-fuchsia-500
            via-purple-500
            to-cyan-500
            px-6
            py-3
            font-semibold
            text-white
            shadow-[0_0_40px_rgba(168,85,247,0.35)]
            transition-all
            duration-300
            hover:scale-105

            sm:mt-10
            sm:w-auto
            sm:px-8
            sm:py-4
          "
        >
          <MessageCircle size={20} />
          Buy via WhatsApp
        </a>

        <p
          className="
            mt-5
            text-xs
            text-zinc-500

            sm:text-sm
          "
        >
          Click the button above to discuss pricing, customization, deployment,
          and support.
        </p>
      </motion.div>
    </main>
  );
}
