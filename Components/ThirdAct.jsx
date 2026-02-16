import { THIRD_ACT_POSTER } from "../Utils/mockData";
import { FaArrowUpLong } from "react-icons/fa6";
import SocialMediaHnadles from "./SocialMediaHnadles";
import { useEffect, useRef, useState } from "react";

export default function ThirdAct() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // for scroll to up arrow visibility only @ footer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }, // 30% visible
    );
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => observer.disconnect();
  }, []);
  // for scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer ref={footerRef} className=" relative bg-[#05060A] text-[#6c86ab]">
      <div className=" mb-6 inset-x-0 h-px bg-linear-to-r from-transparent via-[#6c86ab]/40 to-transparent" />
      <div className=" flex flex-col items-center justify-center text-center gap-4">
        <img
          src={THIRD_ACT_POSTER}
          alt="Title-Date"
          className="  w-40 sm:w-52 md:w-60
      object-contain
      opacity-90
      drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-105 active:scale-95"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col items-center gap-6">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#e5e7e8]/60 text-center">
          {" "}
          © 2026 The Odyssey. All Rights Reserved.
        </p>
        {/* <p className="text-[11px] tracking-[0.35em]  text-[#efe7e8]/60 text-center">
          {" "}
          This is a fan-made countdown and Movie website. Not affliated with
          Official Movie Promotions.
        </p> */}
        <p className="text-[12px] tracking-[0.35em] uppercase text-[#9ca3af] text-center">
          {" "}
          Made with 💙 for Christopher Nolan!
        </p>
        {/* Global Component-reusable one */}
        <SocialMediaHnadles className="mt-3 justify-center" />

        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 text-[#b89b5e] border border-[#B89B5E]/40 rounded-full p-2 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out 
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
          <FaArrowUpLong size={25} />
        </button>

        <div className="text-center text-[11px] tracking-widest text-white/60 mt-2">
          Crafted by{" "}
          <a
            href="https://linkedin.com/in/https://www.linkedin.com/in/sashank-akkabattula-22a311247/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6c86ab] uppercase hover:text-[#B89B5E] transition"
          >
            Sashank AB
          </a>
        </div>
      </div>
    </footer>
  );
}
