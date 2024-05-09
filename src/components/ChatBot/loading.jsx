// React loader for delay from react-simple-chatbot github
// https://github.com/LucasBassetti/react-simple-chatbot/tree/master/lib/steps_components/common

import React from 'react';
import styled from 'styled-components';
import { loading } from './animations';

const LoadingStep = styled.span`
  animation: ${loading} 1.4s infinite both;
  animation-delay: ${props => props.delay};
`;

const Loading = () => (
    <span className="rsc-loading">
      <LoadingStep delay="0s">.</LoadingStep>
      <LoadingStep delay=".2s">.</LoadingStep>
      <LoadingStep delay=".4s">.</LoadingStep>
    </span>
  );
  
  export default Loading;