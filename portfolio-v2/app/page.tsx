import Image from "next/image";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
      <main className="w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
          <div id={"home"}>
              <Hero/>
          </div>
          <div id={"projects"}>
              <ProjectShowcase/>
          </div>
          <div id={"about"}>
              <Hero/>
          </div>
          <div id={"contact"}>
              <ProjectShowcase/>
          </div>
      </main>
  );
}
