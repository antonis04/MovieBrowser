import styled from 'styled-components';

export const MovieCard = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px;
    box-shadow: 0px 2px 8px rgba(186, 199, 213, 0.4);
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  min-height: 325px;
  max-height: 485px;
  object-fit: contain;
  border-radius: 5px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.color.postergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-height: 280px;
    max-height: 420px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    min-height: 240px;
    max-height: 360px;
    margin-bottom: 8px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const MovieYear = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
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
    padding: 6px 12px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
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
  
  img {
    width: 20px;
    height: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      width: 18px;
      height: 18px;
    }

    @media (max-width: 480px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Rating = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const VoteCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
