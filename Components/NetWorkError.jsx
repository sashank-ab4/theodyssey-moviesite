import { useEffect, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
export default function NetworkError() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  if (!isOffline) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-[#05060A] flex flex-col items-center justify-center text-center px-6 text-white">
      <IoWarningOutline size={50} className="text-[#b89b5e] mb-6" />

      <h2 className="text-xl md:text-2xl font-roman uppercase tracking-[0.3em] text-[#b89b5e] mb-4">
        You Are Offline
      </h2>

      <p className="text-white/70 max-w-md mb-6">
        Your internet connection appears to be disabled. Please reconnect to
        continue browsing.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="
          px-6 py-3
          rounded-3xl
          border border-[#b89b5e]
          text-[#b89b5e]
          tracking-wide
          transition-all duration-300
          hover:bg-[#b89b5e]
          hover:text-black
        "
      >
        Retry
      </button>
    </div>
  );
}
