import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../api/api";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchPopularMovies();
        setMovies(moviesData);
      } catch (error) {
        setError("Error fetching movies!");
      }
    };
    loadMovies();
  }, []);

  const handleClick = async () => {
    try {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
      setError(null);
    } catch (error) {
      setError("Error fetching movies!");
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <button onClick={handleClick}>Pobierz filmy</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.release_date})
          </li>
        ))}
      </ul>
    </div>
  );
}
