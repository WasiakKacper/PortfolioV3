"use client";
import { useState } from "react";
import { motion, Variants } from "motion/react";
import { useCursor } from "@/app/context/CursorContext";
import { Link } from "react-scroll";

interface NavLink {
  id: string;
  label: string;
  delay: number;
}

const NAV_LINKS: NavLink[] = [
  {
    id: "home",
    label: "HOME",
    delay: 0.11,
  },
  {
    id: "projects",
    label: "PROJECTS",
    delay: 0.14,
  },
  {
    id: "about",
    label: "ABOUT",
    delay: 0.16,
  },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  //Function that change activity state
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  //Function for changeing cursor variants
  const { setCursorVariant } = useCursor();

  //Declare variants for animations
  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
  };

  const linksVariants: Variants = {
    hidden: { x: 50 },
    visible: (i: number) => ({
      x: 0,
      transition: { duration: 0.3, delay: i },
    }),
  };

  return (
    <header className="hero-header p-3 flex items-center justify-between relative">
      <motion.h3
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="logo font-semibold text-2xl tracking-wider"
      >
        KACPERWASIAK
      </motion.h3>
      <motion.button
        data-cursor="action"
        onMouseEnter={() => setCursorVariant("action")}
        onMouseLeave={() => setCursorVariant("default")}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        onClick={handleToggle}
        className={`
    menu-hamburger w-8 h-7 flex flex-col justify-around cursor-pointer
    z-1000
    ${isActive ? "fixed top-4 right-4" : "relative"}
  `}
      >
        <span
          className={`line w-full bg-black h-1 transition-all origin-center ${isActive ? " -rotate-45 translate-y-1.75 bg-white" : ""}`}
        ></span>
        <span
          className={`line bg-black w-full h-1 transition-all origin-center ${isActive ? " rotate-45 -translate-y-1.75 bg-white" : ""}`}
        ></span>
      </motion.button>
      <nav
        className={`fixed top-0 right-0 w-[80%] lg:w-[50%] h-screen
                    bg-(--action) transition-transform duration-300 z-100
                  ${isActive ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="p-5 w-full h-full text-5xl text-white font-semibold flex flex-col justify-center gap-10 *:cursor-pointer *:w-auto *:hover:text-(--foreground) *:transition-colors">
          {NAV_LINKS.map((link) => (
            <motion.li
              key={link.id}
              custom={link.delay}
              variants={linksVariants}
              initial="hidden"
              whileInView="visible"
              className="cursor-pointer hover:text-(--foreground) transition-colors w-fit"
            >
              <Link to={link.id} onClick={handleToggle}>
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
