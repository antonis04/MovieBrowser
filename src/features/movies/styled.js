import styled from "styled-components";

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 24px;
  margin: 0 0 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 0 0 24px 0;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin: 0 0 16px 0;
  }
`;
