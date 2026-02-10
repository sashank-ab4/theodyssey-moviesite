import { IoArrowBackOutline } from "react-icons/io5";
export default function CommonBanners({ title, onBack }) {
  return (
    <header className="relative mb-20 px-6 md:px-12">
      {/* Back button — top left */}
      <button
        onClick={onBack}
        className="absolute left-6 md:left-12 top-0 flex items-center gap-2 text-sm text-[#b89b5e] hover:opacity-80 transition"
      >
        <IoArrowBackOutline size={18} />
        <span className="uppercase tracking-widest">Back</span>
      </button>

      {/* Centered title + underline */}
      {title && (
        <div className="flex flex-col items-center pt-6">
          {/* Title */}
          <h2 className="font-roman uppercase tracking-[0.35em] text-[#b89b5e]/60 text-xl md:text-2xl">
            {title}
          </h2>

          {/* Underline with glowing center */}
          <div className="relative mt-6 w-48 h-px bg-[#b89b5e]/30">
            {/* Glow dot */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#b89b5e] shadow-[0_0_12px_3px_rgba(184,155,94,0.6)]" />
          </div>
        </div>
      )}
    </header>
  );
}
