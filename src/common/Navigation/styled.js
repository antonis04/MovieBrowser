import styled from "styled-components";

export const StyledNav = styled.nav`
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &:hover {
      color: ${({ theme }) => theme.color.grey};
    }
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  margin-left: 12px;
`;

export const NavMenu = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
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
  list-style: none;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &:hover {
      color: ${({ theme }) => theme.color.grey};
    }
  }
`;
