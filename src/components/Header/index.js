import React from 'react';
import { StyledHeader, Logo, Navigation, NavButton, SearchContainer, SearchInput, SearchIcon } from './styled';
import SearchSvg from '../../images/Search.svg';
import CameraSvg from '../../images/Camera.svg';

const Header = () => {
  return (
    <StyledHeader>      <Logo>
        <img src={CameraSvg} alt="Camera" />
        Movies Browser
      </Logo>
      <Navigation>
        <NavButton active>MOVIES</NavButton>
        <NavButton>PEOPLE</NavButton>
      </Navigation>      <SearchContainer>
        <SearchInput placeholder="Search for movies..." />
        <SearchIcon>
          <img src={SearchSvg} alt="Search" />
        </SearchIcon>
      </SearchContainer>
    </StyledHeader>
  );
};

export default Header;
