"use client";
import Mockup1 from "../../public/images/MacBook_Mockup_1.jpg";
import Mockup2 from "../../public/images/MacBook_Mockup_2.jpg";
import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <section className="project-wrapper w-full h-auto block">
      <Project url={Mockup1} />
      <Project url={Mockup2} />
      <Project url={Mockup1} />
    </section>
  );
};

export default Projects;
