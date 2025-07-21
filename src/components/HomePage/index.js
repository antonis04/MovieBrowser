import React, { useState, useEffect } from "react";
import MovieTile from "../MovieTile";
import Pagination from "../Pagination";
import Loading from "../Loading";
import ErrorState from "../ErrorState";
import { MainContainer, SectionTitle, MoviesGrid } from "./styled";
import { movieService } from "../../services/tmdbApi";
import { useSearch } from "../../contexts/SearchContext";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;
        if (isSearching && searchQuery) {
          data = await movieService.searchMovies(searchQuery, currentPage);
        } else {
          data = await movieService.getPopularMovies(currentPage);
        }

        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500));
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err.message || "Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
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

  const shouldShowSectionTitle =
    !loading && !error && !(isSearching && movies.length === 0);
  const sectionTitle = isSearching
    ? `Search results for "${searchQuery}"`
    : "Popular movies";

  if (loading) {
    return (
      <MainContainer>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <Loading
          message={
            isSearching ? "Searching movies..." : "Loading popular movies..."
          }
        />
      </MainContainer>
    );
  }

  if (error) {
    return (
      <MainContainer>
        <ErrorState
          title="Oops! Something went wrong"
          message={`We couldn't fetch the movie data. Please check your internet connection and try again.`}
          onRetry={handleRetry}
          isNoResults={false}
        />
      </MainContainer>
    );
  }

  if (isSearching && movies.length === 0) {
    return (
      <MainContainer>
        <ErrorState
          isNoResults={true}
          title={`Sorry, there are no results for "${searchQuery}"`}
          message=""
          onRetry={resetToPopular}
        />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      {shouldShowSectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}{" "}
      {movies.length > 0 && (
        <>
          <MoviesGrid>
            {movies.map((movie) => (
              <MovieTile key={movie.id} movie={movie} genres={genres} />
            ))}
          </MoviesGrid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </MainContainer>
  );
};

export default HomePage;
