import axios from "axios";
import apiConfig from "../config/api-config.json";

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

const mockPopularMovies = {
  page: 1,
  results: [
    {
      id: 157336,
      title: "Interstellar",
      poster_path: "/gEU2QniE6E77NI6touwmTKpZg2f.jpg",
      release_date: "2014-11-05",
      genre_ids: [12, 18, 878],
      vote_average: 8.4,
      vote_count: 32000,
      overview:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      backdrop_path: "/ee3rVusWj5sA26Xq6aH1H4k61QG.jpg",
      runtime: 169,
      genres: [
        { id: 12, name: "Adventure" },
        { id: 18, name: "Drama" },
        { id: 878, name: "Science Fiction" },
      ],
    },
    {
      id: 2,
      title: "The Godfather",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-24",
      genre_ids: [18, 80],
      vote_average: 9.2,
      vote_count: 1876543,
      overview:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      release_date: "2008-07-18",
      genre_ids: [28, 18, 80],
      vote_average: 9.0,
      vote_count: 2987654,
      overview:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    },
  ],
  total_pages: 500,
  total_results: 10000,
};

const mockGenres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const mockPopularPeople = {
  page: 1,
  results: [
    {
      id: 1,
      name: "Ryan Reynolds",
      profile_path: "/2Zy8nUBQY8y61KgWZKHZnJlyy2N.jpg",
      known_for_department: "Acting",
      popularity: 45.5,
    },
    {
      id: 2,
      name: "Scarlett Johansson",
      profile_path: "/3JTEc2tGUact9c0WktvpeJ9pajn.jpg",
      known_for_department: "Acting",
      popularity: 42.1,
    },
  ],
  total_pages: 500,
  total_results: 10000,
};

const mockMovieCredits = {
  cast: [
    {
      id: 1023158,
      name: "Matthew McConaughey",
      character: "Cooper",
      profile_path: "/e0Vn6Qmtn21bQ5QoMhFq5mD1P.jpg",
    },
    {
      id: 1083047,
      name: "Anne Hathaway",
      character: "Brand",
      profile_path: "/l9fFf2L7c5rM1m1o2B6p4c2u2h.jpg",
    },
  ],
  crew: [
    {
      id: 525,
      name: "Christopher Nolan",
      job: "Director",
      profile_path: "/wuqC00Q8yvB39VqJmCq7dQJ0cWn.jpg",
    },
    {
      id: 525,
      name: "Christopher Nolan",
      job: "Writer",
      profile_path: "/wuqC00Q8yvB39VqJmCq7dQJ0cWn.jpg",
    },
  ],
};

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
      throw error;
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
      return response.data.cast;
    } catch (error) {
      console.error("Error fetching person credits:", error);
      return [];
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
