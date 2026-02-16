"use client";
import Mockup1 from "../../public/images/MacBook_Mockup_1.jpg";
import Mockup2 from "../../public/images/MacBook_Mockup_2.jpg";
import Project from "./Project";
import ProjectOverview from "./ProjectOverview";
import { useState } from "react";

const ProjectsData = [
  {
    name: "Portfolio",
    url: Mockup1,
    description: "Example text...",
    gitHubUrl: "#",
    siteUrl: "#",
  },
  {
    name: "Fabryka warzyw",
    url: Mockup1,
    description: "Example text...",
    gitHubUrl: "#",
    siteUrl: "#",
  },
  {
    name: "Control",
    url: Mockup1,
    description: "Example text...",
    gitHubUrl: "#",
    siteUrl: "#",
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSelectProject = (index: number) => {
    setSelectedProject(index);
  };

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ProjectOverview
        name={ProjectsData[selectedProject].name}
        url={ProjectsData[selectedProject].url}
        description={ProjectsData[selectedProject].description}
        gitHubUrl={ProjectsData[selectedProject].gitHubUrl}
        siteUrl={ProjectsData[selectedProject].siteUrl}
        isModalOpen={isModalOpen}
      />
      <section className="project-wrapper w-full h-auto block">
        <Project
          name="PORTFOLIO"
          description="Example text for description"
          url={Mockup1}
          click={() => {
            handleSelectProject(0);
            handleOpenModal();
          }}
        />
        <Project
          name="FABRYKA WARZYW"
          description="Example text for description"
          url={Mockup2}
          click={() => {
            handleSelectProject(1);
            handleOpenModal();
          }}
        />
        <Project
          name="CONTROL"
          description="Example text for description"
          url={Mockup1}
          click={() => {
            handleSelectProject(2);
            handleOpenModal();
          }}
        />
      </section>
    </>
  );
};

export default Projects;
