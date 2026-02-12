import React, { useRef } from "react";
import { HERO_IMG, MOB_IMG } from "../Utils/mockData";
import CountdownDisplay from "./CountdownDisplay";
import SecondAct from "./SecondAct";
import Banner from "./Banner";

const HeroSec = () => {
  /* const trailorVidId = "Nf5raRANW38"; */
  const heroRef = useRef(null);
  return (
    <>
      <Banner heroRef={heroRef} />
      <section
        ref={heroRef}
        className="group relative w-full min-h-svh overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={HERO_IMG}
          alt="Movie Poster"
          className="
           hidden md:block
          absolute inset-0
          w-full h-full
          object-cover
          scale-110
        "
        />
        <img
          src={MOB_IMG}
          alt="Movie Poster"
          className="
 block md:hidden
          absolute inset-0
          w-full h-full
          object-cover
          
        "
        />

        {/* Bottom Gradient Fade */}
        <div
          className="
          absolute inset-x-0 bottom-0
          h-32 sm:h-48 md:h-72
          bg-gradient-to-t
          from-black/90 via-black/50 to-transparent
          z-10
          pointer-events-none
        "
        />

        {/* Full Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-0" />

        {/* Countdown Content */}
        <div
          className="
          absolute
          bottom-[12%] sm:bottom-[15%] md:bottom-[20%]
          right-1/2 translate-x-1/2
          md:right-12 md:translate-x-0
          z-20
          transition-all duration-500
          hover:-translate-y-1
        "
        >
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            {/* Label */}
            <div className="flex items-center justify-center md:justify-end gap-3 mb-4">
              <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-white/50" />
              <p
                className="
                text-white
                uppercase
                tracking-[0.3em] sm:tracking-[0.4em]
                text-sm sm:text-base md:text-[20px]
                font-roman font-bold
                drop-shadow-md
              "
              >
                AN EPIC JOURNEY BEGINS IN
              </p>
            </div>

            {/* Countdown */}
            <CountdownDisplay />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSec;
