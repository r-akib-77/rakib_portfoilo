import Banner from "./sections/Banner";
import Certifications from "./sections/Certification";
import Hero from "./sections/Hero";
import ProblemSolver from "./sections/ProblemSolver";
import FeaturedProjects from "./sections/Projects";
import Skills from "./sections/Skills";
import SoftSkills from "./sections/SoftSkills";

export default function Home() {
  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#05010A]
      "
    >
      {/* GLOBAL GRID */}
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

      {/* GLOBAL PURPLE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/20
          blur-[180px]
        "
      />

      {/* NOISE */}
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

      <Hero />
      <Banner />
      <Skills />
      <SoftSkills />
      <ProblemSolver />
      <FeaturedProjects />
      <Certifications />
    </main>
  );
}
