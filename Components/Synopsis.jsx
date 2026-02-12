import { useState } from "react";
import useMovieCredits from "../Hooks/useMovieCredits";
import { SYN_CONTENT, SYNOPSIS_IMG } from "../Utils/mockData";
import CommonBanners from "./CommonBanners";
import CraftCredits from "./CraftCredits";

export default function Synopsis({ onBack }) {
  const { crew, loading } = useMovieCredits(1368337);
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="relative w-full bg-[#05060A] py-14">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-white">
        {/* SECTION HEADING */}
        <CommonBanners title="SYNOPSIS" onBack={onBack} />

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_280px] gap-20 items-start">
          {/* LEFT — POSTER */}
          <div className="flex justify-center md:justify-start">
            <img
              src={SYNOPSIS_IMG}
              alt="Poster"
              className="
                w-full max-w-sm
                aspect-2/3
                rounded-xl
                shadow-2xl
                transition-transform duration-700
                hover:scale-105
              "
            />
          </div>

          {/* CENTER — SYNOPSIS TEXT */}
          <div className="relative max-w-xl">
            {/* Text Wrapper with Smooth Expand */}
            <div
              className={`relative transition-all duration-500 ease-in-out ${
                expanded ? "max-h-[1200px]" : "max-h-[180px]"
              } overflow-hidden`}
            >
              <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {SYN_CONTENT}
              </p>

              {/* Gradient Fade when collapsed */}
              {!expanded && (
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              )}
            </div>

            {/* Toggle Button */}
            <div className="mt-6">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[#B89B5E] uppercase tracking-widest text-sm hover:text-[#cc0809] transition"
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* RIGHT — CREDITS */}
          {!loading && <CraftCredits crew={crew} />}
        </div>
      </div>
    </section>
  );
}
