import styled from "styled-components";

export const StyledNav = styled.nav`
  background: ${({ theme }) => theme.color.lightgrey};
  color: ${({ theme }) => theme.color.black};
  width: 1920px;
  height: 94px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  font-weight: 600;
`;
