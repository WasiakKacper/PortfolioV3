"use client";

import Header from "../ui/Header";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="hero-wrapper h-[90vh]">
      <Header />
      <article className="hero-content w-auto h-[90%] min-h-20 tracking-tighter flex flex-col justify-center">
        <motion.h1
          initial={{ transform: "translateY(100px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="title font-semibold text-5xl text-center"
        >
          I BUILD <span className="text-(--action)">WEBSITES</span> THAT WORK
        </motion.h1>
        <motion.h4
          initial={{ transform: "translateY(100px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="subtitle text-0.5xl text-center text(--lighter) p-3"
        >
          DESIGNED AND BUILT BY ONE DEVELOPER, FROM START TO FINISH
        </motion.h4>
      </article>
    </section>
  );
};

export default Hero;
