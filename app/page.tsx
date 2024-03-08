import { Education } from "@/components";
import { HeroSection } from "@/components/section/hero/hero.section";
import { ProjectSection } from "@/components/section/projects/projects.section";
import { SkillSection } from "@/components/section/skills/skills.section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--primary-bg-color)] ">
      <HeroSection />
      <Education />
      <SkillSection />
      <ProjectSection />
    </main>
  );
}
