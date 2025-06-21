import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: auto;
`;

export const HeaderPage = styled.div`
  position: relative;
  width: 100%;
  height: 770px;
  margin-top: 93px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.black};
  overflow: hidden;
`;

export const ImagePosterBig = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
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
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderSummary = styled.div`
  font-weight: 500;
  font-size: 22px;
`;

export const HeaderNote = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const HeaderVotes = styled.div`
  font-weight: 400;
  font-size: 16px;
`;
