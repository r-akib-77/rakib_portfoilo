"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Sparkles, Globe, Layers3, Workflow, CheckCircle2 } from "lucide-react";

const gigs = [
  {
    title: "Frontend Development",

    subtitle: "Figma / PSD / Canva → Functional Website",

    desc: "Transforming modern UI designs into responsive, animated, pixel-perfect frontend experiences with clean architecture and smooth interactions.",

    image: "/gigs/frontend.png",

    icon: Globe,

    color: "from-cyan-400 via-blue-500 to-indigo-500",

    features: [
      "Responsive UI",
      "Next.js & React",
      "Pixel Perfect",
      "Modern Animations",
    ],
  },

  {
    title: "Full Stack & SaaS",

    subtitle: "Web Apps + SaaS + Mobile Ready Systems",

    desc: "Building scalable full-stack platforms with authentication, APIs, dashboards, databases, payment systems, admin panels, and mobile-ready architecture.",

    image: "/gigs/fullstack.png",

    icon: Layers3,

    color: "from-fuchsia-400 via-purple-500 to-pink-500",

    features: [
      "Authentication",
      "Dashboards",
      "API Systems",
      "Production Ready",
    ],
  },

  {
    title: "Automation & n8n",

    subtitle: "Workflow Automation & Integrations",

    desc: "Creating intelligent automations, AI workflows, integrations, data pipelines, and productivity systems using n8n and modern automation tools.",

    image: "/gigs/automation.png",

    icon: Workflow,

    color: "from-emerald-400 via-green-500 to-teal-500",

    features: [
      "n8n Automation",
      "AI Workflows",
      "API Integration",
      "Task Automation",
    ],
  },
];

export default function ActiveGigs() {
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
      {/* BG GLOW */}
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
          max-w-7xl
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
            size={12}
            className="
              text-fuchsia-400
            "
          />

          <span
            className="
              text-[10px]
              tracking-[0.25em]
              text-zinc-400
            "
          >
            ACTIVE SERVICES
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
            text-3xl
            font-black
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          What I
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
            Build
          </span>
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
          Specialized in frontend engineering, scalable full-stack systems, SaaS
          applications, automation workflows, and modern digital experiences.
        </motion.p>

        {/* GIG GRID */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {gigs.map((gig, index) => {
            const Icon = gig.icon;

            return (
              <motion.div
                key={gig.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-2xl
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    h-[180px]
                    overflow-hidden
                    sm:h-[200px]
                  "
                >
                  <Image
                    src={gig.image}
                    alt={gig.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#05010A]
                      via-[#05010A]/30
                      to-transparent
                    "
                  />

                  {/* TOP BADGE */}
                </div>

                {/* CONTENT */}
                <div
                  className="
                    relative
                    p-4
                    sm:p-5
                  "
                >
                  {/* FLOAT ICON */}
                  <div
                    className={`
                      absolute
                      -top-7
                      right-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-gradient-to-br
                      ${gig.color}
                      shadow-[0_0_40px_rgba(168,85,247,0.25)]
                      sm:h-14
                      sm:w-14
                    `}
                  >
                    <Icon
                      size={22}
                      className="
                        text-white
                      "
                    />
                  </div>

                  {/* SUBTITLE */}
                  <p
                    className="
                      text-[10px]
                      tracking-[0.25em]
                      text-zinc-500
                    "
                  >
                    {gig.subtitle}
                  </p>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-3
                      font-[family-name:var(--font-space)]
                      text-xl
                      font-black
                      text-white
                      sm:text-2xl
                    "
                  >
                    {gig.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                      mt-4
                      text-[13px]
                      leading-relaxed
                      text-zinc-400
                      sm:text-sm
                    "
                  >
                    {gig.desc}
                  </p>

                  {/* FEATURES */}
                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {gig.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-white/10
                          bg-black/20
                          px-3
                          py-2
                        "
                      >
                        <CheckCircle2
                          size={13}
                          className="
                            text-emerald-400
                          "
                        />

                        <span
                          className="
                            text-[11px]
                            text-zinc-300
                          "
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HOVER LIGHT */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
