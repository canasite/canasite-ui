import React                                                                                            from 'react';
import styled                                                                                           from 'styled-components';

import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint }                                        from '../layout/responsive-utilites/responsive-wrappers';
import { Container }                                                                                    from '../layout/layout';
import { Breadcrumb, CheckoutAdresses, CheckoutProducts, CheckoutTotal, CheckoutCta }           from '../components/index';
import { HeaderContainer }                                                                              from '../containers';
import products                                                                                         from '../mock-products/products';


const CustomContainer = styled(Container)`
  margin-top: 4rem;
  padding-top: 1rem;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    margin-top: 6rem;
    padding-top: 2rem;
  }
`;

const TabletCtaSection = styled.section`
  display: flex;
`;

const TabletTotal = styled(CheckoutTotal)`
  flex-basis: 50%;
  border: none;
`;

const TabletCta = styled(CheckoutCta)`
  flex-basis: 50%;
  padding: 2rem;
`;


const CheckoutPage = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <MobileBreakpoint>
        <CustomContainer>
          <Breadcrumb label='Retour'></Breadcrumb>
          <CheckoutProducts products={products}></CheckoutProducts>
          <CheckoutAdresses></CheckoutAdresses>
          <CheckoutTotal></CheckoutTotal>
          <CheckoutCta></CheckoutCta>
        </CustomContainer>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <CustomContainer>
          <Breadcrumb label='Retour'></Breadcrumb>
          <CheckoutProducts products={products}></CheckoutProducts>
          <CheckoutAdresses></CheckoutAdresses>
          <TabletCtaSection>
            <TabletTotal></TabletTotal>
            <TabletCta></TabletCta>
          </TabletCtaSection>
        </CustomContainer>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <CustomContainer>
          <Breadcrumb label='Retour'></Breadcrumb>
          <CheckoutProducts products={products}></CheckoutProducts>
          <CheckoutAdresses></CheckoutAdresses>
          <CheckoutTotal></CheckoutTotal>
          <CheckoutCta></CheckoutCta>
        </CustomContainer>
      </DesktopBreakpoint>
    </>
  );
};

export { CheckoutPage };
