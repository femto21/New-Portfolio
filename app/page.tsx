import Experience from "./components/Home/Experience";
import Hero from "./components/Home/Hero";
import Projects from "./components/Home/Projects";
import NavBar from "./components/NavBar";

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="max-w-9/12 m-auto">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <footer></footer>
    </>
  );
};
export default HomePage;
