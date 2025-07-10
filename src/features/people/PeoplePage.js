import { useParams } from "react-router-dom";
import { peopleService } from "../../services/tmdbApi";
import { Cast, CastRow, Picture } from "../../common/Cast/styled";
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
import ImagePlaceholder from "../../components/ImagePlaceholderWrapper/index";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ErrorState from "../../components/ErrorState";
import MovieTile from "../../components/MovieTile";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const PeoplePage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatBirthLabel = () => {
    return isMobile ? "Birth:" : "Date of birth:";
  };

  const formatPlaceLabel = () => {
    return isMobile ? "Place of birth:" : "Place of birth:";
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const personData = await peopleService.getPersonDetails(id);
        const personCredits = await peopleService.getPersonCredits(id);
        if (!personData) {
          setError("Person not found.");
          setPerson(null);
        } else {
          setPerson(personData);
          setCredits(personCredits);
        }
      } catch (error) {
        console.error("Error loading person data:", error);
        setError(
          "A problem occurred while loading data. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading) {
    return (
      <>
        <Loading message="Loading person data..." />
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
            error === "Person not found."
              ? "Person not found"
              : "Oops! An error occurred!"
          }
          message={
            error === "Person not found."
              ? "It seems that the person with the given ID does not exist or the data is unavailable."
              : error
          }
          onRetry={handleRetry}
          isNoResults={error === "Person not found."}
        />
      </>
    );
  }

  if (!person)
    return (
      <ErrorState
        title="Person data unavailable"
        message="We could not retrieve details for this person."
        onRetry={() => window.location.reload()}
      />
    );

  return (
    <>
      <Container>
        <Wrapper>
          {person.profile_path ? (
            <Picture
              src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
              alt={person.name}
              style={{ width: "200px", height: "auto", borderRadius: "12px" }}
            />
          ) : (
            <ImagePlaceholder type="person" />
          )}
          <Content>
            <Title>{person.name}</Title>
            <Section>
              <Paragraph>
                <Strong>{formatBirthLabel()}</Strong>{" "}
                {formatDate(person.birthday)}
              </Paragraph>
              <Paragraph>
                <Strong>{formatPlaceLabel()}</Strong>{" "}
                {person.place_of_birth || "Unknown"}
              </Paragraph>
            </Section>
            <Description>
              {person.biography || "No biography available."}
            </Description>
          </Content>
        </Wrapper>

        <Cast>
          <Title>Movies ({credits.length})</Title>
          <CastRow>
            {credits.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MovieTile movie={movie} />
              </Link>
            ))}
          </CastRow>
        </Cast>
      </Container>
    </>
  );
};

export default PeoplePage;
