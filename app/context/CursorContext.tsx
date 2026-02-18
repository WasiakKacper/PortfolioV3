"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";

type CursorVariant = "none" | "default" | "project" | "action";

type CursorContextType = {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const checkElementUnderCursor = () => {
      const el = document.elementFromPoint(
        mousePos.current.x,
        mousePos.current.y,
      );

      const target = el?.closest("[data-cursor]");
      const variant = target?.getAttribute("data-cursor") as CursorVariant;

      if (variant) {
        setCursorVariant(variant);
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("scroll", checkElementUnderCursor, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("scroll", checkElementUnderCursor);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within CursorProvider");
  }
  return context;
};
