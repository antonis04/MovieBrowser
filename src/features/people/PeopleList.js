import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPopularPeople } from "../../api/api";
import {
  Cast,
  CastRow,
  PersonTitle,
  Picture,
  Name,
  Actor,
} from "../../common/Cast/styled";
import { Container } from "../../common/Container/styled";
import { Title } from "../../common/Wrapper/styled";
import { GlobalStyle } from "../../GlobalStyle";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPeople = async () => {
      try {
        const data = await fetchPopularPeople();
        setPeople(data);
      } catch (error) {
        console.error("Error loading people:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPeople();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Cast>
          <Title>Popular People</Title>
          <CastRow>
            {people.map((person) => (
              <Link
                key={person.id}
                to={`/people/${person.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <PersonTitle>
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
                  </Name>
                </PersonTitle>
              </Link>
            ))}
          </CastRow>
        </Cast>
      </Container>
    </>
  );
};

export default PeopleList;
