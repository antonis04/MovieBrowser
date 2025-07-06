import styled, { css } from "styled-components";

export const ImagePlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.postergrey};
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
    color: ${({ theme }) => theme.color.darkGrey};
  }

  ${({ type }) =>
    type === "person" &&
    css`
      width: 176px;
      height: 231px;

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
      width: 200px;
      height: 300px;
      border-radius: 12px;
      svg {
        max-width: 100px;
        max-height: 100px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        max-width: 200px;
        height: auto;
        aspect-ratio: 200/300;
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
        margin-bottom: 12px;
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
        margin-bottom: 8px;
        svg {
          max-width: 50px;
          max-height: 50px;
        }
      `}
  }
`;
