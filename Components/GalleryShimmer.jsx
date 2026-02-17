import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function GalleryShimmer() {
  return (
    <div
      className="  relative w-full
        max-w-6xl mx-auto
        overflow-hidden
         aspect-video
         
        rounded-xl sm:rounded-2xl
        border border-transparent
        bg-[#0d0f15]
        shadow-xl sm:shadow-2xl
        shimmer
        "
    >
      <div className="absolute inset-0 shimmer" />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
      <div className=" flex items-center justify-center text-3xl">
        <AiOutlineLoading3Quarters
          size={24}
          className=" text-[#b89b5e] animate-spin opacity-80"
        />
      </div>
    </div>
  );
}
