import { useMemo } from "react";
import CRAFT_JOBS_FOR_SYN from "../Utils/craftsForSynopsis";

export default function CraftCredits({ crew }) {
  const structuredCredits = useMemo(() => {
    return CRAFT_JOBS_FOR_SYN.map(({ label, job }) => {
      const people = crew
        .filter((member) => member.job === job)
        .map((member) => member.name);
      if (!people.length) return null;
      return { label, names: people };
    }).filter(Boolean);
  }, [crew]);

  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-[#B89B5E] uppercase tracking-[0.3em] text-sm mb-">
        Credits
      </h4>

      {structuredCredits.map(({ label, names }) => (
        <div key={label} className="flex flex-col">
          <span className="text-white font-semibold tracking-wide">
            {label}
          </span>

          <span className="text-white/60 text-sm mt-1">
            {names.join(" • ")}
          </span>
        </div>
      ))}
    </div>
  );
}
