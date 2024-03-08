import { Container } from "@/components";
import { SectionHeading } from "@/components/sectionheading/sectionheading";
import { SkillIcon } from "@/components/skillicon/skillicon.component";
import {
  FrontendskillsIcons,
  backendSkillsIcons,
  toolsIcons,
} from "@/data/data";
import Image from "next/image";

export const SkillSection = () => {
  return (
    <Container>
      <section>
        <SectionHeading>Skills</SectionHeading>
        <div>
          <div className="py-1">
            <h2 className="text-lg font-semibold text-[var(--primary-gray)] ">
              Frontend
            </h2>
            <div className="flex gap-1">
              {FrontendskillsIcons.map((ele, idx) => (
                <SkillIcon {...ele} key={idx} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[var(--primary-gray)] ">
            Backend
          </h2>
          <div className="flex gap-1">
            {backendSkillsIcons.map((ele, idx) => (
              <SkillIcon key={idx} {...ele} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[var(--primary-gray)] ">
            Tools
          </h2>
          <div className="flex gap-1" >
            {toolsIcons.map((ele, idx) => (
              <SkillIcon {...ele} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
