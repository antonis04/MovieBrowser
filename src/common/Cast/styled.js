import styled from "styled-components";

export const Cast = styled.div`
  max-width: 1368px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    padding: 0 16px;
    gap: 24px;
    margin: 24px auto;
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin: 16px auto;
  }
`;

export const CastRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1368px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 374px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const PersonTitle = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  padding: 16px;

  display: flex;
  flex-direction: column;

  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

export const Name = styled.div``;

export const Actor = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0px;
  margin: 8px 0 4px 0;
  word-break: break-word;
  text-align: center;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin: 4px 0 2px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2/3;
  max-width: none;
  object-fit: cover;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.postergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 100px;
  }
`;

export const Strong = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin-top: 4px;
  word-break: break-word;
  text-align: center;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
