import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  width: auto;
  padding-top: ${props => props.pTop || null};
  padding-bottom: ${props => props.pBot || null};
  padding-left: ${props => props.pLeft || null};
  padding-right: ${props => props.pRight || null};
  
  @media (min-width: 768px) {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 1024px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const FullContainer = styled.div`
  width: 100%;
`;

export const Container = ({ children, ...props }) => {
  return (
    <SectionContainer {...props}>
      {children}
    </SectionContainer>
  );
};

export const FluidContainer = ({ children, ...props }) => {
  return (
    <FullContainer {...props}>
      {children}
    </FullContainer>
  );
};