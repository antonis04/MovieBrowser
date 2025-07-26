import styled from "styled-components";

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-areas:
    "poster content"
    "poster description";
  gap: 40px;
  margin-top: 56px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    grid-template-columns: 40% 1fr;
    gap: 24px;
    padding: 24px;
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 40% 1fr;
    grid-template-areas:
      "poster content"
      "description description";
    gap: 16px;
    padding: 16px;
    margin-top: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 40% 1fr;
    gap: 12px;
    padding: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
`;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  margin: 56px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
    margin-bottom: 8px;
    margin-top: 0;
  }
`;

export const Year = styled.div`
  font-size: 22px;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.color.stormgrey};
  }
`;

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 4px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    margin: 8px -2px;
  }
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.color.grey};
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 160%;
  grid-area: description;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 12px;
    margin-bottom: 12px;
  }
`;
export const Paragraph = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Strong = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.color.stormgrey};
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin-right: 4px;
    display: none;
  }
`;

export const Details = styled.div`
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
    margin: 12px 0;
  }
`;

export const DetailStar = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 4px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Summary = styled.div`
  width: 32px;
  height: 29px;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: auto;
    height: auto;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Note = styled.div`
  width: 24px;
  height: 17px;
  top: 264px;
  left: 72px;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: auto;
    height: auto;
    top: auto;
    left: auto;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Votes = styled.div`
  width: 77px;
  height: 17px;
  top: 264px;
  left: 108px;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: auto;
    height: auto;
    top: auto;
    left: auto;
    font-size: 13px;
    color: ${({ theme }) => theme.color.stormgrey};
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 312 / 464;
  border-radius: 5px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.color.postergrey};
  flex-shrink: 0;
  grid-area: poster;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 100%;
    height: auto;
    aspect-ratio: 312 / 464;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    height: auto;
    aspect-ratio: 312 / 464;
    min-width: 114px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 100%;
    height: auto;
    aspect-ratio: 312 / 464;
    min-width: 90px;
  }
`;
