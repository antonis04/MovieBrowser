import axios from "axios";
import apiConfig from "../config/api-config.json";
import {
  mockPopularMovies,
  mockGenres,
  mockPopularPeople,
  mockMovieCredits,
} from "../utils/mockData";

const { api } = apiConfig;
const { tmdb, fallback } = api;

const API_KEY = process.env.REACT_APP_API_KEY;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const BASE_URL = tmdb.baseUrl;
const IMAGE_BASE_URL = tmdb.imageBaseUrl;
const LANGUAGE = tmdb.language;
const API_ENABLED =
  tmdb.enabled &&
  API_KEY &&
  API_TOKEN &&
  API_KEY !== "YOUR_API_KEY_HERE" &&
  API_TOKEN !== "YOUR_API_TOKEN_HERE";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    Accept: "application/json",
  },
});

console.log("🎬 MovieBrowser API Configuration:");
console.log(`📡 API Enabled: ${API_ENABLED}`);
console.log(`🎭 Mock Data: ${!API_ENABLED || fallback.useMockData}`);
console.log(
  `🔑 API Key: ${
    API_KEY.length > 10 ? API_KEY.substring(0, 8) + "..." : "Not configured"
  }`
);

export const movieService = {
  getPopularMovies: async (page = 1) => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay)
      );
      return {
        ...mockPopularMovies,
        page: page,
      };
    }

    try {
      const response = await tmdbApi.get("/movie/popular", {
        params: { page },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching popular movies:",
        error.response?.status,
        error.message
      );
      return {
        ...mockPopularMovies,
        page: page,
      };
    }
  },

  getGenres: async () => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay / 2)
      );
      return mockGenres;
    }

    try {
      const response = await tmdbApi.get("/genre/movie/list");
      return response.data.genres;
    } catch (error) {
      console.error(
        "Error fetching genres:",
        error.response?.status,
        error.message
      );
      return mockGenres;
    }
  },

  searchMovies: async (query, page = 1) => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay * 0.8)
      );

      const lowerCaseQuery = query.toLowerCase();

      const filteredMovies = mockPopularMovies.results.filter((movie) =>
        movie.title.toLowerCase().startsWith(lowerCaseQuery)
      );

      return {
        page: page,
        results: filteredMovies,
        total_pages:
          filteredMovies.length > 0 ? Math.ceil(filteredMovies.length / 20) : 0,
        total_results: filteredMovies.length,
      };
    }

    try {
      const response = await tmdbApi.get("/search/movie", {
        params: { query, page },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error searching movies:",
        error.response?.status,
        error.message
      );

      const lowerCaseQuery = query.toLowerCase();

      const filteredMovies = mockPopularMovies.results.filter((movie) =>
        movie.title.toLowerCase().startsWith(lowerCaseQuery)
      );

      return {
        page: page,
        results: filteredMovies,
        total_pages: filteredMovies.length > 0 ? 1 : 0,
        total_results: filteredMovies.length,
      };
    }
  },

  getMovieDetails: async (movieId) => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay)
      );
      const mockMovie = mockPopularMovies.results.find(
        (movie) => movie.id === Number(movieId)
      );
      if (mockMovie) {
        return {
          ...mockMovie,
          genres: mockGenres.filter((genre) =>
            mockMovie.genre_ids.includes(genre.id)
          ),
          runtime: mockMovie.runtime || 120,
          overview: mockMovie.overview,
          backdrop_path: mockMovie.backdrop_path,
          release_date: mockMovie.release_date,
        };
      }
      return null;
    }

    try {
      const response = await tmdbApi.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching movie details:",
        error.response?.status,
        error.message
      );
      const mockMovie = mockPopularMovies.results.find(
        (movie) => movie.id === Number(movieId)
      );
      if (mockMovie) {
        return {
          ...mockMovie,
          genres: mockGenres.filter((genre) =>
            mockMovie.genre_ids.includes(genre.id)
          ),
          runtime: mockMovie.runtime || 120,
          overview: mockMovie.overview,
          backdrop_path: mockMovie.backdrop_path,
          release_date: mockMovie.release_date,
        };
      }
      return null;
    }
  },

  getMovieCredits: async (movieId) => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay)
      );
      return mockMovieCredits;
    }

    try {
      const response = await tmdbApi.get(`/movie/${movieId}/credits`);
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching movie credits:",
        error.response?.status,
        error.message
      );
      return mockMovieCredits;
    }
  },
};

export const peopleService = {
  getPopularPeople: async (page = 1) => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay)
      );
      return {
        ...mockPopularPeople,
        page: page,
      };
    }

    try {
      const response = await tmdbApi.get("/person/popular", {
        params: { page },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching popular people:",
        error.response?.status,
        error.message
      );
      return {
        ...mockPopularPeople,
        page: page,
      };
    }
  },

  searchPeople: async (query, page = 1) => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay)
      );

      const lowerCaseQuery = query.toLowerCase();

      const filteredPeople = mockPopularPeople.results.filter((person) =>
        person.name.toLowerCase().startsWith(lowerCaseQuery)
      );

      return {
        page: page,
        results: filteredPeople,
        total_pages: Math.ceil(filteredPeople.length / 20),
        total_results: filteredPeople.length,
      };
    }

    try {
      const response = await tmdbApi.get("/search/person", {
        params: {
          query: query,
          page: page,
        },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error searching people:",
        error.response?.status,
        error.message
      );

      const lowerCaseQuery = query.toLowerCase();

      const filteredPeople = mockPopularPeople.results.filter((person) =>
        person.name.toLowerCase().startsWith(lowerCaseQuery)
      );

      return {
        page: page,
        results: filteredPeople,
        total_pages: Math.ceil(filteredPeople.length / 20),
        total_results: filteredPeople.length,
      };
    }
  },

  getPersonDetails: async (personId) => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay)
      );
      const mockPerson = mockPopularPeople.results.find(
        (person) => person.id === Number(personId)
      );
      if (mockPerson) {
        return {
          ...mockPerson,
          biography: "This is a mock biography for " + mockPerson.name,
          birthday: "1980-01-01",
          place_of_birth: "Mock City, Mockland",
        };
      }
      return null;
    }

    try {
      const response = await tmdbApi.get(`/person/${personId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching person details:", error);
      const mockPerson = mockPopularPeople.results.find(
        (person) => person.id === Number(personId)
      );
      if (mockPerson) {
        return {
          ...mockPerson,
          biography: "This is a mock biography for " + mockPerson.name,
          birthday: "1980-01-01",
          place_of_birth: "Mock City, Mockland",
        };
      }
      return null;
    }
  },

  getPersonCredits: async (personId) => {
    if (!API_ENABLED || fallback.useMockData) {
      await new Promise((resolve) =>
        setTimeout(resolve, fallback.mockDataDelay)
      );
      return {
        cast: [
          {
            id: 157336,
            title: "Interstellar",
            character: "Joseph Cooper",
            poster_path: "/gEU2QniE6E77NI6touwmTKpZg2f.jpg",
          },
          {
            id: 3,
            title: "The Dark Knight",
            character: "Joker (voice)",
            poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
          },
        ],
        crew: [],
      };
    }

    try {
      const response = await tmdbApi.get(`/person/${personId}/movie_credits`);
      return response.data;
    } catch (error) {
      console.error("Error fetching person credits:", error);
      return { cast: [], crew: [] };
    }
  },
};

export const getImageUrl = (imagePath, size = "w500") => {
  if (!imagePath) return null;

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  return `${IMAGE_BASE_URL}${size}${imagePath}`;
};

export const formatGenres = (genres) => {
  if (!genres || !Array.isArray(genres)) return [];
  return genres.slice(0, 3).map((genre) => genre.name);
};

export default movieService;
