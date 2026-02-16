import React from "react";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
export default function SocialMediaHnadles({ className = "" }) {
  const socialLinks = [
    {
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/theodysseymovie/?hl=en",
    },
    {
      icon: <FaXTwitter size={24} />,
      url: "https://x.com/odysseymovie?lang=en",
    },
    {
      icon: <FaYoutube size={24} />,
      url: "https://www.youtube.com/@UniversalPictures",
    },
  ];

  const iconStyle = ` transition-all duration-300 ease-out
    hover:text-[#e7cc65]
    hover:-translate-y-1
    hover:drop-shadow-[0_0_12px_rgba(231,204,101,0.4)] cursor-pointer
  `;
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} className={iconStyle}>
          {link.icon}
        </a>
      ))}
    </div>
  );
}
