import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import ImagePlaceholder from "../../components/ImagePlaceholderWrapper/index";
import Loading from "../../components/Loading";
import ErrorState from "../../components/ErrorState";
import { peopleService } from "../../services/tmdbApi";
import { useSearch } from "../../contexts/SearchContext";
import { Pagination } from "../../common/PagesNumbering/index";
import { pageQueryParamName } from "../../common/QueryParamName";

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
      const params = new URLSearchParams(location.search); // Zadeklaruj params tutaj
      params.set(pageQueryParamName, 1);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    } else {
      window.location.reload();
    }
  };

  const resetToPopular = () => {
    resetSearch();
    const params = new URLSearchParams();
    params.set(pageQueryParamName, 1);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
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
                        <ImagePlaceholder type="person" />
                      )}
                      <Name>
                        <Actor>{person.name}</Actor>
                      </Name>
                    </PersonTitle>
                  </Link>
                ))}
              </CastRow>
            </Cast>

            <Pagination totalPages={totalPages} />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleList;
