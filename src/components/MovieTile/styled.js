import styled from "styled-components";

export const MovieCard = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 324px;
  height: 650px;
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
    max-width: 300px;
    height: auto;
    padding: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 100%;
    max-width: 450px;
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 380px;
    height: auto;
    padding: 16px;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    padding: 12px;
    gap: 12px;
  }
`;

export const MoviePoster = styled.img`
  width: 292px;
  height: 434px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.color.postergrey};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 100%;
    height: auto;
    max-width: calc(280px - 2 * 14px);
    margin-bottom: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    max-width: calc(220px - 2 * 10px);
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 170px;
    min-width: 114px;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 135px;
    min-width: 90px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
  }
`;

export const MovieTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0 0 8px 0;
  word-break: break-word;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 18px;
    margin-bottom: 6px;
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
  }

  @media (max-width: 480px) {
    font-size: 14px;
    max-height: 38px;
  }
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
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const GenreTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    gap: 6px;
    margin-bottom: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
    margin-bottom: 4px;
  }
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
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 0;
    height: auto;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
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
