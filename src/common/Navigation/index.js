import React from "react";
import Camera from "../../components/CameraSVG/index.js";
import { NavLink } from "react-router-dom";
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
        <SearchIcon />
        <SearchInput type="text" placeholder="Search for movies..." />
      </SearchWrapper>
    </StyledNav>
  );
};
export default Navigation;
