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
      "A high-performance portfolio site designed to showcase my work through a clean and intuitive interface. Developed with Next.js, TypeScript, and Tailwind CSS, focusing on sleek aesthetics and optimal user experience.",
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
      "This portfolio is an ongoing project focused on clean code and intuitive UI. Developed with React and TypeScript, it emphasizes stability and developer experience, while SASS provides full control over the visual layer. It’s a transparent look into my development process, showcasing my commitment to modern web standards.",
    description: "React, TypeScript & SASS (Work in progress)",
    gitHubUrl: "https://github.com/WasiakKacper/Control",
    siteUrl: "",
  },
];
