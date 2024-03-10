const BoldText = ({ children }: { children: string }) => (
  <span className=" font-semibold text-white">{children}</span>
);
const AboutMe = () => {
  return (
    <>
      <div className="text-lg text-[var(--primary-gray)] font-normal  w-2/3 xs:w-full text-start md:w-full">
        <p className="py-1">
          If this HTML renders correctly, I am a fairly good developer and
          problem solver.
        </p>
        <p className=" text-wrap  ">
          I&apos;m <BoldText>Gautam Kumar Pandey</BoldText>, a passionate{" "}
          <BoldText>Full Stack Developer & Mobile Developer </BoldText>
          from India. I love to build beautiful{" "}
          <BoldText>User Interfaces,Next Gen Websites</BoldText> and{" "}
          <BoldText>Mobile Apps</BoldText> that provide real value & interest to
          the end-user.
        </p>
        <p className="py-1">
          Looking forward to more <BoldText>freelance projects</BoldText>, and
          more opportunities in this sector.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
