import { SkillIconProps } from "@/types";
import { FC } from "react";

export const SkillIcon: FC<SkillIconProps> = ({ icon, skill }) => {
  return (
    <div className="flex flex-col items-center justify-center p-1 ">
      <img
        alt={`${skill} icon`}
        className="shadow-lg"
        src={`https://skillicons.dev/icons?i=${icon}`}
      />
      <p className="text-sm font-light text-white py-1">{skill}</p>
    </div>
  );
};
