import { useState, useEffect } from "react";

const useCountdown = (releaseDate) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(releaseDate));
  function calculateTimeLeft(target) {
    const timeDifference = +new Date(target) - +new Date();
    let timeLeft = {};
    if (timeDifference > 0) {
      timeLeft = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / 1000 / 60) % 60),
        seconds: Math.floor((timeDifference / 1000) % 60),
      };
    }
    return timeLeft;
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(releaseDate));
    }, 1000);

    // Cleanup to prevent memory leaks, ensuring application reliability
    return () => clearInterval(timer);
  }, [releaseDate]);

  return timeLeft;
};

export default useCountdown;
