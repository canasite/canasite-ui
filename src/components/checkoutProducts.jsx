import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import { CheckoutProduct } from './checkoutProduct';

import Image5 from '../assets/images/5.jpg';
import Image4 from '../assets/images/4.jpg';

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

const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
`;


export const CheckoutProducts = (props) => {
  return (
    <Container>
      <Title>Ma commande</Title>
      <ProductsList>
        <CheckoutProduct></CheckoutProduct>
        <CheckoutProduct></CheckoutProduct>
        <CheckoutProduct></CheckoutProduct>
      </ProductsList>
    </Container>
  );
};