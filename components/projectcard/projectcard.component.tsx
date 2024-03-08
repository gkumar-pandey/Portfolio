import { ProjectCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../button/button.component";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  img,
  languages,
  liveLink,
  repoLink,
  title,
}) => {
  return (
    <div className=" rounded-xl shadow-lg max-w-[400px] bg-[#18181b] overflow-hidden w-full  h-full border border-[#3f3f4666] flex flex-col">
      <>
        <Image
          width={0}
          height={0}
          className="w-full h-[250px] object-cover"
          src={img}
          alt={title}
        />
      </>
      <div className="px-3 py-2 flex flex-col justify-between flex-1 ">
        <h2 className="text-2xl text-white font-semibold">{title}</h2>
        <div>
          <p className="text-start font-normal text-[var(--primary-gray)] line-clamp-4 ">
            {description}
          </p>
          <div className="flex items-center gap-1  flex-wrap py-2">
            {languages?.map((ele, idx) => (
              <button
                className="flex items-center justify-center text-white text-sm rounded-full bg-gray-900 font-medium py-1 px-4 "
                key={idx}
              >
                {ele}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 my-2">
          <Link href={repoLink}>
            <Button variant={'outlined'} rightIcon={<FaGithub/>} >
              Source
            </Button>

          </Link>
          <Link href={liveLink}>
            <Button variant={"solid"} rightIcon={<FaExternalLinkAlt />}>
              Live
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
