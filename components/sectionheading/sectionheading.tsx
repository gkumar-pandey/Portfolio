import { SectionHeadingProps } from "@/types";
import { FC } from "react";

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return <h2 className="font-bold text-3xl xs:text-2xl border-b-2 border-[var(--primary-color)] uppercase text-white flex items-center gap-2 my-4" >{children}</h2>;
};

export default SectionHeading;
