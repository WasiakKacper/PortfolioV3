"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useCursor } from "@/app/context/CursorContext";

const CustomCursor = () => {
  const { cursorVariant } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  //Update mouse position while moving
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    none: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 0,
    },
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      mixBlendMode: "normal",
      backdropFilter: "blur(5px)",
      WebkitBackdropFilter: "blur(5px)",
    },
    project: {
      x: mousePosition.x - 60,
      y: mousePosition.y - 25,
      width: 120,
      height: 50,
      mixBlendMode: "normal",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    },
    action: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: 70,
      height: 70,
      mixBlendMode: "normal",
      backdropFilter: "blur(5px)",
      WebkitBackdropFilter: "blur(5px)",
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className={`fixed z-1000 pointer-events-none bg-black/30 hidden lg:flex items-center justify-center border-black text-white top-0 left-0 w-10 h-10 text-nowrap ${cursorVariant === "project" ? "rounded-lg" : "rounded-full"} `}
    >
      {cursorVariant === "project" && "VIEW PROJECT"}
    </motion.div>
  );
};

export default CustomCursor;
