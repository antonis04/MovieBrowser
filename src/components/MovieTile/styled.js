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

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    height: auto;
    padding: 8px;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 170px;
    margin-bottom: 0;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MovieTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0 0 8px 0;
  word-break: break-word;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const MovieYear = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-bottom: 4px;
  }
`;

export const GenreTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;

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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0;
    gap: 6px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Rating = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const VoteCount = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;
