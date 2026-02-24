import { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
export default function StarRating({ className = "" }) {
  const [rating, setRating] = useState(0);
  return (
    <div
      className={`flex justify-center items-center gap-2 w-full lg:w-auto px-6 py-3 rounded-full border border-[#b89b5e]/40 bg-black/40 backdrop-blur-sm shadow-md ${className}`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          className=" transition-all duration-200 hover:scale-110"
        >
          <MdOutlineStarPurple500
            size={24}
            className={`
        transition-colors duration-200 ${star <= rating ? "text-[#e7cc65]" : "text-gray-500"}  `}
          />
        </button>
      ))}
    </div>
  );
}
