import About from "./components/home/About";
import Hero from "./components/home/Hero";
import TechStack from "./components/home/TechStack";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero/>
      <About/>
      <TechStack/>
    </div>
  );
}
