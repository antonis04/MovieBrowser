import React, { useState, useEffect } from "react";
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
  const { handleSearch, resetSearch, searchQuery, isSearching } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSearching) {
      setSearchInput("");
    }
  }, [isSearching]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      handleSearch(searchInput.trim());
      navigate("/");
    }
  };

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    setSearchInput(newValue);

    if (newValue.trim() === "") {
      resetSearch();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e);
    }
  };
  return (
    <StyledNav>
      <Logo>
        <NavLink to="/">
          <Camera />
          <LogoText>Movies Browser</LogoText>
        </NavLink>
      </Logo>

      <NavMenu>
        <List>
          <Item>
            <NavLink to="/">Home</NavLink>
          </Item>
          <Item>
            <NavLink to="/movielist">Movies</NavLink>
          </Item>
          <Item>
            <NavLink to="/peoplelist">People</NavLink>
          </Item>
          <Item>
            <NavLink to="/peoplepage">Actors</NavLink>
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
