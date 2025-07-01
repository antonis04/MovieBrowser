import { useParams } from "react-router-dom";
import { fetchPersonDetails, fetchPersonCredits } from "../../api/api";
import {
  Actor,
  Cast,
  CastRow,
  Name,
  PersonTitle,
  Picture,
} from "../../common/Cast/styled";
import { Container } from "../../common/Container/styled";
import {
  Content,
  Description,
  Paragraph,
  Section,
  Title,
  Wrapper,
  Strong,
} from "../../common/Wrapper/styled";
import { GlobalStyle } from "../../GlobalStyle";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";
import { useEffect, useState } from "react";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";

const PeoplePage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const personData = await fetchPersonDetails(id);
        const personCredits = await fetchPersonCredits(id);
        setPerson(personData);
        setCredits(personCredits);
      } catch (error) {
        console.error("Error loading person data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading) return <Loading/>;
  if (!person) return <Error/>;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          {person.profile_path ? (
            <Picture
              src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
              alt={person.name}
              style={{ width: "200px", height: "auto", borderRadius: "12px" }}
            />
          ) : (
            <EmptyPicture width={200} height={300} />
          )}
          <Content>
            <Title>{person.name}</Title>
            <Section>
              <Paragraph>
                <Strong>Birth:</Strong> {person.birthday || "Unknown"}
              </Paragraph>
              <Paragraph>
                <Strong>Place:</Strong> {person.place_of_birth || "Unknown"}
              </Paragraph>
            </Section>
            <Description>
              {person.biography || "No biography available."}
            </Description>
          </Content>
        </Wrapper>

        <Cast>
          <Title>Movies</Title>
          <CastRow>
            {credits.map((movie) => (
              <PersonTitle key={movie.id}>
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
                  <Strong>{movie.character || "Unknown role"}</Strong>
                </Name>
              </PersonTitle>
            ))}
          </CastRow>
        </Cast>
      </Container>
    </>
  );
};

export default PeoplePage;
