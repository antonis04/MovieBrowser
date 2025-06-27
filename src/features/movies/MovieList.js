import React, { useState, useEffect } from "react";
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
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import ErrorState from "../../components/ErrorState";
import { movieService } from "../../services/tmdbApi";
import { useSearch } from "../../contexts/SearchContext";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { searchQuery, isSearching, resetSearch } = useSearch();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data;
        if (isSearching && searchQuery) {
          data = await movieService.searchMovies(searchQuery, currentPage);
        } else {
          data = await movieService.getPopularMovies(currentPage);
        }
        
        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500)); // TMDB API limit
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err.message || "Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    
    loadMovies();
  }, [currentPage, searchQuery, isSearching]);

  // Reset to first page when search query changes
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
    ? `Search results for "${searchQuery}"`
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
            message="Try searching for a different movie title or browse our popular movies instead."
            onRetry={resetToPopular}
            isNoResults={true}
          />
        )}

        {movies.length > 0 && (
          <>
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
