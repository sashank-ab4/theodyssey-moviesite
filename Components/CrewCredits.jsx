import CrewCard from "./CrewCard";
import CRAFT_JOBS_FOR_CREW_PAGE from "../Utils/crafts";
export default function CrewCredits({ crew }) {
  const filteredCraftJobs = crew.filter((member) =>
    CRAFT_JOBS_FOR_CREW_PAGE.includes(member.job),
  );
  const groupedByPerson = filteredCraftJobs.reduce((acc, member) => {
    const id = member.id;
    if (!acc[id]) {
      acc[id] = {
        id: member.id,
        name: member.name,
        profile_path: member.profile_path,
        jobs: [member.job],
      };
    } else {
      acc[id].jobs.push(member.job);
    }

    return acc;
  }, {});
  const uniqueCrew = Object.values(groupedByPerson);

  return uniqueCrew.map((member) => (
    <CrewCard
      key={member.id}
      name={member.name}
      image={
        member.profile_path
          ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
          : "/placeholder.jpg"
      }
      role={member.jobs.join(" • ")}
    />
  ));
}
