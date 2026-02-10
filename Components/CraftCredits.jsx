import CRAFT_JOBS from "../Utils/crafts";
export default function CraftCredits({ crew }) {
  const filtered = crew.filter((member) => CRAFT_JOBS.includes(member.job));
  const grouped = filtered.reduce((acc, member) => {
    if (!acc[member.job]) acc[member.job] = [];
    acc[member.job].push(member.name);
    return acc;
  }, {});
  return (
    <aside className="space-y-8 text-sm border-l border-white/10 pl-8">
      {Object.entries(grouped).map(([role, names]) => (
        <div key={role}>
          <h4 className="mb-2 font-semibold uppercase tracking-widest text-white">
            {role}
          </h4>
          <p className="text-gray-400 leading-relaxed">{names.join(", ")}</p>
        </div>
      ))}
    </aside>
  );
}
