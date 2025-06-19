import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  min-height: 400px;
  text-align: center;
`;

export const ErrorImage = styled.div`
  margin-bottom: 48px;
  
  img {
    width: 500px;
    height: auto;
    max-width: 100%;
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    img {
      width: 320px;
    }
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: 0 0 24px 0;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 16px 0;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0 0 48px 0;
  max-width: 600px;
  line-height: 1.5;

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
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 12px rgba(0, 68, 204, 0.3);

  &:hover {
    background-color: ${({ theme }) => theme.color.darkergrey};
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(0, 68, 204, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;
