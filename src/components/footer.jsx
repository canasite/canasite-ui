import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/icons/logo.svg';

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
  padding: 3rem;
  color: white;
  background-color: #79CEA7;
`;

const Description = styled.div`
  dislay: flex;
  flex-direction: column;
  flex-basis: 25%;
  font-family: 'Betm Extralight';
  font-size: .75rem;
`;

const DescriptionParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.25;
`

const ServicesColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 .5rem;
`;

const ServicesTitle = styled.h4`
  font-family: 'Betm Medium';
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StayConnected = styled.h4`
  margin-bottom: .75rem;
  font-size: 1.25rem;
`;

const ContactForm = styled.form.attrs({ method: 'GET', action: '/' })`
  display: flex;
`;

const EmailInput = styled.input.attrs({ 
  type: 'email',
  placeholder: 'Enter your email...'
  })`
  border: none;
  padding: .5rem;
  border-radius: 5px 0 0 5px;
`;

const EmailSubmitButton = styled.button.attrs({ type: 'submit' })`
  padding: 0 .75rem;
  padding-bottom: 0.2rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  background-color: #6BB592;
  `;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Description>
          <img src={Logo} alt="Logo"/>
          <DescriptionParagraph>Le Vendeur est éditeur de Produits et Services de XXX à destination de consommateurs.</DescriptionParagraph>
        </Description>
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
        <Contact>
          <StayConnected>Restons connectés !</StayConnected>
          <ContactForm>
            <EmailInput></EmailInput>
            <EmailSubmitButton>+</EmailSubmitButton>
          </ContactForm>
        </Contact>
      </FooterContainer>
    </FooterWrapper>
  );
};