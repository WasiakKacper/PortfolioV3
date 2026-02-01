import Hero from "../components/hero/Hero";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import CustomCursor from "@/components/ui/CustomCursor";
import { CursorProvider } from "./context/CursorContext";

export default function Home() {
  return (
    <CursorProvider>
      <CustomCursor />
      <Hero />
      <Projects />
      <About />
    </CursorProvider>
  );
}
