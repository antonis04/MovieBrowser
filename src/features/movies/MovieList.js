import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { Container } from "../../common/Container/styled";
import { Title } from "../../common/Wrapper/styled";
import { Pagination } from "../../common/PagesNumbering/index";
import Loading from "../../components/Loading";
import ErrorState from "../../components/ErrorState";
import MovieTile from "../../components/MovieTile";
import { movieService } from "../../services/tmdbApi";
import { useSearch } from "../../contexts/SearchContext";
import { MoviesGrid } from "./styled";
import { pageQueryParamName } from "../../common/QueryParamName";

const MovieList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const { searchQuery, isSearching, resetSearch } = useSearch();

  const query = new URLSearchParams(location.search);
  const currentPageFromUrl = parseInt(query.get(pageQueryParamName)) || 1;

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
    if (currentPageFromUrl !== 1 && (searchQuery || isSearching)) {
      const params = new URLSearchParams(location.search);
      params.set(pageQueryParamName, 1);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [
    searchQuery,
    isSearching,
    location.search,
    location.pathname,
    currentPageFromUrl,
    navigate,
  ]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        setTotalResults(0);

        const startTime = Date.now();
        let data;
        if (isSearching && searchQuery) {
          data = await movieService.searchMovies(
            searchQuery,
            currentPageFromUrl
          );
        } else {
          data = await movieService.getPopularMovies(currentPageFromUrl);
        }

        const loadTime = Date.now() - startTime;
        const minLoadTime = 800;
        if (loadTime < minLoadTime) {
          await new Promise((resolve) =>
            setTimeout(resolve, minLoadTime - loadTime)
          );
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
  }, [
    currentPageFromUrl,
    searchQuery,
    isSearching,
    location.search,
    location.pathname,
  ]);

  const handleRetry = () => {
    setError(null);
    if (currentPageFromUrl !== 1) {
      const params = new URLSearchParams(location.search);
      params.set(pageQueryParamName, 1);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    } else {
      window.location.reload();
    }
  };

  const resetToPopularMovies = () => {
    resetSearch();
    navigate(`/movies?${pageQueryParamName}=1`, { replace: true });
  };

  const shouldShowSectionTitle =
    !loading && !error && !(isSearching && movies.length === 0);
  const sectionTitle = isSearching
    ? !loading && totalResults > 0
      ? `Search results for "${searchQuery}" (${totalResults})`
      : `Search results for "${searchQuery}"`
    : "Popular Movies";

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Title>{sectionTitle}</Title>
          <Loading />
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <GlobalStyle />
        <Container>
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

  if (isSearching && movies.length === 0) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <ErrorState
            isNoResults={true}
            title={`Sorry, there are no results for "${searchQuery}"`}
            message=""
            onRetry={resetToPopularMovies}
          />
        </Container>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        {shouldShowSectionTitle && <Title>{sectionTitle}</Title>}

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
              totalPages={totalPages}
              currentPage={currentPageFromUrl}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default MovieList;
