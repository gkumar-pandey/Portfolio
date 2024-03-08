"use client"
import { Container } from "@/components";
import { ProjectCard } from "@/components/projectcard/projectcard.component";
import { SectionHeading } from "@/components/sectionheading/sectionheading";
import { projectsData } from "@/data/data";
import { useState } from "react";

export const ProjectSection = () => {
  const [projectType,setProjectType] = useState('');
  const projectTypes = ["All", "Frontend", "Backend", "Full Stack"];
  const handleProjectTabs = (value:string)=>{
    setProjectType(value)
  }
  const projects = ()=>{
    let data = [...projectsData]

    if(projectType !=="All" && projectType !==''){
      return data.filter((ele)=>ele?.type?.toLowerCase() === projectType.toLowerCase())
    }
    return data;
  }
  return (
    <Container>
      <div>
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div className="flex items-center my-1 gap-3" >
        {projectTypes.map((ele, idx) => (
          <button onClick={()=>handleProjectTabs(ele)} key={idx} className="px-3 py-1 border rounded-md text-white ">
            {ele}
          </button>
        ))}
      </div>
      <div className="py-4 grid grid-cols-3 gap-2  ">
        {projects().map((ele, idx) => (
          <div className="w-full" key={idx}>
            <ProjectCard {...ele} />
          </div>
        ))}
      </div>
    </Container>
  );
};
