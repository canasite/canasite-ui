import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import Image5 from '../assets/images/5.jpg';
import Image4 from '../assets/images/4.jpg';
import CloseIcon from '../assets/icons/close-icon.svg';
import { CheckoutAdress } from './checkoutAdress';

const Product = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .25rem 0;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  margin-left: 1rem;
`;

const ProductName = styled.span`
  font-family: 'Betm Book';
  font-size: 1.25rem;
  color: hsl(0,0%,60%);
`;

const ProductQuantity = styled.span`
  display: block;
  font-size: 1rem;
  color: hsl(0,0%,70%);
`;

const ProductPrice = styled.span`
  color: #79CEA7;
`;

const Close = styled.img`
  padding: .25rem;

  &:hover {
    cursor: pointer;
  }
`; 

export const CheckoutProduct = (props) => {
  return (
    <Product>
      <Thumbnail src={Image5} alt="Selected product"></Thumbnail>
      <ProductDetails>
        <ProductName>CBD Bubble-Gum</ProductName>
        <ProductQuantity>5g</ProductQuantity>
      </ProductDetails>
      <ProductPrice>30 €</ProductPrice>
      <Close src={CloseIcon}></Close>
    </Product>
  );
};