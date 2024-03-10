import Container from "@/components/container/container.component";
import SectionHeading from "@/components/sectionheading/sectionheading";
import SkillIcon from "@/components/skillicon/skillicon.component";
import {
  FrontendskillsIcons,
  backendSkillsIcons,
  languageSkillIcons,
  toolsIcons,
} from "@/data/data";
import { skillHeadingIcon } from "@/public";
import { FC } from "react";

interface SkillIconsCompProps {
  skillName: string;
  skills: { skill: string, icon: any }[];
}

const SkillIconsComp: FC<SkillIconsCompProps> = ({ skillName, skills }) => {
  return <div>
    <div className="py-1">
      <h2 className="text-lg font-semibold text-[var(--primary-gray)] ">
        {skillName}
      </h2>
      <div className="flex gap-1 flex-wrap ">
        {skills.map((ele, idx) => (
          <SkillIcon {...ele} key={idx} />
        ))}
      </div>
    </div>
  </div>
}

export default function SkillSection() {
  return (
    <section>
      <Container>
        <SectionHeading >Skills</SectionHeading>
        <div className="grid grid-cols-2 xs:grid-cols-1 " >
          <SkillIconsComp skillName="Languages" skills={languageSkillIcons} />
          <SkillIconsComp skillName="Frontend Framework & Libraries" skills={FrontendskillsIcons} />
          <SkillIconsComp skillName="Backend" skills={backendSkillsIcons} />
          <SkillIconsComp skillName="Tools" skills={toolsIcons} />
        </div>
      </Container>
    </section>
  );
};

