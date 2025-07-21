import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Cast, CastRow } from "../../common/Cast/styled";
import { Container } from "../../common/Container/styled";
import { Title } from "../../common/Wrapper/styled";
import { GlobalStyle } from "../../GlobalStyle";
import Loading from "../../components/Loading";
import ErrorState from "../../components/ErrorState";
import { peopleService } from "../../services/tmdbApi";
import { useSearch } from "../../contexts/SearchContext";
import { Pagination } from "../../common/PagesNumbering/index";
import { pageQueryParamName } from "../../common/QueryParamName";
import PersonTile from "../../components/PersonTile";

const PeopleList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const { searchQuery, isSearching, resetSearch } = useSearch();

  const query = new URLSearchParams(location.search);
  const currentPageFromUrl = parseInt(query.get(pageQueryParamName)) || 1;

  useEffect(() => {
    if (currentPageFromUrl !== 1 && (searchQuery || isSearching)) {
      const params = new URLSearchParams(location.search);
      params.set(pageQueryParamName, 1);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [
    searchQuery,
    isSearching,
    location.search,
    location.pathname,
    currentPageFromUrl,
    navigate,
  ]);

  useEffect(() => {
    const loadPeople = async () => {
      try {
        setLoading(true);
        setError(null);

        let data;
        if (isSearching && searchQuery) {
          data = await peopleService.searchPeople(
            searchQuery,
            currentPageFromUrl
          );
        } else {
          data = await peopleService.getPopularPeople(currentPageFromUrl);
        }

        setPeople(data.results);
        setTotalPages(Math.min(data.total_pages, 500));
      } catch (err) {
        console.error("Error fetching people:", err);
        setError(err.message || "Failed to fetch people");
      } finally {
        setLoading(false);
      }
    };

    loadPeople();
  }, [
    currentPageFromUrl,
    searchQuery,
    isSearching,
    location.search,
    location.pathname,
  ]);

  const handleRetry = () => {
    setError(null);
    if (currentPageFromUrl !== 1) {
      const params = new URLSearchParams(location.search);
      params.set(pageQueryParamName, 1);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    } else {
      window.location.reload();
    }
  };

  const resetToPopularPeople = () => {
    resetSearch();
    navigate(`/people?${pageQueryParamName}=1`, { replace: true });
  };

  const shouldShowSectionTitle =
    !loading && !error && !(isSearching && people.length === 0);
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

  if (isSearching && people.length === 0) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <ErrorState
            isNoResults={true}
            title={`Sorry, there are no results for "${searchQuery}"`}
            message=""
            onRetry={resetToPopularPeople}
          />
        </Container>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        {shouldShowSectionTitle && <Title>{sectionTitle}</Title>}

        {people.length > 0 && (
          <>
            <Cast>
              <CastRow>
                {people.map((person) => (
                  <PersonTile
                    key={person.id}
                    person={person}
                    isDetailed={false}
                  />
                ))}
              </CastRow>
            </Cast>

            <Pagination
              totalPages={totalPages}
              currentPage={currentPageFromUrl}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleList;
