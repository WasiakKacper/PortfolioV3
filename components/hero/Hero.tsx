"use client";

import Header from "../ui/Header";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative hero-wrapper">
      <Header />
      <article className="hero-content mt-35 tracking-tighter lg:overflow-hidden">
        <motion.h1
          initial={{ transform: "translateY(150px)" }}
          whileInView={{ transform: "translateY(0px)" }}
          transition={{ duration: 0.4 }}
          className="title font-semibold text-5xl lg:text-9xl text-nowrap -translate-x-14"
        >
          CREATE <span className="text-(--action)">WEBSITES</span> FROM
          PASSIONION CREATE WEBSITES FROM PASSION
        </motion.h1>
        <motion.h1
          initial={{ transform: "translateY(150px)" }}
          whileInView={{ transform: "translateY(0px)" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="title font-semibold text-5xl lg:text-9xl text-nowrap -translate-x-[50vw]"
        >
          CREATE WEBSITES FROM PASSIONION CREATE WEBSITES FROM PASSION
        </motion.h1>
        <motion.h4
          initial={{ transform: "translateY(100px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="subtitle text-2xl w-full text-right pr-3"
        >
          web developer
        </motion.h4>
      </article>
    </section>
  );
};

export default Hero;
