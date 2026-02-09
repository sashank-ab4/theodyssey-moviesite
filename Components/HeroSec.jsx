import React from "react";
import { HERO_IMG } from "../Utils/mockData";
import CountdownDisplay from "./CountdownDisplay";
import SecondAct from "./SecondAct";

const HeroSec = () => {
  /* const trailorVidId = "Nf5raRANW38"; */
  return (
    <div className=" group relative w-full h-screen overflow-hidden">
      {/* The Image */}
      <img
        src={HERO_IMG}
        alt="Movie Poster"
        className=" absolute inset-0
  w-full h-full
  object-cover
  scale-110
  transition-transform duration-1200 ease-out
  will-change-transform
  group-hover:scale-105 "
      />
      <div
        className="
      absolute inset-x-0 bottom-0
      h-40 sm:h-56 md:h-72
      bg-linear-to-t
      from-black/90 via-black/50 to-transparent
      z-10
      pointer-events-none
    "
      />

      {/*Trailer*/}

      {/* <iframe
        className=" relative w-full h-screen overflow-hidden"
        src={`https://www.youtube.com/embed/${trailorVidId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailorVidId}&modestbranding=1&rel=0`}
        frameborder="0"
        title="Background-Trailor"
        allow="autoplay; encrypted-media"
        loading="lazy"
      ></iframe> */}

      {/* Gradient Overlay (Makes it look "expensive") */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />

      <div className="absolute bottom-[20%] right-8 md:right-12 z-20 transition-all duration-500 hover:translate-y-[-5px]">
        <div className="flex flex-col items-end">
          {/* Label with a small glowing line for extra "Epic" vibes */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-linear-to-r from-transparent to-white/50 " />
            <p className="text-[#1B2A41] uppercase tracking-[0.4em] text-[15px] md:text-xs font-bold drop-shadow-md">
              Epic Adventure Begins In
            </p>
          </div>

          <CountdownDisplay />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
