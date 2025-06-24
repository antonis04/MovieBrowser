import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  min-height: 400px;
`;

export const LoadingSpinner = styled.div`
  margin-bottom: 24px;
  
  img {
    width: 48px;
    height: 48px;
    animation: ${spin} 1s linear infinite;
  }
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0;
  text-align: center;
`;
