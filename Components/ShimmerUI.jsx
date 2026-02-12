export default function ShimmerUI() {
  return (
    <div className="w-full">
      <div className="bg-[#111] rounded-xl overflow-hidden border border-white/5 shadow-md">
        {/* Image Placeholder */}
        <div className="w-full h-[200px] sm:h-60 md:h-[260px] shimmer" />

        {/* Text Placeholder */}
        <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-3">
          <div className="h-3 w-3/4 rounded shimmer" />
          <div className="h-2 w-1/2 rounded shimmer" />
        </div>
      </div>
    </div>
  );
}
