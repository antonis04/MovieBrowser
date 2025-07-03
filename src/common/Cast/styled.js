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
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    justify-items: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const PersonTitle = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  max-width: 208px;
  min-height: 340px;
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
  object-fit: cover;
  background-color: ${({ theme }) => theme.color.postergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 292px;
    height: auto;
    aspect-ratio: 177/264;
    margin-top: 0;
  }
`;

export const EmptyPictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.postergrey};
  overflow: hidden;

  width: 177px;
  height: 264px;
  margin-top: -6px;

  ${({ large }) =>
    large &&
    `
    width: 100%;
    height: 400px; 
    margin-top: 0; 
    border-radius: 0; 
  `}

  ${({ small }) =>
    small &&
    `
    width: 200px; 
    height: 300px;
    margin-top: 0;
  `}


  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    max-width: 292px;
    height: auto;
    aspect-ratio: 177/264;
    margin-top: 0;

    ${({ large }) =>
      large &&
      `
      height: 400px; 
    `}

    ${({ small }) =>
      small &&
      `
      width: 100%;
      max-width: 200px; 
      height: auto;
      aspect-ratio: 200/300;
    `}
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
