"use client";

import { IoHome, IoPersonCircleOutline } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaBriefcase, FaCode } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Deck = ({ isAtTop }: { isAtTop: boolean }) => {
  return (
    <AnimatePresence mode="wait">
      {!isAtTop && (
        <motion.div
          key="deck"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed rounded-4xl z-20 backdrop-blur-xs w-1/6 top-[90%] left-1/2 text-l -translate-x-1/2"
        >
          <div className="absolute z-10 w-full backdrop-blur-md opacity-10 h-full rounded-4xl bg-gradient-to-r from-[#f8f8f8] via-[#493971] to-[#000000]"></div>
          <div className="relative py-1 px-4 z-30 flex flex-row justify-between">
            <a
              href="#home"
              className="rounded-4xl p-4 ease-out text-color2 opacity-60 hover:opacity-80 transition-all hover:text-shadow hover:bg-white/5 duration-300"
            >
              <div className=" ">
                <IoHome />
              </div>
            </a>
            <a
              href="#work"
              className="rounded-4xl p-4 ease-out text-color2 opacity-60 hover:opacity-80 transition-all hover:text-shadow hover:bg-white/5 duration-300"
            >
              <div className="">
                <FaBriefcase />
              </div>
            </a>
            <a
              href="#projects"
              className="rounded-4xl p-4 ease-out text-color2 opacity-60 hover:opacity-80 transition-all hover:text-shadow hover:bg-white/5 duration-300"
            >
              <div className="">
                <FaCode />
              </div>
            </a>
            <a
              href="#contact"
              className="rounded-4xl p-4 ease-out text-color2 opacity-60 hover:opacity-80 transition-all hover:text-shadow hover:bg-white/5 duration-300"
            >
              <div className=" ">
                <BsFillPersonVcardFill />
              </div>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Deck;
