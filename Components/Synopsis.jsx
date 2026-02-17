import useMovieCredits from "../Hooks/useMovieCredits";
import { SYN_CONTENT, SYNOPSIS_IMG } from "../Utils/mockData";
import CommonBanners from "./CommonBanners";
import CraftCredits from "./CraftCredits";

export default function Synopsis({ onBack }) {
  const { crew, loading } = useMovieCredits(1368337);

  return (
    <section className="relative w-full bg-[#05060A] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">
        <CommonBanners title="SYNOPSIS" onBack={onBack} />

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_340px] gap-16 lg:gap-20 items-start">
          {/* LEFT — Poster */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={SYNOPSIS_IMG}
              alt="Poster"
              className="
            w-full max-w-xs sm:max-w-sm
            aspect-[2/3]
            rounded-xl
            shadow-2xl
            transition-transform duration-700
            hover:scale-105
          "
            />
          </div>

          {/* CENTER — Synopsis Text */}
          <div className="max-w-2xl">
            <div className="relative">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {SYN_CONTENT}
              </p>
            </div>
          </div>

          {/* RIGHT — Cinematic Credits */}
          <div className="mt-12 lg:mt-0">
            {!loading && <CraftCredits crew={crew} />}
          </div>
        </div>
      </div>
    </section>
  );
}
