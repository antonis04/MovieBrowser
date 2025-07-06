import React from "react";
import { LoadingContainer, LoadingSpinner, LoadingText } from "./styled";
import SpinnerSvg from "../../images/Spinner.svg";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner>
        <img src={SpinnerSvg} alt="Loading" />
      </LoadingSpinner>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
