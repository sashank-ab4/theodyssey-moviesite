import React, { useRef } from "react";
import { HERO_IMG } from "../Utils/mockData";
import CountdownDisplay from "./CountdownDisplay";
import SecondAct from "./SecondAct";
import Banner from "./Banner";

const HeroSec = () => {
  /* const trailorVidId = "Nf5raRANW38"; */
  const heroRef = useRef(null);
  return (
    <>
      <Banner heroRef={heroRef} />
      <div
        ref={heroRef}
        className=" group relative w-full min-h-svh overflow-hidden"
      >
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

        {/* Gradient Overlay (Makes it look "expensive") */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />

        <div className="absolute bottom-[20%] right-8 md:right-12 z-20 transition-all duration-500 hover:translate-y-[-5px]">
          <div className="flex flex-col items-end">
            {/* Label with a small glowing line for extra "Epic" vibes */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-linear-to-r from-transparent to-white/50 " />
              <p className="text-[#f1f0f6] uppercase tracking-[0.4em] text-[20px] font-roman font-bold drop-shadow-md">
                AN EPIC JOURNEY BEGINS IN
              </p>
            </div>

            <CountdownDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSec;
