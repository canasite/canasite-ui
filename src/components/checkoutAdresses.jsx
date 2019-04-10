import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import { CheckoutAdress } from './checkoutAdress.jsx';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-bottom: 1px solid hsl(0,0%,90%);
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-family: 'Betm Light';
  font-size: 1rem;
  color: hsl(0,0%,50%);
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
        <Title>Mes adresses</Title>
        <Adresses>
          <CheckoutAdress label="Maison" isSelected={this.state.selectedAdress === "Maison"} handleChange={this.handleChange}></CheckoutAdress>
          <CheckoutAdress label="Home"  isSelected={this.state.selectedAdress === "Home"} handleChange={this.handleChange}></CheckoutAdress>
          <CheckoutAdress label="Zouz"  isSelected={this.state.selectedAdress === "Zouz"} handleChange={this.handleChange}></CheckoutAdress>
        </Adresses>
      </Container>
    );
  }
};