import About from "./components/home/About";
import Hero from "./components/home/Hero";
import TechStack from "./components/home/TechStack";
import Projects from "./components/home/Projects";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero/>
      <About/>
      <TechStack/>
      <Projects/>
    </div>
  );
}
