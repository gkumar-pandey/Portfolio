
import ContactSection from "@/components/section/contact/contact.section";
import Education from "@/components/section/education/education.section";
import HeroSection from "@/components/section/hero/hero.section";
import ProjectSection from "@/components/section/projects/projects.section";
import SkillSection from "@/components/section/skills/skills.section";
import WorkExperience from "@/components/section/workexperience/work-experience.section";


export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      <Education />
      <WorkExperience />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
