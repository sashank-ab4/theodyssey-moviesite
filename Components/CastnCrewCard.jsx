export default function CastnCrewCard({ image, name, role }) {
  return (
    <div className="group w-full">
      <div
        className="
      bg-[#111]
      rounded-xl
      overflow-hidden
      border border-white/10
      shadow-md sm:shadow-lg
      transition-all duration-300
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      hover:-translate-y-2
      hover:border-[#B89B5E]/40
    "
      >
        <img
          src={image}
          alt={name}
          className="
        w-full
        h-[200px] sm:h-[240px] md:h-[260px]
        object-cover
        transition-transform duration-500
        group-hover:scale-105
      "
        />

        <div className="px-3 sm:px-4 py-3 sm:py-4 text-center">
          <h4 className="text-xs sm:text-sm font-semibold text-[#B89B5E] tracking-wide">
            {name}
          </h4>

          <p className="text-[10px] sm:text-xs text-white/60 mt-1 tracking-wide">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
