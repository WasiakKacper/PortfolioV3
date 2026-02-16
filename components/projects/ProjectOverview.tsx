type ProjectOverviewProps = {
  name: string;
  url: StaticImageData;
  description: string;
  gitHubUrl: string;
  siteUrl: string;
  isModalOpen: boolean;
};

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  name,
  url,
  description,
  gitHubUrl,
  siteUrl,
  isModalOpen,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { scale: 1 },
    closed: { scale: 0 },
  };

  return (
    <motion.dialog
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      open={isOpen}
      className="w-[90vw] h-[90vh] bg-black z-20 fixed top-[50%] left-[50%] -translate-[50%] rounded-xl"
    >
      <article className="relative w-full h-full p-4 flex flex-col justify-between">
        <Image
          preload={true}
          src={url}
          alt="portfolio"
          fill
          className="absolute object-cover rounded-xl opacity-50 -z-1 pointer-events-none"
        />
        <header className="flex justify-between">
          <h2 className="text-3xl font-bold text-white">
            {name.toUpperCase()}
          </h2>
          <button
            className="text-3xl font-bold text-white"
            aria-label="close"
            onClick={handleCloseModal}
          >
            X
          </button>
        </header>
        <section className="flex flex-col lg:flex-row justify-between w-full h-[40%] *:text-white">
          <p className="text-2xl w-[50%]">{description}</p>
          <nav className="flex w-full lg:w-[50%] justify-center items-center gap-10">
            <a
              href={gitHubUrl}
              className="bg-(--action) w-[90%] lg:w-[25%] p-2 text-center text-2xl rounded-xl"
            >
              GITHUB
            </a>
            <a
              href={siteUrl}
              className="bg-(--action) w-[90%] lg:w-[25%] p-2 text-center text-2xl rounded-xl"
            >
              SITE
            </a>
          </nav>
        </section>
      </article>
    </motion.dialog>
  );
};

export default ProjectOverview;
