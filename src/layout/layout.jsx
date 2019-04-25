import React    from 'react';
import styled   from 'styled-components';


const SectionContainer = styled.div`
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const FullContainer = styled.div`
  width: 100%;
`;


const Container = ({ children, ...props }) => {
  return (
    <SectionContainer {...props}>
      {children}
    </SectionContainer>
  );
};

const FluidContainer = ({ children, ...props }) => {
  return (
    <FullContainer {...props}>
      {children}
    </FullContainer>
  );
};

export {
  Container,
  FluidContainer
};
