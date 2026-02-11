import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TRAILER_ID } from "../Utils/mockData";

export default function Modal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Delay unmount for fade-out
  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-200 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      } bg-black/70 backdrop-blur-sm `}
      onClick={onClose}
    >
      <div
        className={`relative w-[90%] md:w-[80%] max-w-5xl aspect-video bg-black rounded-xl overflow-hidden  border border-[#6c86ab] shadow-[0_0_25px_rgba(108,134,171,0.35)] transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:opacity-70 transition"
        >
          <IoCloseOutline size={28} />
        </button>

        {/* Trailer */}
        <iframe
          src={`https://www.youtube.com/embed/${TRAILER_ID}?autoplay=1&mute=0&controls=1&rel=0`}
          className="w-full h-full"
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
