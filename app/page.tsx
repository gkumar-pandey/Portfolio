import { ContactSection, WorkExperience, ProjectSection, HeroSection, Education, SkillSection } from '@/components'


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
