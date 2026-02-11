import { useState } from "react";
import CRAFT_JOBS from "../Utils/crafts";

export default function CraftCredits({ crew }) {
  const [expanded, setExpanded] = useState(false);

  const filtered = crew.filter((member) => CRAFT_JOBS.includes(member.job));

  const groupedByPerson = filtered.reduce((acc, member) => {
    const id = member.id;

    if (!acc[id]) {
      acc[id] = {
        id: member.id,
        name: member.name,
        jobs: [member.job],
      };
    } else {
      acc[id].jobs.push(member.job);
    }

    return acc;
  }, {});

  const uniqueCrew = Object.values(groupedByPerson);

  const visibleCrew = expanded ? uniqueCrew : uniqueCrew.slice(0, 6);

  return (
    <div className="flex flex-col gap-6">
      {/* Heading */}
      <h4 className="text-[#B89B5E] uppercase tracking-[0.3em] text-sm mb-4">
        Credits
      </h4>

      {/* Crew List */}
      {visibleCrew.map((member) => (
        <div key={member.id} className="flex flex-col">
          <span className="text-white font-semibold tracking-wide">
            {member.name}
          </span>

          <span className="text-white/60 text-sm mt-1">
            {member.jobs.join(" • ")}
          </span>
        </div>
      ))}

      {/* Show More */}
      {uniqueCrew.length > 6 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#B89B5E] uppercase tracking-widest text-xs hover:text-[#cc0809] transition mt-4"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
