import useMovieCredits from "../Hooks/useMovieCredits";
import CastnCrewCard from "./CastnCrewCard";
import CommonBanners from "./CommonBanners";
import ShimmerUI from "./ShimmerUI";

export default function CastTab({ onBack }) {
  const { cast, loading } = useMovieCredits(1368337);

  return (
    <section className=" min-h-screen px-12 py-14 bg-[#05060A]">
      <CommonBanners title="Cast" onBack={onBack} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <ShimmerUI key={index} />
            ))
          : cast
              .slice(0, 15)
              .map((actor) => (
                <CastnCrewCard
                  key={actor.id}
                  name={actor.name}
                  role={actor.character}
                  image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                />
              ))}
      </div>
      {/*  <ThirdAct />  -- possible too*/}
    </section>
  );
}
