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
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const TabletCtaSection = styled.section`
  display: flex;
`;

const TabletTotal = styled(CheckoutTotal)`
  flex-basis: 50%;
  margin-right: 2rem;
  border: none;
`;

const TabletCta = styled(CheckoutCta)`
  flex-basis: 50%;
`;

export const CheckoutPage = () => {
  return (
    <>
      <MobileBreakpoint>
        <CustomContainer>
          <CheckoutProducts></CheckoutProducts>
          <CheckoutAdresses></CheckoutAdresses>
          <CheckoutTotal></CheckoutTotal>
          <CheckoutCta></CheckoutCta>
        </CustomContainer>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <CustomContainer>
          <CheckoutProducts></CheckoutProducts>
          <CheckoutAdresses></CheckoutAdresses>
          <TabletCtaSection>
            <TabletTotal></TabletTotal>
            <TabletCta></TabletCta>
          </TabletCtaSection>
        </CustomContainer>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <CustomContainer>
          <CheckoutProducts></CheckoutProducts>
          <CheckoutAdresses></CheckoutAdresses>
          <CheckoutTotal></CheckoutTotal>
          <CheckoutCta></CheckoutCta>
        </CustomContainer>
      </DesktopBreakpoint>
    </>
  );
};