"use client";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import NavBar from "../components/NavBar";
import { Spotlight } from "../ui/spotlight-new";
import { TracingBeam } from "../ui/tracing-beam";
import Deck from "../components/Deck";
import { useEffect, useState } from "react";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

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
      <NavBar />
      <Deck isAtTop={isAtTop} />

      <div className="m-auto overflow-hidden">
        <TracingBeam>
          <Hero isAtTop={isAtTop} />
          <About />
          <Experience />
          <Project />
          <Contact />
        </TracingBeam>
      </div>
      <footer className="mt-16">
        <Footer />
      </footer>
    </>
  );
};
export default HomePage;
