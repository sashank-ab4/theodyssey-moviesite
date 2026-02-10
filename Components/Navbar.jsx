import { TITLE_LOGO } from "../Utils/mockData";
import { LuMenu } from "react-icons/lu";

export default function Navbar({ onMenuClick }) {
  return (
    <>
      <header className="absolute top-8 left-3 right-8 z-50">
        <div className="flex items-center justify-between ">
          <img
            src={TITLE_LOGO}
            alt="Title"
            className="w-32 sm:w-48 transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          />
          <button
            onClick={onMenuClick}
            aria-label="Open-Menu"
            className=" text-[#6c86ab] cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 "
          >
            <LuMenu size={20} />
          </button>
        </div>
      </header>
    </>
  );
}
