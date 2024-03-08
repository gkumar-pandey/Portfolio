import { Container } from "@/components";
import { ProfileImage } from "./component/ProfileImg";
import { HeroLeft } from "./component/HeroLeft";
import { Button } from "@/components/button/button.component";

export const HeroSection = () => {
  return (
    <div className="bg-[var(--primary-bg-color)]">
      <Container>
        <div className="flex py-4 items-start">
          <div className="flex h-full py-4 w-full flex-col ">
            <div className="flex flex-row gap-8 py-2">
              <ProfileImage />
              <HeroLeft />
            </div>
            <div className="text-lg text-justify text-[var(--primary-gray)] font-normal  w-2/3 ">
              <p className="py-1">
                If this HTML renders correctly, I am a fairly good developer and
                problem solver.
              </p>
              <p className=" text-wrap  ">
                I'm Gautam a EEE undergrad who is interested in Web development
                and Competetive Programming. i have a passion for creating
                beautiful web applications. I share my learnings through
                speaking engagements & write-ups. i also identify myself as an
                Open-Source advocate
              </p>
            </div>
            <div className="py-4 flex items-center gap-4 " >
              <Button variant={'outlined'} >Get In Touch</Button>
              <Button variant={"solid"}>Resume</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
