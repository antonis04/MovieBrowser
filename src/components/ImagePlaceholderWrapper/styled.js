import styled, { css } from "styled-components";

export const ImagePlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    color: ${({ theme }) => theme.color.darkergrey};
  }

  ${({ type }) =>
    type === "person" &&
    css`
      width: 100%;
      height: 100%;
      aspect-ratio: 176 / 231;

      svg {
        max-width: 150px;
        max-height: 150px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        height: 100%;

        svg {
          max-width: 110px;
          max-height: 110px;
        }
      }
    `}

  ${({ type, large }) =>
    type === "movie" &&
    large &&
    css`
      width: 100%;
      height: 400px;
      border-radius: 0;
      background-color: ${({ theme }) => theme.color.postergrey};

      svg {
        max-width: 120px;
        max-height: 120px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 200px;
        svg {
          max-width: 100px;
          max-height: 100px;
        }
      }
    `}

  ${({ type }) =>
    type === "movieTile" &&
    css`
      width: 100%;
      aspect-ratio: 292 / 434;
      object-fit: cover;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.color.postergrey};
      margin-bottom: 16px;

      svg {
        max-width: 80px;
        max-height: 80px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
        width: 100%;
        margin-bottom: 14px;

        svg {
          max-width: 80px;
          max-height: 80px;
        }
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        width: 100%;
        aspect-ratio: 292 / 434;
        margin-bottom: 10px;

        svg {
          max-width: 80px;
          max-height: 80px;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        height: 100%;
        aspect-ratio: auto;
        min-width: 0;
        margin-bottom: 0;

        svg {
          max-width: 60px;
          max-height: 60px;
        }
      }

      @media (max-width: 480px) {
        width: 100%;
        height: 100%;
        min-width: 0;
        svg {
          max-width: 50px;
          max-height: 50px;
        }
      }
    `}

  ${({ type }) =>
    type === "movieDetailsPoster" &&
    css`
      width: 312px;
      height: 464px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.color.postergrey};
      margin-bottom: 0;

      svg {
        max-width: 100px;
        max-height: 100px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        width: 180px;
        min-width: 180px;
        svg {
          max-width: 80px;
          max-height: 80px;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 130px;
        aspect-ratio: 312 / 464;
        min-width: 130px;
        margin-bottom: 0;
        border-radius: 5px;

        svg {
          max-width: 70px;
          max-height: 70px;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 110px;
        min-width: 110px;
        svg {
          max-width: 60px;
          max-height: 60px;
        }
      }
    `}

  ${({ type }) =>
    type === "star" &&
    css`
      width: 24px;
      height: 24px;
      background-color: transparent;
      border-radius: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;

      svg {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
        height: 16px;
      }

      @media (max-width: 480px) {
        width: 14px;
        height: 14px;
      }
    `}
`;
