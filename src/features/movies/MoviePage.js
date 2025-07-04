import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";
import { movieService } from "../../services/tmdbApi.js";
import {
  Container,
  HeaderContent,
  HeaderPage,
  ImagePosterBig,
  Overlay,
  HeaderTitle,
  HeaderDetails,
  HeaderVotes,
  HeaderNote,
  HeaderSummary,
  HeaderRow,
} from "../../common/Container/styled.js";
import {
  Content,
  Description,
  Tag,
  Tags,
  Title,
  Wrapper,
  Year,
  Details,
  DetailStar,
  Note,
  Paragraph,
  Section,
  Strong,
  Summary,
  Votes,
  MoviePoster,
} from "../../common/Wrapper/styled.js";
import StarSVG from "../../components/StarSVG/StarSVG.js";
import {
  Actor,
  Cast,
  CastRow,
  EmptyPictureWrapper,
  Name,
  PersonTitle,
  Picture,
} from "../../common/Cast/styled.js";
import Loading from "../../components/Loading/index.js";
import ErrorState from "../../components/ErrorState/index.js";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieData = async () => {
      setLoading(true);
      setError(null);

      try {
        const movieData = await movieService.getMovieDetails(id);
        const creditsData = await movieService.getMovieCredits(id);

        if (!movieData) {
          setError("Movie not found.");
          setMovie(null);
        } else {
          setMovie(movieData);
          setCredits(creditsData);
        }
      } catch (error) {
        console.error("Error loading movie data:", error);
        setError(
          "A problem occurred while loading data. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    loadMovieData();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <>
        <Loading message="Loading movie data..." />
      </>
    );
  }

  if (error) {
    const handleRetry = () => {
      window.location.reload();
    };

    return (
      <>
        <ErrorState
          title={
            error === "Movie not found."
              ? "Movie not found"
              : "Oops! An error occurred!"
          }
          message={
            error === "Movie not found."
              ? "It seems that the movie with the given ID does not exist or the data is unavailable."
              : error
          }
          onRetry={handleRetry}
          isNoResults={error === "Movie not found."}
        />
      </>
    );
  }

  return (
    <>
      <HeaderPage>
        <ImagePosterBig>
          {movie.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <EmptyPictureWrapper large>
              <EmptyPicture width="100%" height="400px" />
            </EmptyPictureWrapper>
          )}
          <HeaderContent>
            <HeaderTitle>{movie.title}</HeaderTitle>
            <HeaderDetails>
              <HeaderRow>
                <HeaderSummary>
                  <StarSVG />
                  {movie.vote_average.toFixed(1)}
                </HeaderSummary>
                <HeaderNote>/10</HeaderNote>
              </HeaderRow>
              <HeaderVotes>
                {movie.vote_count === 0
                  ? "No votes"
                  : `${movie.vote_count} votes`}
              </HeaderVotes>
            </HeaderDetails>
          </HeaderContent>
        </ImagePosterBig>
        <Overlay />
      </HeaderPage>

      <Container>
        <Wrapper>
          {movie.poster_path ? (
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <EmptyPictureWrapper small>
              <EmptyPicture width={312} height={464} />
            </EmptyPictureWrapper>
          )}
          <Content>
            <Title>{movie.title}</Title>
            <Year>{new Date(movie.release_date).getFullYear()}</Year>
            <Section>
              {movie.production_countries &&
                movie.production_countries.length > 0 && (
                  <Paragraph>
                    <Strong>Production:</Strong>{" "}
                    {movie.production_countries
                      .map((country) => country.name)
                      .join(", ")}
                  </Paragraph>
                )}
              <Paragraph>
                <Strong>Release date:</Strong> {formatDate(movie.release_date)}
              </Paragraph>
            </Section>

            <Tags>
              {movie.genres.map((genre) => (
                <Tag key={genre.id}>{genre.name}</Tag>
              ))}
            </Tags>

            <Details>
              <DetailStar>
                <StarSVG />
                <Summary>{movie.vote_average.toFixed(1)}</Summary>
              </DetailStar>
              <Note>/10</Note>
              <Votes>
                {movie.vote_count === 0
                  ? "No votes"
                  : `${movie.vote_count} votes`}
              </Votes>{" "}
            </Details>

            <Description>{movie.overview}</Description>
          </Content>
        </Wrapper>

        <Cast>
          <Title>Cast</Title>
          <CastRow>
            {credits.cast.map((person) => (
              <PersonTitle key={person.id}>
                {person.profile_path ? (
                  <Picture
                    src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                    alt={person.name}
                  />
                ) : (
                  <EmptyPictureWrapper>
                    <EmptyPicture width="100%" height="100%" />
                  </EmptyPictureWrapper>
                )}
                <Name>
                  <Actor>{person.name}</Actor>
                  <Strong>{person.character}</Strong>
                </Name>
              </PersonTitle>
            ))}
          </CastRow>
        </Cast>

        <Cast>
          <Title>Crew</Title>
          <CastRow>
            {credits.crew.map((person) => (
              <PersonTitle key={person.id}>
                {person.profile_path ? (
                  <Picture
                    src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                    alt={person.name}
                  />
                ) : (
                  <EmptyPictureWrapper>
                    <EmptyPicture width="100%" height="100%" />
                  </EmptyPictureWrapper>
                )}
                <Name>
                  <Actor>{person.name}</Actor>
                  <Strong>{person.job}</Strong>
                </Name>
              </PersonTitle>
            ))}
          </CastRow>
        </Cast>
      </Container>
    </>
  );
};

export default MoviePage;
