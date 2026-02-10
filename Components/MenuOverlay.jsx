import { useEffect } from "react";
import { MENU_BG_IMG } from "../Utils/mockData";
import { IoCloseOutline } from "react-icons/io5";

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
    <div className="fixed inset-0 z-[100]" onClick={onClose}>
      {/* Background image */}
      <img
        src={MENU_BG_IMG}
        alt="Menu Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Menu content */}
      <div
        className="relative z-20 h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-[#B89B5E]"
          aria-label="Close Menu"
        >
          <IoCloseOutline size={30} />
        </button>

        {/* Menu links */}
        <div className="flex flex-col gap-6 text-3xl font-roman tracking-[0.2em] text-[#6c86ab] text-center">
          {menuItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className=" relative  transition-colors duration-300 hover:text-[#b89b5e]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
