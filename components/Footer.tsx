import React from "react";
import Divider from "./Divider";
import { FaDiscord, FaGithubAlt, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Divider />
      <div className="w-full h-80">
        <div className="w-full flex flex-col items-center">
          <div className="mt-8 w-fit text-color1 text-4xl font-clashDisplay text-shadow">
            Arpit Gahlot
          </div>
          <div className="mt-8 text-sm w-[30vw] flex flex-row justify-between">
            <div>
              <a className="nav-color2 text-shadow-subtle" href="#home">
                Home
              </a>
            </div>
            <div>
              <a className="nav-color2 text-shadow-subtle" href="#about">
                About
              </a>
            </div>
            <div>
              <a className="nav-color2 text-shadow-subtle" href="#work">
                Work
              </a>
            </div>
            <div>
              <a className="nav-color2 text-shadow-subtle" href="#projects">
                Projects
              </a>
            </div>
            <div>
              <a className="nav-color2 text-shadow-subtle" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-row justify-between w-24 text-lg">
            <a
              href="http://www.discord.com/users/530748472278646805"
              rel="noopener"
              target="_blank"
              className="icon-shadow nav-color2 transition-all duration-300"
            >
              <FaDiscord />
            </a>

            <a
              href="https://github.com/femto21"
              rel="noopener"
              target="_blank"
              className="icon-shadow nav-color2 transition-all duration-300"
            >
              <FaGithubAlt />
            </a>
            <a
              href="https://www.linkedin.com/in/arpitgahlot/"
              rel="noopener"
              target="_blank"
              className="icon-shadow nav-color2 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="mt-8 text-xs">
            Copyright © Arpit Gahlot. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
