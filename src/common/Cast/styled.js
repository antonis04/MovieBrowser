import styled from "styled-components";

export const Cast = styled.div`
  width: 1368px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    padding: 0;
    gap: 24px;
  }
`;

export const CastRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 324px;
    padding: 16px;
  }
`;

export const Name = styled.div``;

export const Actor = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Picture = styled.img`
  width: 177px;
  height: 264px;
  margin-top: -6px;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 292px;
    height: auto;
    aspect-ratio: 177/264;
    margin-top: 0;
  }
`;
