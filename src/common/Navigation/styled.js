import styled from "styled-components";
import SearchSVG from "../../components/SearchSVG/index.js";

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
    padding: 8px 24px;
    border-radius: 33px;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    display: block;

    &:hover {
      color: ${({ theme }) => theme.color.grey};
    }

    &.active {
      border: 1px solid ${({ theme }) => theme.color.white};
    }
  }
`;

export const SearchWrapper = styled.div`
  width: 300px;
  position: relative;
`;

export const SearchIcon = styled(SearchSVG)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;
  color: #9CA3AF;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 16px 8px 44px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};

  &::placeholder {
    color: ${({ theme }) => theme.color.lynch};
  }
`;
