import React from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { List, Item, StyledNav } from "./styled";

const Navigation = () => {
  return (
    <StyledNav>
      <List>
        <Item>
          <NavLink to="/">Home</NavLink>
        </Item>
        <Item>
          <NavLink to="/movie">Movies</NavLink>
        </Item>
        <Item>
          <NavLink to="/people">People</NavLink>
        </Item>
      </List>
    </StyledNav>
=======
import { StyledNavLink, List, Item } from "./styled";

const Navigation = () => {
  return (
    <Navigation>
      <List>
        <Item>
          <NavLink></NavLink>
        </Item>
      </List>
    </Navigation>
>>>>>>> 6e3b7bf (Feature: Create Navigation component with initial structure)
  );
};

export default Navigation;
