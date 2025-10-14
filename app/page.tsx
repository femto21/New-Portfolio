"use client";
import Experience from "./pages/Home/sections/Experience";
import Hero from "./pages/Home/sections/Hero";
import Project from "./pages/Home/sections/Project";
import NavBar from "./pages/NavBar";
import { Spotlight } from "../ui/spotlight-new";
import { TracingBeam } from "../ui/tracing-beam";
import Deck from "./pages/Home/components/Deck";
import { useEffect, useState } from "react";
import Contact from "./pages/Home/sections/Contact";
import About from "./pages/Home/sections/About";

const HomePage = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
      console.log("is at top", isAtTop);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Spotlight duration={11} height={1200} />
      <header>
        <NavBar />
        <Deck isAtTop={isAtTop} />
      </header>

      <div className="m-auto overflow-hidden">
        <TracingBeam>
          <Hero isAtTop={isAtTop} />
          <About />
          <Experience />
          <Project />
          <Contact />
        </TracingBeam>
      </div>
      <footer></footer>
    </>
  );
};
export default HomePage;
