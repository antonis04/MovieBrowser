import React from 'react';
import { 
  MovieCard, 
  MoviePoster, 
  MovieInfo, 
  MovieTitle, 
  MovieYear, 
  GenreTags, 
  GenreTag, 
  RatingSection, 
  StarIcon, 
  Rating, 
  VoteCount 
} from './styled';
import StarSvg from '../../images/Star.svg';

const MovieTile = ({ movie }) => {
  const { title, release_date, genre_ids, vote_average, vote_count } = movie;
  
  // Mock genre mapping - in real app this would come from TMDB API
  const genreMap = {
    28: 'Action',
    12: 'Adventure', 
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
  };

  const genres = genre_ids?.slice(0, 3).map(id => genreMap[id]).filter(Boolean) || ['Action', 'Adventure', 'Drama'];
  const year = release_date ? new Date(release_date).getFullYear() : '2020';

  return (    <MovieCard>
      <MoviePoster 
        src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"
        alt={title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/324x482/8B0000/FFFFFF?text=MULAN";
        }}
      />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieYear>{year}</MovieYear>
        <GenreTags>
          {genres.map((genre, index) => (
            <GenreTag key={index}>{genre}</GenreTag>
          ))}
        </GenreTags>        <RatingSection>
          <StarIcon>
            <img src={StarSvg} alt="Star" />
          </StarIcon>
          <Rating>{vote_average?.toFixed(1) || '7.8'}</Rating>
          <VoteCount>{vote_count || '35'} votes</VoteCount>
        </RatingSection>
      </MovieInfo>
    </MovieCard>
  );
};

export default MovieTile;
