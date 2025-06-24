import React, { useState } from 'react';
import { StyledHeader, Logo, Navigation, NavButton, SearchContainer, SearchInput, SearchIcon } from './styled';
import SearchSvg from '../../images/Search.svg';
import CameraSvg from '../../images/Camera.svg';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  return (
    <StyledHeader>
      <Logo>
        <img src={CameraSvg} alt="Camera" />
        Movies Browser
      </Logo>
      <Navigation>
        <NavButton active>MOVIES</NavButton>
        <NavButton>PEOPLE</NavButton>
      </Navigation>
      <SearchContainer>
        <form onSubmit={handleSearchSubmit}>
          <SearchInput
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <SearchIcon onClick={handleSearchSubmit}>
            <img src={SearchSvg} alt="Search" />
          </SearchIcon>
        </form>
      </SearchContainer>
    </StyledHeader>
  );
};

export default Header;
