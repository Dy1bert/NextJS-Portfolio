import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
      <main className="w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
          <div id={"home"}>
              <Hero/>
          </div>
          <div id={"projects"}>
              <Hero/>
          </div>
          <div id={"about"}>
              <Hero/>
          </div>
          <div id={"contact"}>
              <Hero/>
          </div>
      </main>
  );
}
