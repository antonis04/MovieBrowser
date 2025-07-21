import React from "react";
import {
  ErrorContainer,
  ErrorImage,
  ErrorTitle,
  ErrorMessage,
  RetryButton,
  ErrorContentBlock,
} from "./styled";
import NoResultsSvg from "../../images/NoResults.svg";

const ErrorState = ({
  title = "Oops! Something went wrong",
  message = "We couldn't load the data. Please try again.",
  onRetry,
  isNoResults = false,
}) => {
  return (
    <ErrorContainer>
      <ErrorImage>
        <img src={NoResultsSvg} alt={isNoResults ? "No Results" : "Error"} />
      </ErrorImage>
      <ErrorContentBlock>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorMessage>{message}</ErrorMessage>
        {onRetry && (
          <RetryButton onClick={onRetry}>
            {isNoResults ? "Back to home page" : "Try Again"}
          </RetryButton>
        )}
      </ErrorContentBlock>
    </ErrorContainer>
  );
};

export default ErrorState;
