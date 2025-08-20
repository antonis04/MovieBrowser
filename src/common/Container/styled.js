import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: auto;
  box-sizing: border-box;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0 12px;
    margin-top: 0; 
  }
`;

export const HeaderPage = styled.div`
  position: relative;
  width: 100%;
  height: 770px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.black};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 420px;
  }
`;

export const ImagePosterBig = styled.div`
  position: relative;
  width: 1368px;
  max-width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8) 0%,
        transparent 15%,
        transparent 85%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      radial-gradient(
        ellipse at center,
        transparent 40%,
        rgba(0, 0, 0, 0.6) 100%
      );
    z-index: 2;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;

    &::before {
      background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.6) 0%,
          transparent 20%,
          transparent 80%,
          rgba(0, 0, 0, 0.6) 100%
        ),
        radial-gradient(
          ellipse at center,
          transparent 50%,
          rgba(0, 0, 0, 0.5) 100%
        );
    }

    img {
      object-fit: cover;
      object-position: center top;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const HeaderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding: 50px;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    left: 0;
    right: 0;
    padding: 24px 16px;
    text-align: left;
  }
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 32px;
  }
`;

export const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 16px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const HeaderSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 22px;
  svg {
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    white-space: nowrap;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const HeaderNote = styled.div`
  font-weight: 400;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const HeaderVotes = styled.div`
  font-weight: 400;
  font-size: 16px;
`;
