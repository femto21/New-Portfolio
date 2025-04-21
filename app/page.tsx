import Experience from "./components/Home/Experience";
import Hero from "./components/Home/Hero";
import Projects from "./components/Home/Projects";
import NavBar from "./components/NavBar";
import { TracingBeam } from "./components/ui/tracing-beam";

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="max-w-9/12 m-auto">
        <TracingBeam>
          <Hero />
          <Experience />
          <Projects />
        </TracingBeam>
      </main>
      <footer></footer>
    </>
  );
};
export default HomePage;
