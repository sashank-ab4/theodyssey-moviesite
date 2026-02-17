export default function OverviewShimmer() {
  return (
    <section className="relative min-h-[120svh] w-full bg-[#05060A] py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT — Poster Skeleton */}
          <div className="w-full max-w-sm aspect-2/3 rounded-xl shimmer" />

          {/* RIGHT — Content Skeleton */}
          <div className="space-y-6">
            {/* Small Label */}
            <div className="h-3 w-24 rounded shimmer" />

            {/* Big Title */}
            <div className="h-8 w-3/4 rounded shimmer" />

            {/* Genre Pills */}
            <div className="flex gap-3 mt-4">
              <div className="h-6 w-16 rounded-full shimmer" />
              <div className="h-6 w-20 rounded-full shimmer" />
              <div className="h-6 w-14 rounded-full shimmer" />
            </div>

            {/* Overview Paragraph */}
            <div className="space-y-3 mt-6">
              <div className="h-3 w-full rounded shimmer" />
              <div className="h-3 w-full rounded shimmer" />
              <div className="h-3 w-5/6 rounded shimmer" />
              <div className="h-3 w-2/3 rounded shimmer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
