"use client";

import { motion } from "motion/react";
import { useCursor } from "@/app/context/CursorContext";

const About = () => {
  const { setCursorVariant } = useCursor();

  const aboutVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <section
        id="about"
        className="about-wrapper h-screen flex flex-col justify-center items-center gap-4"
      >
        <motion.h3>About me</motion.h3>
        <motion.h2
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-semibold text-center px-5"
        >
          WHO IS <span className="text-(--action)">THIS</span> GUY?
        </motion.h2>
        <motion.p
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xl text-left text-(--lighter) w-[80%] lg:w-[60%]"
        >
          I’m a web developer passionate about building fast, reliable, and
          user-friendly websites. I focus on creating solutions that not only
          look great but also deliver real value and seamless experiences for
          users.
        </motion.p>
      </section>
      <footer className="w-full text-center p-4">
        <motion.button
          style={{ color: "var(--action)" }}
          whileHover={{
            scale: 1.2,
          }}
          transition={{ duration: 0.1 }}
        >
          <a
            onMouseEnter={() => setCursorVariant("action")}
            onMouseLeave={() => setCursorVariant("default")}
            href="https://github.com/WasiakKacper"
            target="_blank"
          >
            check out my github
          </a>
        </motion.button>
      </footer>
    </>
  );
};

export default About;
