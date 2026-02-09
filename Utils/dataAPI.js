const BASE_URL = "https://api.themoviedb.org/3";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
};

const fetchFromTMDB = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, API_OPTIONS);
  if (!res.ok) throw new Error("Failed to retrevie TMDB Request!");
  return res.json();
};

export const getMovieDetails = (movieId) => {
  return fetchFromTMDB(`/movie/${movieId}`);
};
console.log(getMovieDetails(1368337));
