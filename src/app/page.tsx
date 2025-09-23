import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="container relative mx-auto max-w-screen-xl px-4 py-10 sm:py-16 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <Profile />
          <Skills/>
        </div>
        <main className="flex flex-col gap-6 lg:gap-6">
          <AboutMe />
          <Projects />
          <Experience />
        </main>
      </div>
    </div>
  );
}
