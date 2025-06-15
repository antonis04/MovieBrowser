import React from "react";
import { NavLink } from "react-router-dom";
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
  );
};

export default Navigation;
