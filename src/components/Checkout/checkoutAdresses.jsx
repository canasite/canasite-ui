import React, { Component }       from 'react';
import styled                     from 'styled-components';

import { CheckoutAdress }         from '../index';
import AdressIconDark             from '../../assets/icons/adress-icon-dark.svg';


const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
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
  padding-bottom: 1rem;
  border-bottom: 1px solid hsl(0,0%,90%);
`;

const Heading = styled.h1`
  font-family: 'Betm Light';
  font-size: 1rem;
  color: hsl(0,0%,50%);

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const AdressesForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;


class CheckoutAdresses extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedAdressIndex: 0,
      adresses: [
        {
          place: 'Maison', 
          street: '58 rue de Perche',
          city: '75015 Paris'
        },
        {
          place: 'Travail', 
          street: '47 avenue du Nil',
          city: '92024 Courbevoie'
        },
        {
          place: 'Zouz', 
          street: '62 rue de Perche',
          city: '75015 Paris'
        }
      ]
    };
  }

  handleChange(e, index) {
    const newIndex = index;
    this.setState(prevState => ({ selectedAdressIndex: newIndex }));
  }

  render() {

    const { adresses } = this.state;

    return (
      <Container>
        <Title>
          <Icon src={AdressIconDark} width={"16px"}></Icon>
          <Heading>Mes adresses</Heading>
        </Title>
        <AdressesForm>
          { adresses.map((adress, i) => <CheckoutAdress {...adress} index={i} selectedAdressIndex={this.state.selectedAdressIndex} handleChange={this.handleChange} key={i}></CheckoutAdress>) }
        </AdressesForm>
      </Container>
    );
  }
};

export { CheckoutAdresses };
