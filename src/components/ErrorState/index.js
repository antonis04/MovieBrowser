import React from 'react';
import { ErrorContainer, ErrorImage, ErrorTitle, ErrorMessage, RetryButton } from './styled';
import NoResultsSvg from '../../images/NoResults.svg';

const ErrorState = ({ 
  title = "Oops! Something went wrong", 
  message = "We couldn't load the movies. Please try again.",
  onRetry,
  isNoResults = false
}) => {
  return (
    <ErrorContainer>
      <ErrorImage>
        <img src={NoResultsSvg} alt={isNoResults ? "No results" : "Error"} />
      </ErrorImage>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          {isNoResults ? "Back to Popular Movies" : "Try Again"}
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorState;
