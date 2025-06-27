import styled from "styled-components";

export const Cast = styled.div`
  max-width: 1368px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    padding: 0;
    gap: 24px;
    margin: 24px 0;
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin: 16px 0;
  }
`;

export const CastRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    justify-items: center;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const PersonTitle = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 208px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  text-align: center;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 324px;
    padding: 16px;
    box-shadow: 0px 2px 8px rgba(186, 199, 213, 0.4);
  }

  @media (max-width: 480px) {
    padding: 12px;
    max-width: 280px;
  }
`;

export const Name = styled.div``;

export const Actor = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0px;
  justify-content: center;
  margin: 8px 0 4px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    margin: 6px 0 4px 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Picture = styled.img`
  width: 177px;
  height: 264px;
  margin-top: -6px;
  border-radius: 5px;
  object-fit: contain;
  background-color: ${({ theme }) => theme.color.postergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 292px;
    height: auto;
    aspect-ratio: 177/264;
    margin-top: 0;
  }
`;

export const Strong = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin-top: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
