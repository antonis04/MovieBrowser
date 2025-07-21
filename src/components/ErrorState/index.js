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
    <ErrorContainer isNoResults={isNoResults}>
      <ErrorImage isNoResults={isNoResults}>
        <img src={NoResultsSvg} alt={isNoResults ? "No Results" : "Error"} />
      </ErrorImage>
      <ErrorContentBlock isNoResults={isNoResults}>
        <ErrorTitle isNoResults={isNoResults}>{title}</ErrorTitle>
        {!isNoResults && (
          <ErrorMessage isNoResults={isNoResults}>{message}</ErrorMessage>
        )}
        {!isNoResults && onRetry && (
          <RetryButton onClick={onRetry} isNoResults={isNoResults}>
            Try Again
          </RetryButton>
        )}
      </ErrorContentBlock>
    </ErrorContainer>
  );
};

export default ErrorState;
