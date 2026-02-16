import { TITLE_LOGO } from "../Utils/mockData";
import { LuMenu } from "react-icons/lu";

export default function Navbar({ onMenuClick }) {
  return (
    <>
      <header className="absolute top-12 left-7 right-8 z-50">
        <div className="flex items-center justify-between px-3 ">
          <div
            className="
      whitespace-nowrap
      text-[#B89B5E]
      md:text-[#6c86ab]
      sm:text-[#0b0037]
      text-base sm:text-lg md:text-xl
      uppercase
      tracking-[0.25rem]
      font-mont
      transition-transform duration-300
      hover:scale-105 active:scale-95
      cursor-pointer
       font-bold
    "
          >
            The Odyssey
          </div>

          {/*  <img
            src={TITLE_LOGO}
            alt="Title"
            className="w-32 sm:w-48 transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer "
          /> */}
          <button
            onClick={onMenuClick}
            aria-label="Open-Menu"
            className=" text-[#B89B5E]
      md:text-[#6c86ab]
      sm:text-[#0b0037]
      transition-transform duration-300
      hover:scale-105 active:scale-95 cursor-pointer"
          >
            <LuMenu size={22} />
          </button>
        </div>
      </header>
    </>
  );
}
