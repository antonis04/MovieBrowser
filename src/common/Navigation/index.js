import React, { useState, useEffect, useRef } from "react";
import Camera from "../../components/CameraSVG/index.js";
import {
  NavLink,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useSearch } from "../../contexts/SearchContext";
import {
  List,
  Item,
  StyledNav,
  Logo,
  NavMenu,
  SearchWrapper,
  SearchInput,
  LogoText,
  SearchIcon,
  NavigationContainer,
} from "./styled";

const Navigation = () => {
  const [searchInput, setSearchInput] = useState("");
  const { handleSearch, resetSearch, isSearching } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const debounceTimeoutRef = useRef(null);

  const isOnPeoplePage = location.pathname.includes("people");
  const searchParam = searchParams.get("search");

  useEffect(() => {
    if (searchParam) {
      setSearchInput(searchParam);
      handleSearch(searchParam);
    } else if (!isSearching) {
      setSearchInput("");
    }
  }, [searchParam, isSearching, handleSearch]);

  useEffect(() => {
    if (!isSearching && !searchParam) {
      setSearchInput("");
    }
  }, [isSearching, searchParam]);

  useEffect(() => {
    const currentPath = location.pathname;
    const previousPath = location.state?.fromPath;

    if (
      !previousPath ||
      (currentPath.includes("movie") && previousPath.includes("movie")) ||
      (currentPath.includes("people") && previousPath.includes("people"))
    ) {
      return;
    }

    if (isSearching) {
      resetSearch();
      setSearchParams({});
      setSearchInput("");
    }
  }, [
    location.pathname,
    isSearching,
    resetSearch,
    setSearchParams,
    setSearchInput,
    location.state,
  ]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    const trimmedInput = searchInput.trim();
    if (trimmedInput) {
      handleSearch(trimmedInput);
      setSearchParams({ search: trimmedInput });
      navigate(
        isOnPeoplePage
          ? `/peoplelist?search=${trimmedInput}`
          : `/movielist?search=${trimmedInput}`
      );
    } else {
      resetSearch();
      setSearchParams({});
      navigate(isOnPeoplePage ? "/peoplelist" : "/movielist");
    }
  };

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    setSearchInput(newValue);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      const trimmedValue = newValue.trim();
      if (trimmedValue === "") {
        resetSearch();
        setSearchParams({});
        navigate(isOnPeoplePage ? "/peoplelist" : "/movielist");
      } else {
        handleSearch(trimmedValue);
        setSearchParams({ search: trimmedValue });
        navigate(
          isOnPeoplePage
            ? `/peoplelist?search=${trimmedValue}`
            : `/movielist?search=${trimmedValue}`
        );
      }
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e);
    }
  };

  return (
    <StyledNav>
      <NavigationContainer>
        <Logo>
          <NavLink to="/movielist">
            <Camera />
            <LogoText>Movies Browser</LogoText>
          </NavLink>
        </Logo>

        <NavMenu>
          <List>
            <Item>
              <NavLink
                to="/movielist"
                state={{ fromPath: location.pathname }}
                className={({ isActive }) =>
                  isActive ||
                  location.pathname === "/" ||
                  location.pathname.startsWith("/movie")
                    ? "active"
                    : ""
                }
              >
                Movies
              </NavLink>
            </Item>
            <Item>
              <NavLink
                to="/peoplelist"
                state={{ fromPath: location.pathname }}
                className={({ isActive }) =>
                  isActive || location.pathname.startsWith("/people")
                    ? "active"
                    : ""
                }
              >
                People
              </NavLink>
            </Item>
          </List>
        </NavMenu>

        <SearchWrapper>
          <form onSubmit={handleSearchSubmit}>
            <SearchInput
              type="text"
              placeholder={
                isOnPeoplePage ? "Search for people..." : "Search for movies..."
              }
              value={searchInput}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
            />
            <SearchIcon onClick={handleSearchSubmit} />
          </form>
        </SearchWrapper>
      </NavigationContainer>
    </StyledNav>
  );
};

export default Navigation;
