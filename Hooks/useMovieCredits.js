import { useEffect, useState } from "react";
import { getMovieCredits } from "../Utils/dataAPI";
export default function useMovieCredits(movieId) {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        console.log("credits data", data);
        setCast(data.cast || []);
        setCrew(data.crew || []);
      } catch (err) {
        setError(err.message || "Failed to load credits!");
      } finally {
        setLoading(false);
        console.log("loading false");
      }
    };
    fetchCredits();
  }, [movieId]);
  return { cast, crew, loading, error };
}
