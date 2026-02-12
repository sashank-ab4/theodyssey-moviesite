import useMovieCredits from "../Hooks/useMovieCredits";
import CommonBanners from "./CommonBanners";
import CrewCredits from "./CrewCredits";

export default function CrewTab({ onBack }) {
  const { crew, loading } = useMovieCredits(1368337);

  if (loading) return;
  return (
    <section className="px-6 md:px-12 py-14 bg-[#05060A]">
      <CommonBanners title="Crew" onBack={onBack} />

      {loading && (
        <p className="text-center text-white/60 mt-10">Loading Crew...</p>
      )}

      {!loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 mt-12">
          <CrewCredits crew={crew} />
        </div>
      )}
    </section>
  );
}
