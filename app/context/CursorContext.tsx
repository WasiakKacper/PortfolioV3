"use client";

import { createContext, useContext, useState } from "react";

type CursorVariant = "none" | "default" | "project" | "action";

type CursorContextType = {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

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
