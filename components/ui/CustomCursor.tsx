"use client";
import { motion, useSpring, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { useCursor } from "@/app/context/CursorContext";

const CustomCursor = () => {
  //Setting up cursor movment
  const { cursorVariant } = useCursor();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  //Update mouse position while moving
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [mouseX, mouseY]);

  //Variants for hover effects
  const variants = {
    default: {
      width: 32,
      height: 32,
      borderRadius: "50%",
    },
    project: {
      width: 120,
      height: 50,
      borderRadius: "8px",
    },
    action: {
      width: 40,
      height: 40,
      borderRadius: "50%",
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className="fixed top-0 left-0 z-1000 pointer-events-none hidden lg:flex items-center justify-center bg-black/30 text-white text-[11px] font-bold backdrop-blur-sm border border-white/10"
      style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
    >
      {cursorVariant === "project" && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-nowrap"
        >
          VIEW PROJECT
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
