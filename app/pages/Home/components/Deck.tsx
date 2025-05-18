import { IoHome, IoPersonCircleOutline } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaBriefcase, FaCode } from "react-icons/fa";

const Deck = () => {
  return (
    <div className="fixed rounded-2xl z-5 backdrop-blur-md w-1/6 top-[90%] left-1/2 text-l -translate-x-1/2">
      <div className="absolute z-10 w-full backdrop-blur-md opacity-80 h-full rounded-4xl bg-[#1c0f2f]"></div>
      <div className="relative py-1 px-4 z-30 flex flex-row justify-between">
        <a href="#home">
          <div className="text-white rounded-4xl p-4 hover:bg-[#2d243a]">
            <IoHome />
          </div>
        </a>
        <a href="#work">
          <div className="text-white rounded-4xl p-4 hover:bg-[#2d243a]">
            <FaBriefcase />
          </div>
        </a>
        <a href="#projects">
          <div className="text-white rounded-4xl p-4 hover:bg-[#2d243a]">
            <FaCode />
          </div>
        </a>
        <a href="#contact">
          <div className="text-white rounded-4xl p-4 hover:bg-[#2d243a]">
            <BsFillPersonVcardFill />
          </div>
        </a>
      </div>
    </div>
  );
};
export default Deck;
