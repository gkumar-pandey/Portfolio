import { SkillIconProps } from "@/types";
import Image from "next/image";
import { FC } from "react";

export const SkillIcon: FC<SkillIconProps> = ({ icon, skill }) => {
  return (
    <div className="flex flex-col items-center justify-center p-1 ">
      <Image
        height={50}
        width={50}
        alt={`${skill} icon`}
        className="shadow-lg "
        src={icon}
      />
      <p className="text-sm font-light text-white py-1">{skill}</p>
    </div>
  );
};
