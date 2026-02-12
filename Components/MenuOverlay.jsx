import { useEffect } from "react";
/* import menuImg from "../assets/menuImg.jpg";
 */
import { IoCloseOutline } from "react-icons/io5";
import { MENU_BG_IMG } from "../Utils/mockData";
import SocialMediaHnadles from "./SocialMediaHnadles";

export default function MenuOverlay({ onClose, onNavigate }) {
  // Lock body scroll while menu page is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const menuItems = [
    { label: "Cast", view: "cast" },
    { label: "Crew", view: "crew" },
    { label: "Synopis", view: "synopsis" },
    { label: "Gallery", view: "gallery" },
  ];

  return (
    <div
      className="fixed inset-0 z-100 transform transition-all duration-500 ease-out"
      onClick={onClose}
    >
      <img
        src="/menuImg.jpg"
        alt="Menu Background"
        className="
      absolute inset-0
      w-full h-full
      object-cover
      
      z-0
    "
      />

      {/* Dark overlay */}
      {/*       <div className="absolute inset-0 bg-black/60 z-10" />
       */}
      {/* Decorative title image (top center, subtle) */}
      <div className="absolute inset-0 z-20 flex items-start justify-center pt-24 pointer-events-none">
        <img
          src={MENU_BG_IMG}
          alt="Title-Date"
          className="
        w-40 sm:w-54 md:w-60
        object-contain
        opacity-90
        
      "
        />
      </div>

      <button
        onClick={onClose}
        className="
      fixed top-12 right-9
      z-40
      text-[#B89B5E]
      hover:opacity-80
      transition cursor-pointer
    "
        aria-label="Close Menu"
      >
        <IoCloseOutline size={30} />
      </button>

      <div
        className="relative z-30 h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-10 text-center">
          {menuItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className=" cursor-pointer
            font-roman
            uppercase
            tracking-[0.35em]
            text-2xl md:text-3xl
            text-[#b89b5e]
            hover:text-[#e7cc65]
            transition-all duration-300 ease-out
            hover:-translate-y-1
    hover:drop-shadow-[0_0_12px_rgba(231,204,101,0.4)]
          "
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-12 left-0 w-full flex justify-center z-30 text-[#b89b5e]
            transition-colors duration-300 
           "
      >
        <SocialMediaHnadles className="text-lg gap-10" />
      </div>
    </div>
  );
}
