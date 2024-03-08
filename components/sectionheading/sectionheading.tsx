import { SectionHeadingProps } from "@/types";
import { FC } from "react";

export const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return <h2 className="font-bold text-3xl uppercase text-white flex items-center gap-2" >{children}</h2>;
};
