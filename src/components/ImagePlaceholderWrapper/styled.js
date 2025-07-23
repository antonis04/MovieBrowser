import styled, { css } from "styled-components";

export const ImagePlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  flex-shrink: 0;
  margin-bottom: 16px;

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
      aspect-ratio: 176 / 231;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.color.postergrey};

      svg {
        max-width: 100px;
        max-height: 100px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        aspect-ratio: 176 / 231;
        min-width: 72px;

        svg {
          max-width: 60px;
          max-height: 60px;
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
      width: 100%;
      aspect-ratio: 292 / 434;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.color.postergrey};

      svg {
        max-width: 100px;
        max-height: 100px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        max-width: 200px;
        height: auto;
        aspect-ratio: 292 / 434;

        svg {
          max-width: 80px;
          max-height: 80px;
        }
      }
    `}

  ${({ type }) =>
    type === "movieTile" &&
    css`
      width: 100%;
      aspect-ratio: 292 / 434;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.color.postergrey};

      svg {
        max-width: 80px;
        max-height: 80px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        aspect-ratio: 292 / 434;
        min-width: 72px;

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
        width: 100%;
        aspect-ratio: 292 / 434;
        margin-bottom: 0;
        min-width: 114px;

        svg {
          max-width: 50px;
          max-height: 50px;
        }
      `}

    ${({ type }) =>
      type === "person" &&
      css`
        width: 100%;
        aspect-ratio: 176 / 231;

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
