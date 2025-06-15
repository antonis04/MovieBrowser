import styled from "styled-components";

export const StyledNavLink = styled.nav`
  background: ${({ theme }) => theme.color.Woodsmoke};
  color: ${({ theme }) => theme.color.White};
  width: 1920;
  height: 94;
`;

export const List = styled.ul`
  background: red;
`;

export const Item = styled.li`
  background: green;
`;
