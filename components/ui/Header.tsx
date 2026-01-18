"use client";
import { useState } from "react";
import { motion } from "motion/react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const hadleActivityToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="hero-header p-3 flex items-center justify-between relative">
      <motion.h3
        initial={{ transform: "translateY(-100px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="logo font-semibold text-2xl tracking-wider"
      >
        KACPERWASIAK
      </motion.h3>
      <motion.button
        initial={{ transform: "translateY(-100px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        onClick={hadleActivityToggle}
        className="menu-hamburger w-8 h-7 flex flex-col justify-around cursor-pointer z-1000"
      >
        <span
          className={`line bg-black w-full h-1 transition-all origin-center ${isActive ? " -rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`line bg-black w-full h-1 transition-all origin-center ${isActive ? " rotate-45 -translate-y-2" : ""}`}
        ></span>
      </motion.button>
      <nav
        className={`fixed top-0 right-0 w-[80%] lg:w-[50%] h-screen
                    bg-(--action) transition-transform duration-300 z-100
                  ${isActive ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="p-5 w-full h-full text-5xl font-semibold flex flex-col justify-center gap-10 *:cursor-pointer *:w-auto *:hover:text-white">
          <li>HOME</li>
          <li>PROJECTS</li>
          <li>ABOUT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
