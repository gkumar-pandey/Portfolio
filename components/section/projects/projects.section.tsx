"use client"
import Container from "@/components/container/container.component";
import ProjectCard from "@/components/projectcard/projectcard.component";
import SectionHeading from "@/components/sectionheading/sectionheading";
import { projectsData } from "@/data/data";
import { useState } from "react";

export default function ProjectSection() {
  const [projectType, setProjectType] = useState('All');
  const projectTypes = ["All", "Frontend", "Backend", "Full Stack"];
  const handleProjectTabs = (value: string) => {
    setProjectType(value)
  }
  const projects = () => {
    let data = [...projectsData]

    if (projectType !== "All") {
      return data.filter((ele) => ele?.type?.toLowerCase() === projectType.toLowerCase())
    }
    return data;
  }



  return (
    <Container>
      <div id="projects" >
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div className="flex items-center my-1 gap-3  " >
        {projectTypes.map((ele, idx) => (
          <button onClick={() => handleProjectTabs(ele)} key={idx} className={projectType === ele ? `px-3 py-1 bg-white text-gray-900 rounded-md ` : `px-3 py-1 border rounded-md text-white`}>
            {ele}
          </button>
        ))}
      </div>
      <div className="py-4 grid grid-cols-3 gap-2 gap-y-4 xs:grid-cols-1 md:grid-cols-2">
        {projects().map((ele, idx) => (
          <div className="w-full" key={idx}>
            <ProjectCard {...ele} />
          </div>
        ))}
      </div>
    </Container>
  );
};
