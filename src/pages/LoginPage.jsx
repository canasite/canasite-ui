import React                from 'react';
import styled               from 'styled-components';
import { Container }        from '../layout/layout';
import { LoginSection }     from '../components/index';


const StyledContainer = styled(Container)`
  padding: 0;
`;

const LoginPage = () => {
  return (
    <StyledContainer>
      <LoginSection></LoginSection>
    </StyledContainer>
  );
};

export { LoginPage };
