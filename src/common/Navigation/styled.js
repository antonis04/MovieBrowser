import styled from "styled-components";

export const StyledNav = styled.nav`
  background: ${({ theme }) => theme.color.lightgrey};
  color: ${({ theme }) => theme.color.white};
  width: 1920px;
  height: 94px;
`;

export const List = styled.ul`
  background: red;
`;

export const Item = styled.li`
  background: green;
`;
