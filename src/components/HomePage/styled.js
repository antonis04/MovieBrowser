import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1368px;
  margin: 0 auto;
  padding: 56px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 24px 16px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: 0 0 48px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 24px 0;
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;
  align-items: start;
  justify-content: center;

  & > a {
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
