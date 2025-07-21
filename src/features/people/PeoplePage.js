import { useParams } from "react-router-dom";
import { peopleService } from "../../services/tmdbApi";
import { Cast, CastRow } from "../../common/Cast/styled";
import { Container } from "../../common/Container/styled";
import { Title } from "../../common/Wrapper/styled";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ErrorState from "../../components/ErrorState";
import MovieTile from "../../components/MovieTile";
import { Link } from "react-router-dom";
import PersonTile from "../../components/PersonTile";

const PeoplePage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          message={error === "Person not found." ? "" : error}
          onRetry={handleRetry}
          isNoResults={error === "Person not found."}
        />
      </>
    );
  }

  return (
    <>
      <Container>
        <PersonTile person={person} isDetailed={true} />

        {credits.length > 0 && (
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
        )}
      </Container>
    </>
  );
};

export default PeoplePage;
