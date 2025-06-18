import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #000000;
  padding: 23px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
  
  img {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    order: -1;
  }
`;

export const NavButton = styled.button`
  background-color: ${({ active }) => active ? '#000000' : 'transparent'};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 24px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: #000000;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
  padding: 12px 20px 12px 64px;
  font-size: 16px;
  width: 432px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.darkergrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 16px;
    height: 16px;
    opacity: 0.6;
  }
`;
