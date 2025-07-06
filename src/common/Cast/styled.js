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
  grid-template-columns: repeat(auto-fill, minmax(176px, 1fr));
  gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 10px;
  }
`;

export const PersonTitle = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  text-align: center;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px;
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
  justify-content: center;
  margin: 8px 0 4px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin: 4px 0 2px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Picture = styled.img`
  width: 177px;
  height: 264px;
  margin-top: -6px;
  border-radius: 5px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.color.postergrey};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 100px;
    height: auto;
    aspect-ratio: 2/3;
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
