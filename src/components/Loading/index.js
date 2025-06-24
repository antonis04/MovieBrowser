import React from 'react';
import { LoadingContainer, LoadingSpinner, LoadingText } from './styled';
import SpinnerSvg from '../../images/Spinner.svg';

const Loading = ({ message = "Loading movies..." }) => {
  return (
    <LoadingContainer>
      <LoadingSpinner>
        <img src={SpinnerSvg} alt="Loading" />
      </LoadingSpinner>
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
