"use client";
import Hero from "../components/hero/Hero";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import CustomCursor from "@/components/ui/CustomCursor";
import { CursorProvider } from "./context/CursorContext";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <CursorProvider>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <CustomCursor />
    </CursorProvider>
  );
}
