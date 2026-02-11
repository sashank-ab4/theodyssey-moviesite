import useMovieMedia from "../Hooks/useMovieMedia";
import CommonBanners from "./CommonBanners";
import ImageCarousel from "./ImageCarousel";
export default function GalleryTab({ onBack }) {
  const { backgrounds, loading } = useMovieMedia(1368337);
  if (loading) return <p>Loading images...</p>;
  return (
    <div className="py-12 bg-[#05060A] ">
      <CommonBanners title={"Gallery"} onBack={onBack} />
      <ImageCarousel images={backgrounds.slice(0, 12)} />
    </div>
  );
}
