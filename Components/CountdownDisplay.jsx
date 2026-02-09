import useCountdown from "../Hooks/useCountdown";

export default function CountdownDisplay() {
  const releaseDate = "2026-07-17T08:59:59";
  const { days, hours, minutes, seconds } = useCountdown(releaseDate);

  return (
    <div className="flex items-end gap-5 sm:gap-8">
      {/* UNIT */}
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Mins", value: minutes },
        { label: "Secs", value: seconds },
      ].map((item, idx) => (
        <div key={item.label} className="flex flex-col items-center">
          <div
            className="
              relative
              w-20 h-24 sm:w-28 sm:h-32
              rounded-xl
              bg-black/40
              backdrop-blur-lg
              border border-[#e7cc65]/20
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              flex items-center justify-center
            "
          >
            {/* subtle inner glow */}
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(231,204,101,0.12)]" />

            <span
              key={item.value}
              className="
                relative
                text-4xl sm:text-6xl
                font-extrabold
                text-[#e7cc65]
                tracking-wide
                animate-slide-up
              "
            >
              {item.value}
            </span>
          </div>

          <span className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[#e7cc65]/80">
            {item.label}
          </span>

          {/* Separator dots (except last) */}
          {idx !== 3 && (
            <span className="hidden sm:block absolute right-[-18px] top-[45%] text-[#e7cc65]/30 text-3xl">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
