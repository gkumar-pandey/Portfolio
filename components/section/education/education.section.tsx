import Container from "@/components/container/container.component";
import SectionHeading from "@/components/sectionheading/sectionheading";
import { educationHeadingIcon } from "@/public";
import graduateIcon from "@/public/icons/graduate.png";
import Image from "next/image";

export default function Education() {
  return (
    <section>
      <Container>
        <SectionHeading  >
          <p>Education</p>
        </SectionHeading>
        <div className="flex flex-row gap-4 py-1" >
          <Image
            className="w-10 h-10 rounded-full border border-slate-500 "
            src={graduateIcon}
            alt="graduate-icon"
          />
          <div>
            <h3 className=" text-xl font-semibold text-white " >Nalanda College of Engineering,Chandi</h3>
            <h4 className=" font-medium text-base text-[var(--primary-gray)] " >2020-2024</h4>
            <p className="text-base font-medium text-[var(--primary-gray)] " >Electrical And Electronics Engineering</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

