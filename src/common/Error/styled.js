import styled from "styled-components";
import { ReactComponent as Error } from "../../images/Error.svg";

export const ErrorWrapper = styled.div`
  margin: 180px 16px auto 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 90px;
    gap: 12px;
  }
`;

export const ErrorIcon = styled(Error)`
  width: 120px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 60px;
    height: 60px;
  }
`;

export const ErrorMessage = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;

export const ErrorDescription = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 16px 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  font-family: Open-Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    font-size: 10px;
  }
`;