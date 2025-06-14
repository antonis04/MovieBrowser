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
          <NavLink to="/movie">Movies</NavLink>
        </Item>
        <Item>
          <NavLink to="/people">People</NavLink>
        </Item>
      </List>
    </StyledNav>
  );
};

export default Navigation;
