import ActiveGigs from "./section/ActiveGigs";
import Education from "./section/Education";
import ExploreMe from "./section/ExploreMe";
import NullPointerTeam from "./section/NullPointer";
import ProfessionalDevelopment from "./section/ProfessonalDevelopment";
import TechStackChart from "./section/TechnicalStackWithChart";

export default function About() {
  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#020103]
      "
    >
      {/* DARK GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />

      {/* TOP PURPLE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-250px]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/10
          blur-[220px]
        "
      />

      {/* BOTTOM DARK PURPLE */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-300px]
          left-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-fuchsia-900/10
          blur-[220px]
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/35
        "
      />

      {/* NOISE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
          mix-blend-soft-light
          [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <ExploreMe />
        <TechStackChart />
        <NullPointerTeam />
        <ProfessionalDevelopment />
        <ActiveGigs />
        <Education />
      </div>
    </main>
  );
}
