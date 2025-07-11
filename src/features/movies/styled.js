import styled from "styled-components";

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 24px;
  justify-content: center;

  & > a {
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
