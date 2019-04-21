import React, { Component } from 'react';
import styled from 'styled-components';
import ShippingIcon from '../assets/icons/shipping-Icon.svg';

const Wrapper = styled.div`
  z-index: 90;
  position: relative;
  margin-top: -2rem;
  display: flex;
  justify-content: center;
  font-size: .75rem;

  @media (min-width: 321px) {
    font-size: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  background-color: #79CEA7;
  border-radius: 1rem;
`;

const MainTextInfo = styled.p`
  margin-left: 1rem;
  font-family: 'Betm Book';
`;
  
const SecondaryTextInfo = styled.span`  
  font-family: 'Betm Extralight';
`;


export class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true
    };
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <img src={ShippingIcon} alt="Shipping offer"/>
          <MainTextInfo>
            Livraison offerte
            <SecondaryTextInfo> à partir de 60€ d'achat</SecondaryTextInfo>
          </MainTextInfo>
        </Container>
      </Wrapper>
    );
  }
}
