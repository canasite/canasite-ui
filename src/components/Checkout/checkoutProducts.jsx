import React                                                      from 'react';
import styled                                                     from 'styled-components';

import { CheckoutProduct }                                        from '../index';
import BagIconDark                                                from '../../assets/icons/bag-icon-dark.svg';


const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-bottom: 1px solid hsl(0,0%,90%);

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
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
    width: 26px;
    height: 26px;
    margin-right: .75rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Betm Light';
  font-size: 1rem;
  color: hsl(0,0%,50%);
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;


const CheckoutProducts = ({ products }) => {
  return (
    <Container>
      <Title>
        <Icon src={BagIconDark}></Icon>
        <Heading>Ma commande</Heading>
      </Title>
      <ProductsList>
        { products.map((product, i) => <CheckoutProduct {...product} key={i}></CheckoutProduct>) }
      </ProductsList>
    </Container>
  );
};

export { CheckoutProducts };
