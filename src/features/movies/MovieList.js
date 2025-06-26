import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../api/api";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { Container } from "../../common/Container/styled";
import {
  Cast,
  CastRow,
  Name,
  Picture,
  PersonTitle,
  Actor,
} from "../../common/Cast/styled";
import { Strong, Title } from "../../common/Wrapper/styled";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";

const MovieList = () => {
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

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Popular Movies</Title>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Cast>
          <CastRow>
            {movies.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <PersonTitle>
                  {movie.poster_path ? (
                    <Picture
                      src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                      alt={movie.title}
                    />
                  ) : (
                    <EmptyPicture width={177} height={264} />
                  )}
                  <Name>
                    <Actor>{movie.title}</Actor>
                    <Strong>
                      {movie.release_date
                        ? movie.release_date.slice(0, 4)
                        : "Unknown"}
                    </Strong>
                  </Name>
                </PersonTitle>
              </Link>
            ))}
          </CastRow>
        </Cast>
      </Container>
    </>
  );
};

export default MovieList;
