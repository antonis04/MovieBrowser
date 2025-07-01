import React, { useEffect, useState } from "react";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";
import { GlobalStyle } from "../../GlobalStyle.js";
import { fetchMovieCredits, fetchMovieDetails } from "../../api/api.js";
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
} from "../../common/Wrapper/styled.js";
import StarSVG from "../../components/StarSVG/StarSVG.js";
import {
  Actor,
  Cast,
  CastRow,
  Name,
  PersonTitle,
  Picture,
} from "../../common/Cast/styled.js";
import { useParams } from "react-router-dom";
import {Loading} from "../../common/Loading/index.js";
import {Error} from "../../common/Error/index.js";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        const creditsData = await fetchMovieCredits(id);
        setMovie(movieData);
        setCredits(creditsData);
      } catch (error) {
        console.error("Error loading movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovieData();
  }, [id]);

  if (loading) return <Loading/>;
  if (!movie) return <Error/>;

  return (
    <>
      <GlobalStyle />
      <HeaderPage>
        <ImagePosterBig>
          {movie.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <EmptyPicture width="100%" height="400px" />
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
              <HeaderVotes>{movie.vote_count} votes</HeaderVotes>
            </HeaderDetails>
          </HeaderContent>
        </ImagePosterBig>
        <Overlay />
      </HeaderPage>

      <Container>
        <Wrapper>
          {movie.poster_path ? (
            <Picture
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ borderRadius: "12px" }}
            />
          ) : (
            <EmptyPicture width={200} height={300} />
          )}
          <Content>
            <Title>{movie.title}</Title>
            <Year>{new Date(movie.release_date).getFullYear()}</Year>
            <Section>
              <Paragraph>
                <Strong>Genres:</Strong>{" "}
                {movie.genres.map((g) => g.name).join(", ")}
              </Paragraph>
              <Paragraph>
                <Strong>Release date:</Strong> {movie.release_date}
              </Paragraph>
              <Paragraph>
                <Strong>Runtime:</Strong> {movie.runtime} min
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
              <Votes>{movie.vote_count} votes</Votes>
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
                  <EmptyPicture width={177} height={264} />
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
                  <EmptyPicture width={177} height={264} />
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
