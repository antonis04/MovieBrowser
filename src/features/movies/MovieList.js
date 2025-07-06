import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { Container } from "../../common/Container/styled";
import { Title } from "../../common/Wrapper/styled";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import ErrorState from "../../components/ErrorState";
import MovieTile from "../../components/MovieTile";
import { movieService } from "../../services/tmdbApi";
import { useSearch } from "../../contexts/SearchContext";
import { MoviesGrid } from "./styled";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const { searchQuery, isSearching, resetSearch } = useSearch();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await movieService.getGenres();
        setGenres(genresData);
      } catch (err) {
        console.error("Error fetching genres:", err);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        setTotalResults(0);

        const startTime = Date.now();
        let data;
        if (isSearching && searchQuery) {
          data = await movieService.searchMovies(searchQuery, currentPage);
        } else {
          data = await movieService.getPopularMovies(currentPage);
        }

        const loadTime = Date.now() - startTime;
        const minLoadTime = 800;
        if (loadTime < minLoadTime) {
          await new Promise(resolve => setTimeout(resolve, minLoadTime - loadTime));
        }

        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500));
        setTotalResults(data.total_results);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err.message || "Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [currentPage, searchQuery, isSearching]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, isSearching]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetry = () => {
    setError(null);
    setCurrentPage(1);
  };

  const resetToPopular = () => {
    resetSearch();
    setCurrentPage(1);
  };

  const sectionTitle = isSearching
    ? loading 
      ? `Search results for "${searchQuery}"`
      : `Search results for "${searchQuery}" (${totalResults})`
    : "Popular Movies";

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Title>{sectionTitle}</Title>
          <Loading
            message={
              isSearching ? "Searching movies..." : "Loading popular movies..."
            }
          />
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Title>{sectionTitle}</Title>
          <ErrorState
            title="Oops! Something went wrong"
            message="We couldn't fetch the movie data. Please check your internet connection and try again."
            onRetry={handleRetry}
            isNoResults={false}
          />
        </Container>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>{sectionTitle}</Title>

        {isSearching && movies.length === 0 && (
          <ErrorState
            title={`Sorry, there are no results for "${searchQuery}"`}
            message=""
            onRetry={null}
            isNoResults={true}
          />
        )}

        {movies.length > 0 && (
          <>
            <MoviesGrid>
              {movies.map((movie) => (
                <Link
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MovieTile movie={movie} genres={genres} />
                </Link>
              ))}
            </MoviesGrid>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default MovieList;
