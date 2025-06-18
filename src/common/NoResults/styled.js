import styled from "styled-components";
import { ReactComponent as Icon } from "../../images/NoResults.svg"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px 0;
  }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
`;

export const NoResultsIcon = styled(Icon)`
    width: 100%;
    height: 100%;

    path {
    stroke-width: 2.39px;
  }
`;