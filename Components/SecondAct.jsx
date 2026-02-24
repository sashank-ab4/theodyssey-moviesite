import { useState } from "react";
import useMovieDetails from "../Hooks/useMovieDetails";
import { OFFICIAL_POSTER, SEC_ACT_POSTER } from "../Utils/mockData";
import Modal from "./Modal";
import OverviewShimmer from "./OverviewShimmer";
import StarRating from "./Rating";

export default function SecondAct() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const { movie, loading } = useMovieDetails(1368337);

  const addToCalendar = () => {
    const movieTitle = movie.title;
    const description =
      "Experience the Epic Journey on the Big Screen- Shot entirely with IMAX Cameras";
    /* const releaseDate = movie.release_date; */
    const startDate = "20260717T090000Z";
    const endDate = "20260724T120000Z";

    const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(movieTitle)}&details=${encodeURIComponent(description)}&location=Theaters+Worldwide&dates=${startDate}/${endDate}`;

    window.open(calendarUrl, "_blank", "noopener");
  };
  return (
    <>
      {loading ? (
        <OverviewShimmer />
      ) : (
        <section className=" relative w-full min-h-[120svh] bg-[#111827] text-[#B89B5E] overflow-hidden">
          <img
            src={SEC_ACT_POSTER}
            alt="Poster-Background"
            className=" absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className=" absolute inset-0 bg-black/70 z-0" />

          <div
            className="flex flex-col items-center justify-center -mb-24 md:-mb-24
"
          >
            <div className="text-[8vw] font-roman tracking-[0.2em] opacity-30 leading-none">
              17 JULY 2026
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-[25vh]">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_260px_1fr] gap-12 lg:gap-20 items-center">
              {/* LEFT — POSTER */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={OFFICIAL_POSTER}
                  alt="Movie Poster"
                  className="
          w-[220px] sm:w-[260px] md:w-[300px]
          aspect-2/3
          rounded-xl
          shadow-2xl
          transition-transform duration-700
          hover:scale-105
        "
                />
              </div>

              {/* MIDDLE — BUTTON COLUMN */}
              <div className="flex flex-col gap-6 justify-center items-center lg:items-start">
                <button
                  onClick={() => setIsTrailerOpen(true)}
                  alt="Movie-Trailer"
                  className="
          w-full lg:w-auto
          px-6 py-3
          rounded-3xl
          border border-[#B89B5E]
          text-[#e5e7eb]
         hover:text-black
          font-semibold
          tracking-wide
          transition-all duration-300
          hover:bg-[#8c6a3f] 
        "
                >
                  Watch Trailer
                </button>
                <StarRating className="w-full lg:w-auto" />
                <button
                  onClick={addToCalendar}
                  className="
          w-full lg:w-auto
          px-6 py-3
          rounded-3xl
          border border-[#cc0809]
          text-[#e5e7eb]
          hover:text-black
          font-semibold
          tracking-wide
          transition-all duration-300
          hover:bg-[#cc0809] 
        "
                >
                  Save the Date
                </button>

                <Modal
                  isOpen={isTrailerOpen}
                  onClose={() => setIsTrailerOpen(false)}
                />
              </div>

              {/* right-overview-part */}

              <div className="relative pl-0 lg:pl-8">
                <span className="hidden lg:block absolute left-0 top-0 h-full w-px bg-[#B89B5E]/40" />

                <div className="space-y-6 mt-6 max-w-xl">
                  <p className="text-[#B89B5E] uppercase tracking-[0.35em] text-xs font-semibold">
                    Overview
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#6c86ab] tracking-widest font-mont uppercase">
                    {movie?.title}
                  </h2>

                  <div className="text-[#cc0809] tracking-wider uppercase font-semibold">
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
        </section>
      )}
    </>
  );
}
