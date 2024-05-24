import { WorkExperienceProps } from "@/types";
import { FC } from "react";

const WorkExperienceCard: FC<WorkExperienceProps> = ({
  position,
  company,
  start_date,
  end_date,
  descriptions,
}) => {
  return (
    <div>
      <div className="text-white">
        <h3 className="text-2xl font-bold text-[var(--primary-color)] ">
          {position}
        </h3>
        <p className="font-semibold text-[--primary-gray]">
          {start_date} - {end_date}
        </p>
        <div>
          <p className="text-xl font-bold py-1">{company}</p>
          <ul className="list-disc px-5 text-[var(--primary-gray)]">
            {descriptions.map((ele, idx) => (
              <li key={idx}>{ele}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
