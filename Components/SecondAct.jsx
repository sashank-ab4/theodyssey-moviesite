import useMovieDetails from "../Hooks/useMovieDetails";
import { OFFICIAL_POSTER, SEC_ACT_POSTER } from "../Utils/mockData";

export default function SecondAct() {
  const { movie, loading, error } = useMovieDetails(1368337);
  if (loading) return null;
  if (error) return <p>Error Here!</p>;
  return (
    <section className=" relative w-full min-h-[120svh] bg-[#111827] text-[#B89B5E] overflow-hidden">
      <img
        src={SEC_ACT_POSTER}
        alt="Poster-Background"
        className=" absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className=" absolute inset-0 bg-black/70 z-0" />

      <div className="flex flex-col items-center justify-center -mb-24">
        <div className="text-[8vw] font-roman tracking-[0.2em] opacity-30 leading-none">
          17 JULY 2026
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-[25vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Poster Column */}
          <div className="relative md:-ml-16 lg:-ml-24 flex gap-6">
            <img
              src={OFFICIAL_POSTER}
              alt="Movie Poster"
              className="
                w-full max-w-sm
                aspect-2/3
                rounded-xl
                shadow-2xl
                transition-transform duration-700
                hover:scale-105
              "
            />
            <div className="flex flex-col gap-6 justify-center pb-8">
              {/* Watch Trailer */}
              <button
                className="
        px-6 py-3
        rounded-3xl
        border border-[#B89B5E]/40
        text-[#e5e7eb]
        font-semibold
        tracking-wide
        transition-all duration-300
        hover:bg-[#8c6a3f]
        
      "
              >
                Watch Trailer
              </button>

              {/* Add to Calendar */}
              <button
                className="
        px-6 py-3
        rounded-3xl
        border border-[#cc0809]/40
        text-[#e5e7eb]
        tracking-wide
        transition-all duration-300
        hover:bg-[#cc0809]
         font-semibold
      "
              >
                Add to Calendar
              </button>
            </div>
          </div>

          <div className="relative pl-8">
            <span className="absolute left-0 top-0 h-full w-px bg-[#B89B5E]/40" />

            <div className="space-y-6 mt-6">
              {/* Synopsis content */}
              <div className="space-y-6 max-w-xl ">
                <p className="text-[#B89B5E] uppercase tracking-[0.35em] text-xs font-semibold">
                  Overview
                </p>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#6c86ab] tracking-wider font-roman mb-1">
                  {movie?.title}
                </h2>
                <div className=" text-[#cc0809] tracking-wider uppercase font-semibold leading-snug ">
                  {movie?.tagline}
                </div>
                {movie?.genres && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="
          text-[11px]
          uppercase
          tracking-widest
          px-3 py-1
          border border-[#B89B5E]/40
          text-[#B89B5E]
          rounded-full
        "
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {movie?.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
