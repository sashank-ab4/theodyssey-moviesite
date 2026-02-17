export default function ShimmerUI() {
  return (
    <div className="w-full">
      <div className="bg-[black] rounded-xl overflow-hidden border border-white/5 shadow-md">
        {/* Images*/}
        <div className="w-full h-[200px] sm:h-60 md:h-[260px] shimmer" />

        {/* For Text area  */}
        <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-3  ">
          <div className="h-3 w-3/4 rounded shimmer" />
          <div className="h-2 w-1/2 rounded shimmer" />
        </div>
      </div>
    </div>
  );
}
