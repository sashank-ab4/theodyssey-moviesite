import { THIRD_ACT_POSTER } from "../Utils/mockData";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaArrowUpLong,
} from "react-icons/fa6";

export default function ThirdAct() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className=" relative bg-[#05060A] text-[#6c86ab]">
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

        <div className=" flex items-center gap-7">
          <a
            href="https://www.instagram.com/theodysseymovie/?hl=en"
            className="transition-all duration-300 ease-out
    hover:text-[#e7cc65]
    hover:-translate-y-1
    hover:drop-shadow-[0_0_12px_rgba(231,204,101,0.4)]"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://x.com/odysseymovie?lang=en"
            className=" transition-all duration-300 ease-out
    hover:text-[#e7cc65]
    hover:-translate-y-1
    hover:drop-shadow-[0_0_12px_rgba(231,204,101,0.4)]"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://www.youtube.com/@UniversalPictures"
            className="transition-all duration-300 ease-out
    hover:text-[#e7cc65]
    hover:-translate-y-1
    hover:drop-shadow-[0_0_12px_rgba(231,204,101,0.4)]"
          >
            <FaYoutube size={20} />
          </a>
        </div>
        <button
          onClick={scrollToTop}
          className=" fixed bottom-6 right-6 text-[#b89b5e] border border-[#B89B5E]/40 rounded-full p-2 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out"
        >
          <FaArrowUpLong size={25} />
        </button>
      </div>
    </footer>
  );
}
