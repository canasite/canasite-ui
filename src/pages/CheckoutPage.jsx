import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import { CheckoutAdresses } from '../components/checkoutAdresses';
import { Container } from '../layout/layout';
import { CheckoutProducts } from '../components/checkoutProducts';
import { CheckoutTotal } from '../components/checkoutTotal';
import { CheckoutCta } from '../components/checkoutCta';

const CustomContainer = styled(Container)`
  margin-top: 4rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

export const CheckoutPage = () => {
  return (
    <CustomContainer>
      <CheckoutProducts></CheckoutProducts>
      <CheckoutAdresses></CheckoutAdresses>
      <CheckoutTotal></CheckoutTotal>
      <CheckoutCta></CheckoutCta>
    </CustomContainer>
  );
};