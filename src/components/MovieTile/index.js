import React from "react";
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
  VoteCount,
} from "./styled";
import StarSvg from "../../images/Star.svg";
import { getImageUrl } from "../../services/tmdbApi";

const MovieTile = ({ movie, genres = [] }) => {
  const {
    title,
    poster_path,
    release_date,
    genre_ids,
    vote_average,
    vote_count,
  } = movie;

  const genreMap = genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  const movieGenres =
    genre_ids
      ?.slice(0, 3)
      .map((id) => genreMap[id])
      .filter(Boolean) || [];

  const year = release_date ? new Date(release_date).getFullYear() : "";

  const posterUrl =
    getImageUrl(poster_path) ||
    "https://via.placeholder.com/324x482/C4C4C4/FFFFFF?text=No+Image";

  return (
    <MovieCard>
      <MoviePoster
        src={posterUrl}
        alt={title}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/324x482/C4C4C4/FFFFFF?text=No+Image";
        }}
      />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        {year && <MovieYear>{year}</MovieYear>}
        {movieGenres.length > 0 && (
          <GenreTags>
            {movieGenres.map((genre, index) => (
              <GenreTag key={index}>{genre}</GenreTag>
            ))}
          </GenreTags>
        )}
        <RatingSection>
          <StarIcon>
            <img src={StarSvg} alt="Star" />
          </StarIcon>
          <Rating>{vote_average ? vote_average.toFixed(1) : "N/A"}</Rating>
          <VoteCount>
            {vote_count > 0 ? `${vote_count} votes` : "no votes"}
          </VoteCount>
        </RatingSection>
      </MovieInfo>
    </MovieCard>
  );
};

export default MovieTile;
