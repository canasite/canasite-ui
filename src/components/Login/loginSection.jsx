import React                                                          from 'react';
import styled                                                         from 'styled-components';

import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint }      from '../../layout/responsive-utilites/responsive-wrappers';
import { LoginFormContainer }                                         from '../../containers/index';
import LoginIllustration                                              from '../../assets/images/login-illustration2.svg';


const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #79CEA7;
  
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 375px) {
    padding: 2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    box-shadow: 0 1px 2px hsla(0,0%,50%, 0.1), 0 3px 10px hsla(0,0%,50%, 0.1);
    border-radius: 1rem;
  }
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 5px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 0;
    margin-bottom: 0;
  }
`;

const Header = styled.h1`
  font-family: 'Betm Book';
  font-size: 2.5rem;
  margin-bottom: 1rem;
  align-self: center;
`;

const SubHeader = styled.p`
  max-width: 20rem;
  font-family: 'Betm Light';
  color: hsl(0,0%,80%);
`;

const Illustration = styled.img`
  max-width: 8rem;
  margin: 1rem;

  @media (min-width: 375px) {
    margin: 2rem;
  }

  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;


const LoginSection = () => {
  return (
    <Wrapper>
      <Container>

        <MobileBreakpoint>
          <Welcome>
            <Illustration src={LoginIllustration}></Illustration>
            <Header>Bienvenue !</Header>
            <SubHeader>
              The Route component is perhaps the most important component in React Router.
            </SubHeader>
          </Welcome>
        </MobileBreakpoint>

        <TabletBreakpoint>
          <Welcome>
            <Header>Bienvenue !</Header>
            <SubHeader>
              The Route component is perhaps the most important component in React Router.
            </SubHeader>
            <Illustration src={LoginIllustration}></Illustration>
          </Welcome>
        </TabletBreakpoint>

        <DesktopBreakpoint>
          <Welcome>
            <Header>Bienvenue !</Header>
            <SubHeader>
              The Route component is perhaps the most important component in React Router.
            </SubHeader>
            <Illustration src={LoginIllustration}></Illustration>
          </Welcome>
        </DesktopBreakpoint>

        <LoginFormContainer></LoginFormContainer>
        
      </Container>
    </Wrapper>
  );
};

export { LoginSection };
