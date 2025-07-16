// This is a placeholder for the Mulan poster
// In a real app, you would fetch this from TMDB API
// src/services/mockData.js

export const mulanPosterUrl =
  "https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg";

export const mockPopularMovies = {
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

export const mockGenres = [
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

export const mockPopularPeople = {
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

export const mockMovieCredits = {
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
