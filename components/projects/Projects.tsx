"use client";

import Project from "./Project";
import ProjectOverview from "./ProjectOverview";
import { PROJECT_DATA } from "./constants/projects";

import { useState, useMemo } from "react";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  const activeProject = useMemo(
    () => PROJECT_DATA.find((p) => p.id === selectedProjectId) || null,
    [selectedProjectId],
  );

  const handleSelect = (index: number | null) => {
    setSelectedProjectId(index);
  };

  return (
    <>
      {activeProject && (
        <ProjectOverview
          project={activeProject}
          onClose={() => handleSelect(null)}
        />
      )}
      <section className="project-wrapper w-full h-auto block">
        {PROJECT_DATA.map((project) => (
          <Project
            key={project.id}
            name={project.name.toUpperCase()}
            description={project.description}
            url={project.url}
            click={() => {
              handleSelect(project.id);
            }}
          />
        ))}
      </section>
    </>
  );
};

export default Projects;
