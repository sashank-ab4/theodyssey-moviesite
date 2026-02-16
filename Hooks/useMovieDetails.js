import { useEffect, useState } from "react";
import { getMovieDetails } from "../Utils/dataAPI";

export default function useMovieDetails(movieId) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchOdyssey = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOdyssey();
  }, [movieId]);

  return { movie, loading, error };
}
