import { Container } from "@/components";
import { SectionHeading } from "@/components/sectionheading/sectionheading";
import { WorkExperienceCard } from "@/components/workexperiencecard/work-experience-card.component";
import { workExperienceDetailsData } from "@/data/data";

export const WorkExperience = () => {
  return (
    <section id="work-experience" >
      <Container>
        <SectionHeading>Work Experience</SectionHeading>
        {workExperienceDetailsData.map((ele, idx) => (
          <WorkExperienceCard {...ele} key={idx} />
        ))}
      </Container>
    </section>
  );
};
