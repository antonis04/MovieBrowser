import styled from "styled-components";

export const MovieCard = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 324px;
  min-height: 570px;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px;
    box-shadow: 0px 2px 8px rgba(186, 199, 213, 0.4);
    display: grid;
    grid-template-columns: 114px 1fr;
    gap: 16px;
    width: 100%;
    min-height: 201px;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 8px;
    grid-template-columns: 114px 1fr;
    gap: 12px;
    min-height: 201px;
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

  @media (max-width: 480px) {
    min-height: 114px;
    max-height: 170px;
    width: 114px;
    height: 170px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  line-height: 1.3;
  min-height: calc(1.3 * 2em);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    line-height: 1.2;
    min-height: calc(1.2 * 2em);
    -webkit-line-clamp: 3;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MovieYear = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const GenreTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
    margin: 6px 0;
  }

  @media (max-width: 480px) {
    gap: 4px;
    margin: 4px 0;
  }
`;

export const GenreTag = styled.span`
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
    font-size: 9px;
  }
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
    margin-top: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    margin-top: 4px;
  }
`;

export const StarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Rating = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const VoteCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;
