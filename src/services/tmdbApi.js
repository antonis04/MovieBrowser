import axios from 'axios';
import apiConfig from '../config/api-config.json';

// Load configuration from JSON file
const { api, app } = apiConfig;
const { tmdb, fallback } = api;

// TMDB API configuration from JSON
const API_KEY = tmdb.apiKey;
const BASE_URL = tmdb.baseUrl;
const IMAGE_BASE_URL = tmdb.imageBaseUrl;
const LANGUAGE = tmdb.language;
const API_ENABLED = tmdb.enabled && API_KEY !== 'YOUR_API_KEY_HERE';

// Create axios instance with default config
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
});

// Log configuration status
console.log('🎬 MovieBrowser API Configuration:');
console.log(`📡 API Enabled: ${API_ENABLED}`);
console.log(`🎭 Mock Data: ${!API_ENABLED || fallback.useMockData}`);
console.log(`🔑 API Key: ${API_KEY.length > 10 ? API_KEY.substring(0, 8) + '...' : 'Not configured'}`);

// Mock data fallback for when API is not available
const mockPopularMovies = {
  page: 1,
  results: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      poster_path: '/q6y0Go1LiNG1sw1cNsjf5DWGRs.jpg',
      release_date: '1994-09-23',
      genre_ids: [18, 80],
      vote_average: 9.3,
      vote_count: 2654321,
      overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      id: 2,
      title: 'The Godfather',
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      release_date: '1972-03-24',
      genre_ids: [18, 80],
      vote_average: 9.2,
      vote_count: 1876543,
      overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      release_date: '2008-07-18',
      genre_ids: [28, 18, 80],
      vote_average: 9.0,
      vote_count: 2987654,
      overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.'
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      poster_path: '/dM2w364MScsjFf8pfMbaINrw6WT.jpg',
      release_date: '1994-10-14',
      genre_ids: [80, 18],
      vote_average: 8.9,
      vote_count: 2123456,
      overview: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.'
    },
    {
      id: 5,
      title: 'Forrest Gump',
      poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
      release_date: '1994-07-06',
      genre_ids: [18, 10749],
      vote_average: 8.8,
      vote_count: 2456789,
      overview: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man.'
    },
    {
      id: 6,
      title: 'Inception',
      poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      release_date: '2010-07-16',
      genre_ids: [28, 878, 53],
      vote_average: 8.8,
      vote_count: 2345678,
      overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
    },
    {
      id: 7,
      title: 'The Matrix',
      poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      release_date: '1999-03-31',
      genre_ids: [28, 878],
      vote_average: 8.7,
      vote_count: 1987654,
      overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    },
    {
      id: 8,
      title: 'Goodfellas',
      poster_path: '/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
      release_date: '1990-09-21',
      genre_ids: [18, 80],
      vote_average: 8.7,
      vote_count: 1654321,
      overview: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.'
    }
  ],
  total_pages: 500,
  total_results: 10000
};

const mockGenres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
];

// Mock data fallback for people when API is not available
const mockPopularPeople = {
  page: 1,
  results: [
    {
      id: 1,
      name: 'Ryan Reynolds',
      profile_path: '/2Zy8nUBQY8y61KgWZKHZnJlyy2N.jpg',
      known_for_department: 'Acting',
      popularity: 45.5
    },
    {
      id: 2,
      name: 'Scarlett Johansson',
      profile_path: '/3JTEc2tGUact9c0WktvpeJ9pajn.jpg',
      known_for_department: 'Acting',
      popularity: 42.1
    },
    {
      id: 3,
      name: 'Chris Evans',
      profile_path: '/3bOGNsHlrswhyW79uvIHH1V43JI.jpg',
      known_for_department: 'Acting',
      popularity: 40.8
    },
    {
      id: 4,
      name: 'Emma Stone',
      profile_path: '/wqEypkGUUKVCjIb7ROQNKDRMDSQ.jpg',
      known_for_department: 'Acting',
      popularity: 39.2
    },
    {
      id: 5,
      name: 'Leonardo DiCaprio',
      profile_path: '/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
      known_for_department: 'Acting',
      popularity: 38.5
    },
    {
      id: 6,
      name: 'Jennifer Lawrence',
      profile_path: '/k6l8BWsInOOyUbfcFnlKlwY4Fjw.jpg',
      known_for_department: 'Acting',
      popularity: 37.9
    }
  ],
  total_pages: 500,
  total_results: 10000
};

// API service methods
export const movieService = {  // Get popular movies
  getPopularMovies: async (page = 1) => {
    // Check if API is enabled and properly configured
    if (!API_ENABLED || fallback.useMockData) {
      console.warn('🎭 Using mock data - API not enabled or configured');
      // Return mock data with pagination simulation
      await new Promise(resolve => setTimeout(resolve, fallback.mockDataDelay));
      return {
        ...mockPopularMovies,
        page: page
      };
    }

    try {
      console.log(`📡 Fetching popular movies from TMDB API - Page ${page}`);
      const response = await tmdbApi.get('/movie/popular', {
        params: { page }
      });
      console.log(`✅ Successfully fetched ${response.data.results.length} movies`);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching popular movies:', error.response?.status, error.message);
      console.warn('🎭 Falling back to mock data due to API error');
      // Fallback to mock data on API error
      return {
        ...mockPopularMovies,
        page: page
      };
    }
  },

  // Get movie genres
  getGenres: async () => {
    // Check if API is enabled and properly configured
    if (!API_ENABLED || fallback.useMockData) {
      console.warn('🎭 Using mock genres - API not enabled or configured');
      await new Promise(resolve => setTimeout(resolve, fallback.mockDataDelay / 2));
      return mockGenres;
    }

    try {
      console.log('📡 Fetching genres from TMDB API');
      const response = await tmdbApi.get('/genre/movie/list');
      console.log(`✅ Successfully fetched ${response.data.genres.length} genres`);
      return response.data.genres;
    } catch (error) {
      console.error('❌ Error fetching genres:', error.response?.status, error.message);
      console.warn('🎭 Falling back to mock genres due to API error');
      return mockGenres;
    }
  },  // Search movies
  searchMovies: async (query, page = 1) => {
    // Check if API is enabled and properly configured
    if (!API_ENABLED || fallback.useMockData) {
      console.warn('🎭 Using mock search data - API not enabled or configured');
      await new Promise(resolve => setTimeout(resolve, fallback.mockDataDelay * 0.8));
      
      // Simple mock search - filter movies by query
      const filteredMovies = mockPopularMovies.results.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      
      console.log(`🔍 Mock search for "${query}" found ${filteredMovies.length} results`);
      
      return {
        page: page,
        results: filteredMovies,
        total_pages: filteredMovies.length > 0 ? 1 : 0,
        total_results: filteredMovies.length
      };
    }

    try {
      console.log(`🔍 Searching TMDB API for "${query}" - Page ${page}`);
      const response = await tmdbApi.get('/search/movie', {
        params: { query, page }
      });
      console.log(`✅ Search found ${response.data.results.length} movies`);
      return response.data;
    } catch (error) {
      console.error('❌ Error searching movies:', error.response?.status, error.message);
      console.warn('🎭 Falling back to mock search due to API error');
      
      // Fallback search in mock data
      const filteredMovies = mockPopularMovies.results.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      
      return {
        page: page,
        results: filteredMovies,
        total_pages: filteredMovies.length > 0 ? 1 : 0,
        total_results: filteredMovies.length
      };
    }
  },

  // Get movie details
  getMovieDetails: async (movieId) => {
    try {
      const response = await tmdbApi.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },
};

// People service methods
export const peopleService = {
  // Get popular people
  getPopularPeople: async (page = 1) => {
    // Check if API is enabled and properly configured
    if (!API_ENABLED || fallback.useMockData) {
      console.warn('🎭 Using mock people data - API not enabled or configured');
      // Return mock data with pagination simulation
      await new Promise(resolve => setTimeout(resolve, fallback.mockDataDelay));
      return {
        ...mockPopularPeople,
        page: page
      };
    }

    try {
      console.log(`📡 Fetching popular people from TMDB API - Page ${page}`);
      const response = await tmdbApi.get('/person/popular', {
        params: { page }
      });
      console.log(`✅ Successfully fetched ${response.data.results.length} people`);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching popular people:', error.response?.status, error.message);
      // Fallback to mock data on error
      console.log('🎭 Falling back to mock people data');
      return {
        ...mockPopularPeople,
        page: page
      };
    }
  },

  // Search people
  searchPeople: async (query, page = 1) => {
    // Check if API is enabled and properly configured
    if (!API_ENABLED || fallback.useMockData) {
      console.warn('🎭 Using mock people search data - API not enabled or configured');
      await new Promise(resolve => setTimeout(resolve, fallback.mockDataDelay));
      
      // Filter mock data based on search query
      const filteredPeople = mockPopularPeople.results.filter(person =>
        person.name.toLowerCase().includes(query.toLowerCase())
      );
      
      return {
        page: page,
        results: filteredPeople,
        total_pages: Math.ceil(filteredPeople.length / 20),
        total_results: filteredPeople.length
      };
    }

    try {
      console.log(`📡 Searching people: "${query}" - Page ${page}`);
      const response = await tmdbApi.get('/search/person', {
        params: { 
          query: query,
          page: page
        }
      });
      console.log(`✅ Found ${response.data.results.length} people for "${query}"`);
      return response.data;
    } catch (error) {
      console.error('❌ Error searching people:', error.response?.status, error.message);
      // Fallback to mock search on error
      const filteredPeople = mockPopularPeople.results.filter(person =>
        person.name.toLowerCase().includes(query.toLowerCase())
      );
      
      return {
        page: page,
        results: filteredPeople,
        total_pages: Math.ceil(filteredPeople.length / 20),
        total_results: filteredPeople.length
      };
    }
  },

  // Get person details
  getPersonDetails: async (personId) => {
    try {
      const response = await tmdbApi.get(`/person/${personId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching person details:', error);
      throw error;
    }
  },
};

// Helper function to get full image URL
export const getImageUrl = (imagePath, size = 'w500') => {
  if (!imagePath) return null;
  
  // If it's already a full URL (for mock data), return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Use image base URL from JSON configuration
  return `${IMAGE_BASE_URL}${size}${imagePath}`;
};

// Helper function to format genres
export const formatGenres = (genres) => {
  if (!genres || !Array.isArray(genres)) return [];
  return genres.slice(0, 3).map(genre => genre.name);
};

export default movieService;
