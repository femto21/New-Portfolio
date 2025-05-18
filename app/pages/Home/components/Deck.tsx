import { IoHome, IoPersonCircleOutline } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaBriefcase, FaCode } from "react-icons/fa";

const Deck = () => {
  return (
    <div className="fixed rounded-2xl z-20 w-1/6 top-[90%] left-1/2 text-xl -translate-x-1/2">
      <div className="absolute z-10 w-full opacity-80 h-full rounded-4xl bg-[#1c0f2f]"></div>
      <div className="relative py-2 px-4 z-30 flex flex-row justify-between">
        <div className="text-white p-2">
          <IoHome />
        </div>
        <div className="p-2">
          <FaBriefcase />
        </div>
        <div className="p-2">
          <FaCode />
        </div>
        <div className="p-2">
          <BsFillPersonVcardFill />
        </div>
      </div>
    </div>
  );
};
export default Deck;
