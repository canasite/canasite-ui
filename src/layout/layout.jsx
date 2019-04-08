import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  width: auto;
  padding-top: ${props => props.yPadding || null};
  padding-bottom: ${props => props.yPadding || null};
  padding-left: ${props => props.xPadding || null};
  padding-right: ${props => props.xPadding || null};
  
  @media (min-width: 768px) {
    max-width: 900px;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const FullContainer = styled.div`
  width: 100%;
`;

export const Container = ({ children }) => {
  return (
    <SectionContainer>
      {children}
    </SectionContainer>
  );
};

export const FluidContainer = ({ children }) => {
  return (
    <FullContainer>
      {children}
    </FullContainer>
  );
};