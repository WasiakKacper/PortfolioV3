import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface ProjectData {
  name: string;
  url: StaticImageData;
  descriptionModal: string;
  gitHubUrl: string;
  siteUrl: string;
}

type ProjectOverviewProps = {
  project: ProjectData | null;
  onClose: () => void;
};

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  const variants = {
    initial: { scale: 0.9, opacity: 0, x: "-50%", y: "-50%" },
    animate: { scale: 1, opacity: 1, x: "-50%", y: "-50%" },
    exit: { scale: 0.8, opacity: 0, x: "-50%", y: "-50%" },
  };

  return (
    <motion.dialog
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      open={!!project}
      className="w-[90vw] h-[90vh] bg-black z-20 fixed top-[50%] left-[50%] rounded-xl"
    >
      <article className="relative w-full h-full p-4 flex flex-col justify-between">
        <Image
          preload={true}
          src={project.url}
          alt="portfolio"
          fill
          className="absolute object-cover rounded-xl opacity-50 -z-1 pointer-events-none"
        />
        <header className="flex justify-between">
          <h2 className="text-3xl font-bold text-white">
            {project.name.toUpperCase()}
          </h2>
          <button
            className="text-3xl font-bold text-white"
            aria-label="close"
            onClick={onClose}
          >
            X
          </button>
        </header>
        <section className="flex flex-col lg:flex-row justify-between w-full h-[40%] *:text-white">
          <p className="text-2xl lg:w-[50%] p-5">{project.descriptionModal}</p>
          <nav className="flex w-full lg:w-[50%] justify-end items-end gap-10 font-semibold">
            <a
              href={project.gitHubUrl}
              className="bg-(--action) w-[90%] lg:w-[25%] p-2 text-center text-2xl rounded-sm"
            >
              GITHUB
            </a>
            {project.siteUrl != "" ? (
              <a
                href={project.siteUrl}
                className="bg-(--action) w-[90%] lg:w-[25%] p-2 text-center text-2xl rounded-sm"
              >
                SITE
              </a>
            ) : (
              <></>
            )}
          </nav>
        </section>
      </article>
    </motion.dialog>
  );
};

export default ProjectOverview;
