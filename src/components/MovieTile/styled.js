import styled, { css } from "styled-components";

export const MovieCard = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 324px;
  height: 640px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 100%;
    height: 610px;
    max-width: 300px;
    padding: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 100%;
    height: 580px;
    max-width: 300px;
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 380px;
    height: 200px;
    padding: 16px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr;
    align-items: flex-start;
    gap: 16px;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 100%;
    max-width: 300px;
    height: 160px;
    padding: 12px;
    gap: 12px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr;
    align-items: flex-start;
  }

  ${({ isCompact }) =>
    isCompact &&
    css`
      width: 208px;
      height: 339px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
        width: 100%;
        max-width: 200px;
        height: 450px;
        padding: 12px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        width: 100%;
        max-width: 180px;
        height: 410px;
        padding: 10px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        max-width: 130px;
        height: 300px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 100%;
        max-width: 103px;
        height: 250px;
        padding: 6px;
        gap: 4px;
      }
    `}
`;

export const MoviePoster = styled.img`
  width: 100%;
  aspect-ratio: 292 / 434;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.color.postergrey};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 100%;
    margin-bottom: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 100%;
    aspect-ratio: 292 / 434;
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    aspect-ratio: 292 / 434;
    min-width: 114px;
    margin-bottom: 0;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 90px;
    aspect-ratio: 292 / 434;
    min-width: 90px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / -1;
  }

  ${({ isCompact }) => isCompact && css``}
`;

export const MovieTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0 0 8px 0;
  word-break: break-word;
  color: ${({ theme }) => theme.color.woodsmoke};
  max-height: 58px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    font-size: 20px;
    max-height: 52px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 18px;
    margin-bottom: 6px;
    max-height: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin-bottom: 4px;
    max-height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    max-height: 38px;
  }

  ${({ isCompact }) =>
    isCompact &&
    css`
      font-size: 16px;
      max-height: 42px;
      margin-bottom: 4px;
      -webkit-line-clamp: 2;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        max-height: 38px;
      }
    `}
`;

export const MovieYear = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 14px;
    margin-bottom: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.color.stormgrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 12px;
  }

  ${({ isCompact }) =>
    isCompact &&
    css`
      font-size: 14px;
      margin-bottom: 4px;
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 12px;
      }
    `}
`;

export const GenreTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  max-height: 40px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    gap: 6px;
    margin-bottom: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
    margin-bottom: 4px;
    max-height: 30px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    overflow: hidden;
  }

  ${({ isCompact }) =>
    isCompact &&
    css`
      max-height: 28px;
      gap: 4px;
      margin-bottom: 4px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-height: 20px;
      }
    `}
`;

export const GenreTag = styled.span`
  background: ${({ theme }) => theme.color.grey};
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 6px 12px;
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
  }

  ${({ isCompact }) =>
    isCompact &&
    css`
      padding: 4px 8px;
      font-size: 10px;
    `}
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  height: 24px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 0;
    height: auto;
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }

  ${({ isCompact }) =>
    isCompact &&
    css`
      gap: 6px;
      height: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        gap: 4px;
        font-size: 10px;
      }
    `}
`;

export const StarIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.color.sunflower};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Rating = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const VoteCount = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 120%;
  }
`;
