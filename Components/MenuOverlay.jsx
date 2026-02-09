import { useEffect, useState } from "react";
import { MENU_BG_IMG } from "../Utils/mockData";
import { IoCloseOutline } from "react-icons/io5";

export default function MenuOverlay({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("cast");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const tabs = [
    { id: "cast", label: "Cast", content: "This is the Stellar Cast!" },
    { id: "crew", label: "Crew", content: "This is the Amazing Crew!" },
    {
      id: "gallery",
      label: "Gallery",
      content: "Images",
    },
  ];

  if (!isOpen) return null;

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    /* BACKDROP — only this closes menu */
    <div
      className={`fixed inset-0 z-100 transition-all duration-500 ease-out ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
      onClick={onClose}
    >
      {/* Background image */}
      <img
        src={MENU_BG_IMG}
        alt="Menu Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* MENU CONTENT — stop click propagation */}
      <div
        className="relative z-20 h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-12 text-center text-[#B89B5E]">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-8 right-8"
            aria-label="Close Menu"
          >
            <IoCloseOutline size={30} />
          </button>

          {/* Tabs */}
          <div className="flex flex-col gap-6 text-3xl font-roman tracking-[0.2em]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`transition ${
                  activeTab === tab.id
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="text-lg tracking-normal max-w-xl mx-auto">
            {activeContent}
          </div>
        </div>
      </div>
    </div>
  );
}
