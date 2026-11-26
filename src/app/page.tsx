import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    // One shared gap so every section is separated by exactly the same spacing.
    <div className="space-y-24 md:space-y-32">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}