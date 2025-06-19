const API_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();
  return data.results;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await fetch(`${API_URL}/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movie credits");
  }

  const data = await response.json();
  return data;
};
