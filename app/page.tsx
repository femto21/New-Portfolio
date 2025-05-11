import Experience from "./components/Home/Experience";
import Hero from "./components/Home/Hero";
import Projects from "./components/Home/Projects";
import NavBar from "./components/NavBar";
import { Spotlight } from "./components/ui/spotlight-new";
import { TracingBeam } from "./components/ui/tracing-beam";

const HomePage = () => {
  return (
    <>
      <Spotlight duration={11} height={1200} />
      <header>
        <NavBar />
      </header>

      <main className=" m-auto overflow-hidden">
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
