import Experience from "./components/Home/Experience";
import Hero from "./components/Home/Hero";
import Projects from "./components/Home/Projects";
import NavBar from "./components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
    </>
  );
};
export default HomePage;
