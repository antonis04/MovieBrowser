import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import ErrorState from "../../components/ErrorState";
import { peopleService } from "../../services/tmdbApi";
import { useSearch } from "../../contexts/SearchContext";

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { searchQuery, isSearching, resetSearch } = useSearch();

  useEffect(() => {
    const loadPeople = async () => {
      try {
        setLoading(true);
        setError(null);

        let data;
        if (isSearching && searchQuery) {
          data = await peopleService.searchPeople(searchQuery, currentPage);
        } else {
          data = await peopleService.getPopularPeople(currentPage);
        }

        setPeople(data.results);
        setTotalPages(Math.min(data.total_pages, 500)); // TMDB API limit
      } catch (err) {
        console.error("Error fetching people:", err);
        setError(err.message || "Failed to fetch people");
      } finally {
        setLoading(false);
      }
    };

    loadPeople();
  }, [currentPage, searchQuery, isSearching]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, isSearching]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetry = () => {
    setError(null);
    setCurrentPage(1);
  };

  const resetToPopular = () => {
    resetSearch();
    setCurrentPage(1);
  };

  const sectionTitle = isSearching
    ? `Search results for "${searchQuery}"`
    : "Popular People";

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Title>{sectionTitle}</Title>
          <Loading
            message={
              isSearching ? "Searching people..." : "Loading popular people..."
            }
          />
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Title>{sectionTitle}</Title>
          <ErrorState
            title="Oops! Something went wrong"
            message="We couldn't fetch the people data. Please check your internet connection and try again."
            onRetry={handleRetry}
            isNoResults={false}
          />
        </Container>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>{sectionTitle}</Title>

        {isSearching && people.length === 0 && (
          <ErrorState
            title={`Sorry, there are no results for "${searchQuery}"`}
            message="Try searching for a different person or browse our popular people instead."
            onRetry={resetToPopular}
            isNoResults={true}
          />
        )}

        {people.length > 0 && (
          <>
            <Cast>
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

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleList;
