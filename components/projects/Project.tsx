"use client";

type ProjectProps = {
  url: StaticImageData;
};

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Project: React.FC<ProjectProps> = ({ url }) => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const translateValue = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <article className="project bg-black relative w-full h-150 overflow-hidden flex flex-col justify-center">
      <h3 className="z-10 text-5xl pl-10 font-semibold text-white ">PROJECT</h3>
      <p className="z-10 text-2xl pl-10 text-white ">
        Example description text.
      </p>
      <motion.div
        ref={scrollRef}
        style={{ opacity: opacityValue, translateY: translateValue }}
        className="absolute left-0 -top-[50%] w-full h-[120%]"
      >
        <Image src={url} alt="portfolio" fill className="object-cover" />
      </motion.div>
    </article>
  );
};

export default Project;
