"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useCursor } from "@/app/context/CursorContext";

const CustomCursor = () => {
  const { cursorVariant } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    project: {
      x: mousePosition.x - 60,
      y: mousePosition.y - 25,
      width: 120,
      height: 50,
    },
    action: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      width: 50,
      height: 50,
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className={`fixed z-1000 pointer-events-none bg-black/50 flex items-center justify-center border-black text-white  top-0 left-0 w-10 h-10 ${cursorVariant === "default" || cursorVariant === "action" ? "rounded-full" : "rounded-lg"} `}
    >
      {cursorVariant === "project" && "VIEW PROJECT"}
    </motion.div>
  );
};

export default CustomCursor;
