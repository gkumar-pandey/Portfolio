import { ProjectCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Button from "../button/button.component";

const ProjectCard: FC<ProjectCardProps> = ({
  description,
  img,
  languages,
  liveLink,
  repoLink,
  title,
}) => {
  return (
    <div className=" rounded-md shadow-lg max-w-[400px] bg-[#18181b] overflow-hidden p-2 w-full  h-full border border-[#3f3f4666] flex flex-col">
      <>
        <Image
          width={0}
          height={0}
          className="w-full h-[250px] object-cover rounded-md"
          src={img}
          alt={title}
        />
      </>
      <div className="px-2 flex flex-col justify-between flex-1 ">
        <div>
          <h2 className="text-xl py-2 text-start text-white font-semibold">{title}</h2>
          <p className="text-start font-normal text-[var(--primary-gray)] line-clamp-3">
            {description}
          </p>
          <div className="flex items-center gap-1 flex-wrap py-2">
            {languages?.map((ele, idx) => (
              <button
                className="flex items-center justify-center text-white text-xs rounded-full bg-gray-700 font-semibold py-1 px-4 "
                key={idx}
              >
                {ele}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4  py-2">
          <Link target="_blank" href={repoLink}>
            <Button variant={'outlined'} rightIcon={<FaGithub />} >
              Source
            </Button>
          </Link>
          <Link target="_blank" href={liveLink}>
            <Button variant={"solid"} rightIcon={<FaExternalLinkAlt />}>
              Live
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard