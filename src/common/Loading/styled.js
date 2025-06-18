import styled from "styled-components";
import { ReactComponent as Icon } from "../../images/Spinner.svg";

export const LoadingWrapper = styled.div`
  margin: 219px auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 50px;
  }
`;

export const LoadingIcon = styled(Icon)`
  height: 91px;
  width: 91px;
  animation: 1s linear normal infinite rotation;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 50px;
    height: 35px;
    width: 35px;
  }
`;