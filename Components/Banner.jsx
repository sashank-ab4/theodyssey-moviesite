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
    }, 7000);

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
      className="
         absolute top-0 left-0 w-full z-30 "
    >
      <div
        className="
        w-full
          relative mt-0
           bg-black/70 backdrop-blur-none
          text-[#6c86ab]
          text-[10px] sm:text-xs
          uppercase tracking-widest
          px-6 py-3 
          
          text-center
          border border-[#b89b5e]/40 border-t-0 border-r-0
          shadow-[0_0_25px_rgba(184,155,94,0.25)]
          transition-opacity duration-500
        "
      >
        An independent <span className="text-[#b89b5e]">fan tribute.</span> Not
        affiliated with Official studio promotions
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-2 text-white hover:text-[#b89b5e] transition"
        >
          <IoCloseOutline size={18} />
        </button>
      </div>
    </div>
  );
}
