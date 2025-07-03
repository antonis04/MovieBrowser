import React, { useState, useEffect, useRef } from "react";
import Camera from "../../components/CameraSVG/index.js";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
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
  const debounceTimeoutRef = useRef(null);

  const isOnPeoplePage = location.pathname.includes('people');

  useEffect(() => {
    if (!isSearching) {
      setSearchInput("");
    }
  }, [isSearching]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    if (searchInput.trim()) {
      handleSearch(searchInput.trim());
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
      if (newValue.trim() === "") {
        resetSearch();
        navigate(isOnPeoplePage ? "/peoplelist" : "/movielist");
      } else {
        handleSearch(newValue.trim());
        navigate(isOnPeoplePage ? "/peoplelist" : "/movielist");
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
              <NavLink to="/movielist">Movies</NavLink>
            </Item>
            <Item>
              <NavLink 
                to="/peoplelist" 
                className={({ isActive }) => 
                  isActive || location.pathname.startsWith('/people') ? 'active' : ''
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
              placeholder={isOnPeoplePage ? "Search for people..." : "Search for movies..."}
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