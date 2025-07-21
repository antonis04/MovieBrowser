import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  min-height: 400px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 40px 10px;
    max-width: 100%;
  }
`;

export const ErrorImage = styled.div`
  margin-bottom: 24px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 16px;
    width: 100px;
    height: 100px;
  }
`;

export const ErrorContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 592px;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: 0 0 24px 0;
  line-height: 1.2;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 16px 0;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0 0 48px 0;
  line-height: 1.5;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin: 0 0 32px 0;
  }
`;

export const RetryButton = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 5px;
  padding: 16px 32px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 12px rgba(0, 68, 204, 0.3);
  width: 181px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  font-family: Open Sans;
  line-height: 19px;
  letter-spacing: 0px;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkergrey};
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(0, 68, 204, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: auto;
    max-width: 181px;
    height: auto;
    padding: 12px 24px;
    font-size: 14px;
  }
`;
