import React                                                        from 'react';
import styled                                                       from 'styled-components';

import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint }    from '../../layout/responsive-utilites/responsive-wrappers';
import SVGLogo                                                      from '../../assets/icons/logo.svg';


const FooterContainer = styled.section`
  display: flex;
  justify-content: space-between;

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

const FooterWrapper = styled.footer`
  padding: 2rem 1rem;
  color: white;
  background-color: #79CEA7;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const Logo = styled.img`

  @media (min-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

const Description = styled.div`
  font-family: 'Betm Extralight';
  font-size: .75rem;
  text-align: center;
  padding: 1rem 0;

  @media (min-width: 1024px) {
    flex-basis: 25%;
    padding: 0;
    text-align: left;
  }
`;

const DescriptionParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.25;
`
const ServicesContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const ServicesColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 .5rem;
`;

const ServicesTitle = styled.h4`
  font-family: 'Betm Book';
  font-size: 1.25rem;
`;

const Services = styled.ul`
  list-style: none;
`;

const ServicesItem = styled.li`
  font-family: 'Betm Extralight';
  font-size: 1rem;
  margin: .75rem 0;
`;

const Contact = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (min-width: 1024px) {
    margin-bottom: 0;
    text-align: left;
    flex-basis: 25%;
  }
`;

const StayConnected = styled.h4`
  margin-bottom: 2rem;
  font-size: 2rem;

  @media (min-width: 1024px) {
    margin-bottom: .5rem;
    font-size: 1.25rem;
  }
`;

const ContactForm = styled.form.attrs({
  method: 'GET',
  action: '/' })`

  display: flex;
`;

const EmailInput = styled.input.attrs({ 
  type: 'email',
  placeholder: 'Enter your email...'
  })`

  flex-grow: 1;
  padding: .5rem 1.5rem;
  border: none;
  border-radius: 5px 0 0 5px;
  font-family: 'Betm Light';
  font-size: 1rem;
  line-height: 2rem;
  color: #6BB592;

  &::placeholder {
    font-size: 1rem;
    color: #6BB592;
  }

  @media (min-width: 768px) {
    width: 250px;
  }

  @media (min-width: 1024px) {
    width: auto;
  }
`;

const EmailSubmitButton = styled.button.attrs({
  type: 'submit'
  })`

  padding: 0 1.25rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  background-color: #6BB592;
`;


const Footer = () => {
  return (
    <FooterWrapper>

      <MobileBreakpoint>
        <Contact>
          <StayConnected>Restons connectés !</StayConnected>
          <ContactForm>
            <EmailInput></EmailInput>
            <EmailSubmitButton>+</EmailSubmitButton>
          </ContactForm>
        </Contact>
        <ServicesContainer>
          <ServicesColumn>
            <ServicesTitle>Support</ServicesTitle>
            <Services>
              <ServicesItem>Privacy policy</ServicesItem>
              <ServicesItem>Terms & Condition</ServicesItem>
              <ServicesItem>Contact us</ServicesItem>
            </Services>
          </ServicesColumn>
          <ServicesColumn>
            <ServicesTitle>Informations</ServicesTitle>
            <Services>
              <ServicesItem>Privacy policy</ServicesItem>
              <ServicesItem>Terms & Condition</ServicesItem>
              <ServicesItem>Contact us</ServicesItem>
            </Services>
          </ServicesColumn>
          <ServicesColumn>
            <ServicesTitle>Newsletter</ServicesTitle>
            <Services>
              <ServicesItem>Privacy policy</ServicesItem>
              <ServicesItem>Terms & Condition</ServicesItem>
              <ServicesItem>Contact us</ServicesItem>
            </Services>
          </ServicesColumn>
        </ServicesContainer>
        <Description>
          <Logo src={SVGLogo} alt="Logo"></Logo>
        </Description>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Contact>
          <StayConnected>Restons connectés !</StayConnected>
          <ContactForm>
            <EmailInput></EmailInput>
            <EmailSubmitButton>+</EmailSubmitButton>
          </ContactForm>
        </Contact>
        <ServicesContainer>
          <ServicesColumn>
            <ServicesTitle>Support</ServicesTitle>
            <Services>
              <ServicesItem>Privacy policy</ServicesItem>
              <ServicesItem>Terms & Condition</ServicesItem>
              <ServicesItem>Contact us</ServicesItem>
            </Services>
          </ServicesColumn>
          <ServicesColumn>
            <ServicesTitle>Informations</ServicesTitle>
            <Services>
              <ServicesItem>Privacy policy</ServicesItem>
              <ServicesItem>Terms & Condition</ServicesItem>
              <ServicesItem>Contact us</ServicesItem>
            </Services>
          </ServicesColumn>
          <ServicesColumn>
            <ServicesTitle>Newsletter</ServicesTitle>
            <Services>
              <ServicesItem>Privacy policy</ServicesItem>
              <ServicesItem>Terms & Condition</ServicesItem>
              <ServicesItem>Contact us</ServicesItem>
            </Services>
          </ServicesColumn>
        </ServicesContainer>
        <Description>
          <Logo src={SVGLogo} alt="Logo"></Logo>
        </Description>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <FooterContainer>
          <Description>
            <Logo src={SVGLogo} alt="Logo"></Logo>
            <DescriptionParagraph>Le Vendeur est éditeur de Produits et Services de Canasite à destination de consommateurs.</DescriptionParagraph>
          </Description>
          <ServicesContainer>
            <ServicesColumn>
              <ServicesTitle>Support</ServicesTitle>
              <Services>
                <ServicesItem>Privacy policy</ServicesItem>
                <ServicesItem>Terms & Condition</ServicesItem>
                <ServicesItem>Contact us</ServicesItem>
              </Services>
            </ServicesColumn>
            <ServicesColumn>
              <ServicesTitle>Informations</ServicesTitle>
              <Services>
                <ServicesItem>Privacy policy</ServicesItem>
                <ServicesItem>Terms & Condition</ServicesItem>
                <ServicesItem>Contact us</ServicesItem>
              </Services>
            </ServicesColumn>
            <ServicesColumn>
              <ServicesTitle>Newsletter</ServicesTitle>
              <Services>
                <ServicesItem>Privacy policy</ServicesItem>
                <ServicesItem>Terms & Condition</ServicesItem>
                <ServicesItem>Contact us</ServicesItem>
              </Services>
            </ServicesColumn>
          </ServicesContainer>
          <Contact>
            <StayConnected>Restons connectés !</StayConnected>
            <ContactForm>
              <EmailInput></EmailInput>
              <EmailSubmitButton>+</EmailSubmitButton>
            </ContactForm>
          </Contact>
        </FooterContainer>
      </DesktopBreakpoint>

    </FooterWrapper>
  );
};

export { Footer };
