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
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 325px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.color.postergrey};
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MovieTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  line-height: 1.3;
`;

export const MovieYear = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0;
`;

export const GenreTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;

export const GenreTag = styled.span`
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const StarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 20px;
    height: 20px;
  }
`;

export const Rating = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
`;

export const VoteCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkergrey};
`;
