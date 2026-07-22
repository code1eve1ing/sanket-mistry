import About from "./components/home/About";
import Hero from "./components/home/Hero";
import TechStack from "./components/home/TechStack";
import Projects from "./components/home/Projects";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Experience from "./components/home/Experience";
import Contact from "./components/home/Contact";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}
