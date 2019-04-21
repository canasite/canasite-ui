import React from 'react';
import styled from 'styled-components';
import { Container } from '../layout/layout';
import { LoginSection } from '../components/loginSection';

const StyledContainer = styled(Container)`
  padding: 0;
`;

export const LoginPage = () => {
  return (
    <StyledContainer>
      <LoginSection></LoginSection>
    </StyledContainer>
  );
};
