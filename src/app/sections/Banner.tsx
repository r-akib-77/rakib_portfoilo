"use client";

import { motion } from "framer-motion";

const topText = [
  "FULL STACK DEVELOPER",
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT",
  "NODE.JS",
  "MONGODB",
  "PROBLEM SOLVER",
  "UI ENGINEER",
];

const bottomText = [
  "TAILWIND CSS",
  "FRAMER MOTION",
  "POSTGRESQL",
  "EXPRESS.JS",
  "PRISMA ORM",
  "CLOUD DEPLOYMENT",
  "SCALABLE SYSTEMS",
  "FREELANCER",
];

export default function Banner() {
  return (
    <section
      className="
        relative
        overflow-hidden
         py-5
        md:py-7
      "
    >
      {/* TOP ROW */}
      <div
        className="
          relative
          left-[-5%]
          w-[110%]
          rotate-[-2deg]
          overflow-hidden
          border-y
          border-white/10
          bg-[#09090B]
          py-3
          md:py-4
        "
      >
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            items-center
            gap-6
            md:gap-10
          "
        >
          {[...topText, ...topText].map((item, index) => (
            <div
              key={index}
              className="
                flex
                shrink-0
                items-center
                gap-6
                md:gap-10
              "
            >
              <span
                className="
                  whitespace-nowrap
                  font-[family-name:var(--font-space)]
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-white
                  md:text-lg
                "
              >
                {item}
              </span>

              <div
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple-400
                "
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM ROW */}
      <div
        className="
          relative
          left-[-5%]
          mt-4
          w-[110%]
          rotate-[2deg]
          overflow-hidden
          border-y
          border-white/10
          bg-[#09090B]
          py-3
          md:mt-5
          md:py-4
        "
      >
        <motion.div
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            items-center
            gap-6
            md:gap-10
          "
        >
          {[...bottomText, ...bottomText].map((item, index) => (
            <div
              key={index}
              className="
                flex
                shrink-0
                items-center
                gap-6
                md:gap-10
              "
            >
              <span
                className="
                  whitespace-nowrap
                  font-[family-name:var(--font-space)]
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-zinc-300
                  md:text-lg
                "
              >
                {item}
              </span>

              <div
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-fuchsia-400
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
