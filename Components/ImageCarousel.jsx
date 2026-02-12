import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
export default function ImageCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!images.length) return null;

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSelected = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div
      className="
        relative w-full
        max-w-6xl mx-auto
        overflow-hidden
        rounded-xl sm:rounded-2xl
        border border-transparent
        hover:border-[#b89b5e]
        shadow-xl sm:shadow-2xl
        transition-all duration-300
      "
    >
      {/* Image Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/original${img.file_path}`}
            alt="Backdrop"
            className="
              w-full shrink-0
              object-cover
              aspect-[16/9]
              sm:aspect-video
              transition-transform duration-700
              hover:scale-105
            "
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      <button
        onClick={previousSlide}
        className="
          absolute left-2 sm:left-4
          top-1/2 -translate-y-1/2
          bg-black/50 backdrop-blur-sm
          p-2 sm:p-3
          rounded-full
          text-white
          hover:bg-black/70
          transition
        "
      >
        <IoChevronBack size={18} className="sm:w-[22px] sm:h-[22px]" />
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute right-2 sm:right-4
          top-1/2 -translate-y-1/2
          bg-black/50 backdrop-blur-sm
          p-2 sm:p-3
          rounded-full
          text-white
          hover:bg-black/70
          transition
        "
      >
        <IoChevronForward size={18} className="sm:w-[22px] sm:h-[22px]" />
      </button>

      <div className="absolute bottom-3 sm:bottom-5 left-0 w-full flex justify-center gap-2 sm:gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSelected(index)}
            className={`
              h-2 rounded-full
              transition-all duration-300
              ${
                currentIndex === index
                  ? "w-6 sm:w-8 bg-[#b89b5e]"
                  : "w-2 bg-white/40"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
