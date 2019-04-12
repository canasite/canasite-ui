import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import Image5 from '../assets/images/5.jpg';
import Image4 from '../assets/images/4.jpg';
import CloseIcon from '../assets/icons/close-icon.svg';
import { CheckoutAdress } from './checkoutAdress';

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .25rem 0;
`;

const DescriptionColumn = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;

  @media (min-width: 768px) {    
    width: 75px;
    height: 75px;
  }
`;

const ProductDetails = styled.div`
  margin-left: 1rem;
`;

const ProductName = styled.span`
  font-family: 'Betm Book';
  font-size: 1.25rem;
  color: hsl(0,0%,60%);
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProductQuantity = styled.span`
  display: block;
  color: hsl(0,0%,70%);
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
`;

const PriceTag = styled.span`
  font-size: 1.5rem;
  color: #79CEA7;
  margin: 0 1rem;
`;

const CurrencySymbol = styled.span`
  font-size: .75rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Close = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const CheckoutProduct = (props) => {
  return (
    <Container>
      <DescriptionColumn>
        <Thumbnail src={Image5} alt="Selected product"></Thumbnail>
        <ProductDetails>
          <ProductName>CBD Bubble-Gum</ProductName>
          <ProductQuantity>5g</ProductQuantity>
        </ProductDetails>
      </DescriptionColumn>
      <ProductPrice>
        <PriceTag>
          30
          <CurrencySymbol>€</CurrencySymbol>
          </PriceTag>
        <Close src={CloseIcon}></Close>
      </ProductPrice>
    </Container>
  );
};