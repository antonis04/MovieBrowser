import styled, { css } from "styled-components";

export const ImagePlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  flex-shrink: 0;

  svg {
    max-width: 100px;
    max-height: 100px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    color: ${({ theme }) => theme.color.darkergrey};
  }

  ${({ type }) =>
    type === "person" &&
    css`
      width: 176px;
      height: 264px;
      border-radius: 5px;

      svg {
        max-width: 120px;
        max-height: 120px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100px;
        height: 150px;
        svg {
          max-width: 80px;
          max-height: 80px;
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
      svg {
        max-width: 120px;
        max-height: 120px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 400px;
        svg {
          max-width: 100px;
          max-height: 100px;
        }
      }
    `}

  ${({ type, small }) =>
    type === "movie" &&
    small &&
    css`
      width: 300px;
      height: 450px;
      border-radius: 12px;
      svg {
        max-width: 100px;
        max-height: 100px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        max-width: 200px;
        height: auto;
        aspect-ratio: 2/3;
        svg {
          max-width: 80px;
          max-height: 80px;
        }
      }
    `}

  ${({ type }) =>
    type === "movieTile" &&
    css`
      width: 292px;
      height: 434px;
      margin-bottom: 16px;
      border-radius: 5px;
      svg {
        max-width: 80px;
        max-height: 80px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 114px;
        height: 170px;
        margin-bottom: 0px;
        svg {
          max-width: 60px;
          max-height: 60px;
        }
      }
    `}

  @media (max-width: 480px) {
    ${({ type }) =>
      type === "movieTile" &&
      css`
        width: 114px;
        height: 170px;
        margin-bottom: 0;
        svg {
          max-width: 50px;
          max-height: 50px;
        }
      `}

    ${({ type }) =>
      type === "star" &&
      css`
        width: 20px;
        height: 20px;
        background-color: transparent;
        border-radius: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;

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
  }
`;
