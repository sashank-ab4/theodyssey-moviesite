import useMovieCredits from "../Hooks/useMovieCredits";
import CastnCrewCard from "./CastnCrewCard";
import CommonBanners from "./CommonBanners";
import ThirdAct from "./ThirdAct";

export default function CastTab({ onBack }) {
  const { cast, loading } = useMovieCredits(1368337);
  if (loading) return;

  return (
    <section className=" min-h-screen px-12 py-14 bg-[#05060A]">
      {/* <button onClick={onBack} className=" text-[#cc0809]">
        <MdOutlineKeyboardBackspace size={22} />
      </button>
      <div className="mb-24 text-center pointer-events-none">
        <h2 className="text-[6vw] md:text-[4vw] font-roman tracking-[0.3em] text-[#b89b5e]/30">
          CAST
        </h2>
      </div> */}
      <CommonBanners title="Cast" onBack={onBack} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
        {cast.slice(0, 15).map((actor) => (
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
