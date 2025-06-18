import React from "react";
import { NavLink } from "react-router-dom";
import { List, Item, StyledNav } from "./styled";

const Navigation = () => {
  return (
    <StyledNav>
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
    </StyledNav>
  );
};
export default Navigation;
