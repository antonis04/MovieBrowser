import React, { useState, useEffect, useRef } from "react";
import Camera from "../../components/CameraSVG/index.js";
import { NavLink, useNavigate } from "react-router-dom";
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
} from "./styled";

const Navigation = () => {
  const [searchInput, setSearchInput] = useState("");
  const { handleSearch, resetSearch, isSearching } = useSearch();
  const navigate = useNavigate();
  const debounceTimeoutRef = useRef(null);

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
      navigate("/movielist");
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
        navigate("/movielist");
      } else {
        handleSearch(newValue.trim());
        navigate("/movielist");
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
            <NavLink to="/peoplelist">People</NavLink>
          </Item>
        </List>
      </NavMenu>

      <SearchWrapper>
        <form onSubmit={handleSearchSubmit}>
          <SearchInput
            type="text"
            placeholder="Search for movies..."
            value={searchInput}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <SearchIcon onClick={handleSearchSubmit} />
        </form>
      </SearchWrapper>
    </StyledNav>
  );
};
export default Navigation;
