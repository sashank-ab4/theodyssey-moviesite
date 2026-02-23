import { useState } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { PiRedditLogoThin } from "react-icons/pi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

export default function Toast({ isOpen }) {
  /* const shareText = encodeURIComponent('Share over Social Media!') */
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const openWindow = (url) => {
    window.open(url, "_blank", "width=600, height=400");
  };

  const pageURL = encodeURIComponent(window.location.href);
  const SHARE_URLS = [
    {
      label: "facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${pageURL}`,
      icon: <FaFacebookF size={20} />,
    },
    {
      label: "whatsapp",
      url: `https://wa.me/?text=%20${pageURL}`,
      icon: <FaWhatsapp size={20} />,
    },
    {
      label: "X",
      url: `https://www.facebook.com/sharer/sharer.php?u=${pageURL}`,
      icon: <FaXTwitter size={20} />,
    },
    {
      label: "reddit",
      url: `https://www.facebook.com/sharer/sharer.php?u=${pageURL}`,
      icon: <PiRedditLogoThin size={20} />,
    },
    {
      label: "telegram",
      url: `https://t.me/share/url?url=${pageURL}&text`,
      icon: <PiTelegramLogoLight size={20} />,
    },
    {
      label: "email",
      url: `mailto:?subject=${"Check this out"}&body=${pageURL}`,
      icon: <GoMail size={20} />,
    },
  ];
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed top-20 right-10 z-200 bg-black/90 border border-[#B89B5E]/40 rounded-xl p-4 shadow-2xl"
    >
      <div className="flex gap-5">
        <button
          onClick={handleCopyLink}
          className="flex items-center cursor-pointer gap-2 text-[white] hover:text-[white]"
        >
          <MdOutlineContentCopy size={20} />
          {copied && "Copied"}
        </button>

        {/* <button
          onClick={() => openWindow(SHARE_URLS.facebook)}
          className="flex items-center gap-2 text-white hover:text-[#B89B5E]"
        >
          <FaFacebookF size={20} />
        </button> */}

        {SHARE_URLS.map(({ label, url, icon }) => (
          <button
            className="flex items-center gap-2 text-[white] hover:text-[white] cursor-pointer"
            onClick={() => openWindow(url)}
            key={label}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
