import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
export default function Banner({ heroRef }) {
  const [showAfterDelay, setShowAfterDelay] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  // ⏳ Show after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAfterDelay(true);
    }, 2000);
    const hide = setTimeout(() => {
      setShowAfterDelay(false);
    }, 60 * 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, []);

  // hero visibility
  useEffect(() => {
    if (!heroRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% visible counts as visible
      },
    );

    observer.observe(heroRef.current);

    return () => {
      observer.disconnect();
    };
  }, [heroRef]);

  const visible = showAfterDelay && isHeroVisible && !dismissed;
  if (!visible) return null;
  return (
    <div
      className={`
    fixed top-0 left-0 w-full z-40
    transform transition-all duration-500 ease-out
    ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
  `}
    >
      <div
        className="
        
      relative w-full
      bg-black/80 backdrop-blur-sm
      text-[#6c86ab]
      text-[11px] sm:text-xs md:text-sm
      uppercase tracking-[0.2em] sm:tracking-widest
      px-4 sm:px-6 md:px-8
      py-2 sm:py-3 md:py-4
      text-center
      border-b border-[#b89b5e]/40
      shadow-[0_0_25px_rgba(184,155,94,0.25)]
    "
      >
        <div className="max-w-6xl mx-auto">
          A <span className="text-[#b89b5e]">fan tribute.</span> Not affiliated
          with official studio promotions.
        </div>

        {/* Close Button */}
        <button
          onClick={() => setDismissed(true)}
          className="
        absolute right-3 sm:right-5 top-1/2
        -translate-y-1/2
        text-white/70
        hover:text-[#b89b5e]
        transition
      "
          aria-label="Close Banner"
        >
          <IoCloseOutline size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
