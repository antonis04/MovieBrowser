import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../images/Arrow.svg";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: auto;
  margin-bottom: 56px;
  width: 100%;
  padding-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: auto;
    margin-bottom: 30px;
    gap: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 8px;
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color.lightblue};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.grey};
    color: ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const PrimaryArrow = styled(ArrowIcon)`
  width: 7px;
  height: 11px;
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.color.darkergrey : theme.color.blue};
  transform: ${({ direction }) =>
    direction === "right" ? "rotate(180deg)" : "rotate(0deg)"};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 5px;
    height: 8px;
  }
`;

export const SecondaryArrow = styled(ArrowIcon)`
  width: 5px;
  height: 8px;
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.color.darkergrey : theme.color.blue};
  transform: ${({ direction }) =>
    direction === "right" ? "rotate(180deg)" : "rotate(0deg)"};

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 2px;
  }
`;

export const PageLabel = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    line-height: 2.4;
  }
`;

export const PageNumber = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    line-height: 2.4;
  }
`;