import Experience from "./pages/Home/sections/Experience";
import Hero from "./pages/Home/sections/Hero";
import Project from "./pages/Home/sections/Project";
import NavBar from "./pages/NavBar";
import { Spotlight } from "../ui/spotlight-new";
import { TracingBeam } from "../ui/tracing-beam";

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
          <Project />
        </TracingBeam>
      </main>
      <footer></footer>
    </>
  );
};
export default HomePage;
