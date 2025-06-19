import React, { useState, useEffect } from 'react';
import Header from '../Header';
import MovieTile from '../MovieTile';
import Pagination from '../Pagination';
import Loading from '../Loading';
import ErrorState from '../ErrorState';
import { MainContainer, SectionTitle, MoviesGrid } from './styled';
import { movieService } from '../../services/tmdbApi';

const HomePage = () => {  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Fetch genres on component mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await movieService.getGenres();
        setGenres(genresData);
      } catch (err) {
        console.error('Error fetching genres:', err);
        // Don't set error for genres, just continue without them
      }
    };

    fetchGenres();
  }, []);
  // Fetch movies when page changes or search query changes
  useEffect(() => {
    const fetchMovies = async () => {
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
        console.error('Error fetching movies:', err);
        setError(err.message || 'Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage, searchQuery, isSearching]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(true);
    setCurrentPage(1);
  };

  const handleRetry = () => {
    setError(null);
    setCurrentPage(1);
  };

  const resetToPopular = () => {
    setSearchQuery('');
    setIsSearching(false);
    setCurrentPage(1);
  };
  const sectionTitle = isSearching 
    ? `Search results for "${searchQuery}"` 
    : 'Popular movies';

  if (loading) {
    return (
      <>
        <Header onSearch={handleSearch} />
        <MainContainer>
          <SectionTitle>{sectionTitle}</SectionTitle>
          <Loading message={isSearching ? "Searching movies..." : "Loading popular movies..."} />
        </MainContainer>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header onSearch={handleSearch} />
        <MainContainer>
          <SectionTitle>{sectionTitle}</SectionTitle>          <ErrorState 
            title="Oops! Something went wrong"
            message={`We couldn't fetch the movie data. Please check your internet connection and try again.`}
            onRetry={handleRetry}
            isNoResults={false}
          />
        </MainContainer>
      </>
    );
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <MainContainer>
        <SectionTitle>{sectionTitle}</SectionTitle>        {isSearching && movies.length === 0 && (
          <ErrorState 
            title={`Sorry, there are no results for "${searchQuery}"`}
            message="Try searching for a different movie title or browse our popular movies instead."
            onRetry={resetToPopular}
            isNoResults={true}
          />
        )}
        {movies.length > 0 && (
          <>
            <MoviesGrid>
              {movies.map(movie => (
                <MovieTile 
                  key={movie.id} 
                  movie={movie} 
                  genres={genres}
                />
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
    </>
  );
};

export default HomePage;
