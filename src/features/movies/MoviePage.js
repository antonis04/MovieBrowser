import React, { useEffect, useState } from "react";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";
import { ReactComponent as PosterBig } from "../../images/PosterBig.svg";
import { GlobalStyle } from "../../GlobalStyle.js";
import { fetchMovieCredits } from "../../api/api.js";
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
import PosterSVG from "../../components/PosterSVG/index.js";
import StarSVG from "../../components/StarSVG/StarSVG.js";
import {
  Actor,
  Cast,
  CastRow,
  Name,
  PersonTitle,
  Picture,
} from "../../common/Cast/styled.js";

const MoviePage = () => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const loadCredits = async () => {
      try {
        const data = await fetchMovieCredits(337401);
        setCast(data.cast);
        setCrew(data.crew);
      } catch (error) {
        console.error(error);
      }
    };

    loadCredits();
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeaderPage>
        <ImagePosterBig>
          <PosterBig />
          <HeaderContent>
            <HeaderTitle>Mulan long title</HeaderTitle>
            <HeaderDetails>
              <HeaderRow>
                <HeaderSummary>
                  <StarSVG />
                  7,8
                </HeaderSummary>
                <HeaderNote>/10</HeaderNote>
              </HeaderRow>

              <HeaderVotes>335 votes</HeaderVotes>
            </HeaderDetails>
          </HeaderContent>
        </ImagePosterBig>
        <Overlay />
      </HeaderPage>
      <Container>
        <Wrapper>
          <PosterSVG />
          <Content>
            <Title>Mulan</Title>
            <Year>2020</Year>
            <Section>
              <Paragraph>
                <Strong>Production:</Strong> China, United Sates of America
              </Paragraph>
              <Paragraph>
                <Strong>Release date:</Strong> 24.10.2020
              </Paragraph>
            </Section>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Adventure</Tag>
              <Tag>Drama</Tag>
            </Tags>
            <Details>
              <DetailStar>
                <StarSVG />
                <Summary>7,8</Summary>
              </DetailStar>
              <Note>/10</Note>
              <Votes>335 votes</Votes>
            </Details>

            <Description>
              A young Chinese maiden disguises herself as a male warrior in
              order to save her father. Disguises herself as a male warrior in
              order to save her father. A young Chinese maiden disguises herself
              as a male warrior in order to save her father.
            </Description>
          </Content>
        </Wrapper>

        <Cast>
          <Title>Cast</Title>
          <CastRow>
            {cast.map((person) => (
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
            {crew.map((person) => (
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
