import React from 'react';
import Header from '../Header';
import MovieTile from '../MovieTile';
import Pagination from '../Pagination';
import { MainContainer, SectionTitle, MoviesGrid } from './styled';

const HomePage = () => {
  // Mock data that matches the Figma design
  const mockMovies = [
    {
      id: 1,
      title: 'Mulan',
      release_date: '2020-09-04',
      genre_ids: [28, 12, 18],
      vote_average: 7.8,
      vote_count: 35,
      poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
    },
    {
      id: 2,
      title: 'Mulan',
      release_date: '2020-09-04', 
      genre_ids: [28],
      vote_average: 7.8,
      vote_count: 58,
      poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
    },
    {
      id: 3,
      title: 'Mulan',
      release_date: '2020-09-04',
      genre_ids: [28],
      vote_average: 7.8,
      vote_count: 49,
      poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
    },
    {
      id: 4,
      title: 'Mulan long title long title Mulan long title long',
      release_date: '2020-09-04',
      genre_ids: [28],
      vote_average: 7.8,
      vote_count: 35,
      poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
    },
    {
      id: 5,
      title: 'Mulan',
      release_date: '2020-09-04',
      genre_ids: [28, 12, 18],
      vote_average: 7.8,
      vote_count: 35,
      poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
    },
    {
      id: 6,
      title: 'Mulan',
      release_date: '2020-09-04',
      genre_ids: [28],
      vote_average: 7.8,
      vote_count: 58,
      poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
    },
    {
      id: 7,
      title: 'Mulan',
      release_date: '2020-09-04',
      genre_ids: [28],
      vote_average: 7.8,
      vote_count: 49,
      poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
    },
    {
      id: 8,
      title: 'Mulan long title long titleMulan long title long',
      release_date: '2020-09-04',
      genre_ids: [28],
      vote_average: 7.8,
      vote_count: 35,
      poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
    }
  ];

  return (
    <>
      <Header />
      <MainContainer>
        <SectionTitle>Popular movies</SectionTitle>
        <MoviesGrid>
          {mockMovies.map(movie => (
            <MovieTile key={movie.id} movie={movie} />
          ))}
        </MoviesGrid>
        <Pagination currentPage={1} totalPages={500} />
      </MainContainer>
    </>
  );
};

export default HomePage;
