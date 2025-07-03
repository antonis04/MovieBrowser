import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: auto;
  box-sizing: border-box;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0 16px;
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
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  box-shadow: inset 0px 0px 120px 60px rgba(0, 0, 0, 0.9);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    img {
      object-fit: cover;
      object-position: center top;
      box-shadow: inset 0px 0px 80px 40px rgba(0, 0, 0, 0.9);
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
  left: 25%;
  z-index: 3;
  padding: 50px;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    left: 0;
    right: 0;
    padding: 24px 16px;
    text-align: center;
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
    align-items: center;
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
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;

export const HeaderNote = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const HeaderVotes = styled.div`
  font-weight: 400;
  font-size: 16px;
`;
