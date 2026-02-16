"use client";
import Hero from "../components/hero/Hero";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import CustomCursor from "@/components/ui/CustomCursor";
import { CursorProvider } from "./context/CursorContext";
import { Element } from "react-scroll";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <CursorProvider>
      <Header />
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
