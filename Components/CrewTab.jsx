import useMovieCredits from "../Hooks/useMovieCredits";
import CommonBanners from "./CommonBanners";
import CrewCredits from "./CrewCredits";
import ShimmerUI from "./ShimmerUI";

export default function CrewTab({ onBack }) {
  const { crew, loading } = useMovieCredits(1368337);

  return (
    <section className="px-6 md:px-12 py-14 bg-[#05060A]">
      <CommonBanners title="Crew" onBack={onBack} />

      {/* {loading && (
        <p className="text-center text-white/60 mt-10">Loading Crew...</p>
      )} */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 mt-12">
        {loading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <ShimmerUI key={index} />
          ))
        ) : (
          <CrewCredits crew={crew} />
        )}
      </div>
    </section>
  );
}
