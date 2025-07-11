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
import ImagePlaceholder from "../../components/ImagePlaceholderWrapper/index.js";
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

  return (
    <MovieCard>
      {poster_path ? (
        <MoviePoster src={getImageUrl(poster_path)} alt={title} />
      ) : (
        <ImagePlaceholder type="movieTile" />
      )}
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
            <ImagePlaceholder type="star" />
          </StarIcon>
          <Rating>
            {typeof vote_average === "number" && vote_average > 0
              ? vote_average.toFixed(1)
              : "N/A"}
          </Rating>
          <VoteCount>
            {vote_count > 0 ? `${vote_count} votes` : "No votes yet"}
          </VoteCount>
        </RatingSection>
      </MovieInfo>
    </MovieCard>
  );
};

export default MovieTile;
