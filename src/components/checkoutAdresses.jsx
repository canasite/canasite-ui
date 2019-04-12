import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import { CheckoutAdress } from './checkoutAdress.jsx';

import AdressIconDark from '../assets/icons/adress-icon-dark.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-bottom: 1px solid hsl(0,0%,90%);
`;

const Icon = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  margin-right: .5rem;
  vertical-align: middle;

  :hover {
    cursor: pointer;
  };

  @media (min-width: 1024px) {
    width: 28px;
    height: 28px;
    margin-right: .75rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-family: 'Betm Light';
  font-size: 1rem;
  color: hsl(0,0%,50%);

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Adresses = styled.form`
  display: flex;
  flex-direction: column;
`;

export class CheckoutAdresses extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedAdress: 'Maison'
    };
  }

  handleChange(event) {
    const newAdress = event.target.value;
    this.setState(prevState => ({ selectedAdress: newAdress }));
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <Title>
          <Icon src={AdressIconDark} width={"16px"}></Icon>
          <Heading>Mes adresses</Heading>
        </Title>
        <Adresses>
          <CheckoutAdress label="Maison" isSelected={this.state.selectedAdress === "Maison"} handleChange={this.handleChange}></CheckoutAdress>
          <CheckoutAdress label="Home"  isSelected={this.state.selectedAdress === "Home"} handleChange={this.handleChange}></CheckoutAdress>
          <CheckoutAdress label="Zouz"  isSelected={this.state.selectedAdress === "Zouz"} handleChange={this.handleChange}></CheckoutAdress>
        </Adresses>
      </Container>
    );
  }
};