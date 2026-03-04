import { StaticImageData } from "next/image";

import PortfolioMockup from "../../../public/images/Portfolio_Mockup.jpg";
import ControlMockup from "../../../public/images/Control_Mockup.jpg";

interface ProjectData {
  id: number;
  name: string;
  url: StaticImageData;
  descriptionModal: string;
  description: string;
  gitHubUrl: string;
  siteUrl: string;
}

export const PROJECT_DATA: ProjectData[] = [
  {
    id: 0,
    name: "Portfolio",
    url: PortfolioMockup,
    descriptionModal:
      "This portfolio site was designed to showcase my work through a clean and intuitive interface. Built using Next.js, TypeScript, and Tailwind CSS, with a focus on elegance and an optimal user experience.",
    description: "Clean project showcase. Powered by Next.js",
    gitHubUrl: "https://github.com/WasiakKacper/PortfolioV3",
    siteUrl: "https://kacper-wasiak.netlify.app/",
  },
  /*  {
    id: 1,
    name: "Fabryka warzyw",
    url: Mockup2,
    descriptionModal: "Example text...",
    description: "Example text for description",
    gitHubUrl: "#",
    siteUrl: "#",
  }, */
  {
    id: 2,
    name: "Control",
    url: ControlMockup,
    descriptionModal:
      "Control is a work-in-progress project focused on clean code and an intuitive user interface. Built in React, TypeScript, and SASS, Control will be a task management application that will allow you to track your progress across several widgets.",
    description: "React, TypeScript & SASS (Work in progress)",
    gitHubUrl: "https://github.com/WasiakKacper/Control",
    siteUrl: "",
  },
];
