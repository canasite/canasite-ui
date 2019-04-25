import React                      from 'react';
import styled, { keyframes }      from 'styled-components';


const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #79CEA7;
  animation: ${Spin} 1.2s linear infinite;
`;


const Spinner = () => {
  return (
    <StyledSpinner></StyledSpinner>
  );
};

export { Spinner };
