import React from "react";
import {
  ErrorContainer,
  ErrorImage,
  ErrorTitle,
  ErrorMessage,
  RetryButton,
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
        <img src={NoResultsSvg} alt={isNoResults ? "Brak wyników" : "Błąd"} />
      </ErrorImage>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          {isNoResults ? "Wróć do popularnych filmów" : "Spróbuj ponownie"}
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorState;
