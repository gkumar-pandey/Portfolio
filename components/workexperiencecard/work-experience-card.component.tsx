import { WorkExperienceProps } from "@/types";
import Image from "next/image";
import { FC } from "react";

const WorkExperienceCard: FC<WorkExperienceProps> = ({
  position,
  company,
  start_date,
  end_date,
  descriptions,
  logo,
}) => {
  return (
    <>
      <div className="text-white py-3  ">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={24}
            height={24}
            className="rounded-full object-cover border border-[#9999]"
          />
          <h3 className="text-2xl font-bold text-[var(--primary-color)] ">
            {company}
          </h3>
        </div>
        <p className="font-semibold text-[--primary-gray]">
          {start_date} - {end_date}
        </p>
        <div>
          <p className="text-xl font-bold py-1">{position}</p>
          <ul className="list-disc px-5 text-[var(--primary-gray)]">
            {descriptions.map((ele, idx) => (
              <li key={idx}>{ele}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkExperienceCard;
