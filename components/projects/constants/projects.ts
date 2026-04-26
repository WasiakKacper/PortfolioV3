import { StaticImageData } from "next/image";

import PortfolioMockup from "@/assets/images/Portfolio_Mockup.jpg";
import ControlMockup from "@/assets/images/Control_Mockup.jpg";
import FabrykaWarzyw from "@/assets/images/FabrykaWarzyw_Mockup_3.jpg";

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
  {
    id: 1,
    name: "Fabryka warzyw",
    url: FabrykaWarzyw,
    descriptionModal:
      "Custom e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Designed with a focus on performance, scalability, and a minimalist user interface to drive engagement and simplify the checkout experience.",
    description:
      "Modern retail experience showcase. Built with React & Tailwind",
    gitHubUrl: "https://github.com/WasiakKacper/Fabryka_Warzywa_OnePage",
    siteUrl: "https://fabrykawarzyw.pl/",
  },
  {
    id: 2,
    name: "Control",
    url: ControlMockup,
    descriptionModal:
      "Control is a work-in-progress project focused on clean code and an intuitive user interface. Built in React, TypeScript, and SASS, Control will be a task management application that will allow you to track your progress across several widgets.",
    description: "React, TypeScript & SASS (Work in progress)",
    gitHubUrl: "https://github.com/WasiakKacper/Control",
    siteUrl: "https://control-trackers.netlify.app/",
  },
];
