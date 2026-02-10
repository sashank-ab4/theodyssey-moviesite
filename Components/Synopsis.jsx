import useMovieCredits from "../Hooks/useMovieCredits";
import { SYN_CONTENT, SYNOPSIS_IMG } from "../Utils/mockData";
import CommonBanners from "./CommonBanners";
import CraftCredits from "./CraftCredits";

export default function Synopsis({ onBack }) {
  const { crew, loading } = useMovieCredits(1368337);
  return (
    <>
      {/* SYNOPSIS SECTION */}
      <section className="relative w-full bg-black py-14">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-white">
          {/* SECTION HEADING (top center) */}
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
              <p className="text-gray-300 leading-relaxed text-base md:text-lg space-y-6 whitespace-pre-line">
                {SYN_CONTENT}
              </p>
            </div>

            {/* RIGHT — CREDITS */}
            {!loading && <CraftCredits crew={crew} />}
          </div>
        </div>
      </section>
    </>
  );
}
