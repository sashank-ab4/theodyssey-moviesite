import React from "react";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
export default function SocialMediaHnadles({ className = "" }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <a
        href="https://www.instagram.com/theodysseymovie/?hl=en"
        className="transition-all duration-300 ease-out
    hover:text-[#e7cc65]
    hover:-translate-y-1
    hover:drop-shadow-[0_0_12px_rgba(231,204,101,0.4)]"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://x.com/odysseymovie?lang=en"
        className=" transition-all duration-300 ease-out
    hover:text-[#e7cc65]
    hover:-translate-y-1
    hover:drop-shadow-[0_0_12px_rgba(231,204,101,0.4)]"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.youtube.com/@UniversalPictures"
        className="transition-all duration-300 ease-out
    hover:text-[#e7cc65]
    hover:-translate-y-1
    hover:drop-shadow-[0_0_12px_rgba(231,204,101,0.4)]"
      >
        <FaYoutube size={24} />
      </a>
    </div>
  );
}
