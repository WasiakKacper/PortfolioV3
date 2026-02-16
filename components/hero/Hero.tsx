"use client";
import { motion, Variants } from "motion/react";
import { useCursor } from "@/app/context/CursorContext";

const Hero = () => {
  const { setCursorVariant } = useCursor();

  const heroVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="hero-wrapper h-[90vh]">
      <article className="hero-content bg-white w-auto h-[90%] min-h-20 tracking-tighter flex flex-col justify-center">
        <motion.h1
          onMouseEnter={() => setCursorVariant("action")}
          onMouseLeave={() => setCursorVariant("default")}
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="title font-semibold text-5xl lg:text-9xl text-center"
        >
          I BUILD <span className="text-(--action)">WEBSITES</span> THAT WORK
        </motion.h1>
        <motion.h4
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.15 }}
          className="subtitle text-md text-center text(--lighter) p-3"
        >
          DESIGNED AND BUILT BY ONE DEVELOPER, FROM START TO FINISH
        </motion.h4>
      </article>
    </section>
  );
};

export default Hero;
