import { useEffect, useState } from "react";
import { getMovieMedia } from "../Utils/dataAPI";

export default function useMovieMedia(movieId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchMedia = async () => {
      try {
        const data = await getMovieMedia(movieId);

        setBackgrounds(data.backdrops);
      } catch (error) {
        setError(error.message || "Failed to Fecth Data!");
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, [movieId]);
  return { backgrounds, error, loading };
}
