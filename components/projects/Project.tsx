"use client";

type ProjectProps = {
  url: StaticImageData;
  name: string;
  description: string;
  click: () => void;
};

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useCursor } from "@/app/context/CursorContext";

const Project: React.FC<ProjectProps> = ({ url, name, description, click }) => {
  const { setCursorVariant } = useCursor();
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const translateValue = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <>
      <motion.article
        onMouseEnter={() => setCursorVariant("project")}
        onMouseLeave={() => setCursorVariant("default")}
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
      </motion.article>
    </>
  );
};

export default Project;
