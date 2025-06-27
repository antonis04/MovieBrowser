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
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0 16px;
    height: 80px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    height: auto;
    min-height: 80px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
    line-height: 32px;
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const NavMenu = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-grow: 0;
    margin: 0 16px;
  }

  @media (max-width: 480px) {
    margin: 0 8px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      padding: 6px 16px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      padding: 4px 12px;
      font-size: 13px;
    }
  }
`;

export const SearchWrapper = styled.div`
  width: 300px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
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
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.color.lynch};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 6px 12px 6px 36px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px 4px 32px;
    font-size: 13px;
  }
`;
