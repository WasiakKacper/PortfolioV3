"use client";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useCursor } from "@/app/context/CursorContext";

type ProjectProps = {
  url: StaticImageData;
  name: string;
  description: string;
  click: () => void;
};

const Project: React.FC<ProjectProps> = ({ url, name, description, click }) => {
  //Set up for "deep" animation
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const translateValue = useTransform(scrollYProgress, [0, 1], [0, 300]);

  //Change cursor variant on mouse event
  const { setCursorVariant } = useCursor();

  const handleMouseEnter = () => {
    setCursorVariant("project");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  return (
    <>
      <article
        data-cursor="project"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={click}
        className="project bg-black relative w-full h-150 overflow-hidden flex flex-col justify-center"
      >
        <h3 className="z-10 text-5xl pl-10 font-semibold text-white ">
          {name}
        </h3>
        <p className="z-10 text-2xl pl-10 text-white ">{description}</p>
        <motion.div
          ref={scrollRef}
          style={{ opacity: opacityValue, translateY: translateValue }}
          className="absolute left-0 -top-[50%] w-full h-[120%]"
        >
          <Image
            preload={true}
            src={url}
            alt="portfolio"
            fill
            className="object-cover"
          />
        </motion.div>
      </article>
    </>
  );
};

export default Project;
