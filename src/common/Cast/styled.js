import styled, { css } from "styled-components";

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
  grid-template-columns: repeat(6, minmax(150px, 1fr));
  gap: 24px;

  @media (max-width: 1368px) {
    grid-template-columns: repeat(5, minmax(150px, 1fr));
    gap: 20px;
  }

  @media (max-width: 1020px) {
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    gap: 16px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 12px;
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 12px;
  }

  @media (max-width: 374px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const PersonCard = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  padding: 16px;
  transition: transform 0.2s ease;
  flex-shrink: 0;

  ${({ isDetailed }) =>
    isDetailed
      ? css`
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;

          @media (min-width: ${({ theme }) =>
              theme.breakpoint.mobileMax + 1}px) {
            padding: 40px;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 40px;
          }

          @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            flex-direction: row;
            align-items: flex-start;
            gap: 12px;
            padding: 8px;
          }
        `
      : css`
          width: 208px;
          height: 339px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;

          &:hover {
            transform: translateY(-2px);
          }

          @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            padding: 8px;
            width: 100%;
            height: auto;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          @media (max-width: 480px) {
            padding: 6px;
          }
        `}
`;

export const PersonImageWrapper = styled.div`
  flex-shrink: 0;
  ${({ isDetailed }) =>
    isDetailed
      ? css`
          width: 312px;
          height: 464px;

          @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 116px;
            height: 163px;
          }
          @media (max-width: 400px) {
            width: 100%;
            max-width: 116px;
            height: auto;
          }
        `
      : css`
          width: 176px;
          height: 231px;
          @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 72px;
            height: 96px;
            min-width: 72px;
          }
        `}
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.postergrey};
  flex-shrink: 0;
`;

export const PersonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${({ isDetailed }) =>
    isDetailed
      ? css`
          width: auto;
          align-items: flex-start;
          text-align: left;

          @media (max-width: 400px) {
            align-items: flex-start;
            text-align: left;
          }
        `
      : css`
          width: 100%;
          align-items: center;
          text-align: center;
        `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-basis: auto;
    width: 100%;

    ${({ isDetailed }) =>
      isDetailed
        ? css`
            align-items: flex-start;
            text-align: left;
          `
        : css`
            align-items: center;
            text-align: center;
          `}
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;

  ${({ isDetailed }) =>
    isDetailed &&
    css`
      align-items: flex-start;
      text-align: left;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    ${({ isDetailed }) =>
      isDetailed
        ? css`
            align-items: flex-start;
            text-align: left;
          `
        : css`
            align-items: center;
            text-align: center;
          `}

    flex-grow: 0;
    width: 100%;
  }
`;

export const Actor = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0px;
  margin: 8px 0 4px 0;
  word-break: break-word;
  text-align: inherit;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin: 0;
    text-align: inherit;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Strong = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin-top: 4px;
  word-break: break-word;
  text-align: inherit;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    text-align: inherit;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const PersonDetailsText = styled.p`
  font-size: 14px;
  line-height: 1.3;
  margin: 4px 0;
  color: ${({ theme }) => theme.color.darkergrey};
  text-align: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin: 2px 0;
    text-align: inherit;
  }
`;

export const DetailValue = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-weight: 400;
`;

export const PersonDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 24px;
  display: block;
  text-align: inherit;

  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin-top: 8px;
    max-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    width: 100%;
    text-align: inherit;
  }
`;
