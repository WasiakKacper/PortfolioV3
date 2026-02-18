import { StaticImageData } from "next/image";

import Mockup1 from "../../../public/images/MacBook_Mockup_1.jpg";
import Mockup2 from "../../../public/images/MacBook_Mockup_2.jpg";

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
    url: Mockup1,
    descriptionModal:
      "Example text for description which should tell us whats is that site is and how works",
    description: "Example text for description",
    gitHubUrl: "#",
    siteUrl: "#",
  },
  {
    id: 1,
    name: "Fabryka warzyw",
    url: Mockup2,
    descriptionModal: "Example text...",
    description: "Example text for description",
    gitHubUrl: "#",
    siteUrl: "#",
  },
  {
    id: 2,
    name: "Control",
    url: Mockup1,
    descriptionModal: "Example text...",
    description: "Example text for description",
    gitHubUrl: "#",
    siteUrl: "#",
  },
];
