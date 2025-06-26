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

export const fetchPersonDetails = async (personId) => {
  const response = await fetch(`${API_URL}/person/${personId}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch person details");
  }

  const data = await response.json();
  return data;
};

export const fetchPersonCredits = async (personId) => {
  const response = await fetch(`${API_URL}/person/${personId}/movie_credits`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch person credits");
  }

  const data = await response.json();
  return data.cast;
};

export const fetchPopularPeople = async () => {
  const response = await fetch(`${API_URL}/person/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch people");
  }

  const data = await response.json();
  return data.results;
};
