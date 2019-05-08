import React                                                                                    from 'react';
import styled                                                                                   from 'styled-components';

import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint }                                from '../../layout/responsive-utilites/responsive-wrappers';
import { Container as LayoutContainer }                                                         from '../../layout/layout';
import { CheckoutProduct, CheckoutAdresses, Breadcrumb, CheckoutTotal, CheckoutCta }            from '../index';
import BagIconDark                                                                              from '../../assets/icons/bag-icon-dark.svg';
import EmptyCartIllustration                                                                              from '../../assets/images/empty-list.png';


const Title = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
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
`;

const StyledCheckoutProduct = styled(CheckoutProduct)`
  background-color: ${props => props.isPair % 2 !== 0 ? 'hsl(0,0%,98%)' : 'transparent'};
  border-radius: ${props => props.isPair % 2 !== 0 ? '5px' : 'initial'};
`;

const Container = styled(LayoutContainer)`
  margin-top: 4rem;

  @media (min-width: 768px) {
    margin-top: 6rem;
    padding-bottom: 4rem;
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

const NoCart = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);
`;

const NoCartMessage = styled.h1`
  font-size: 1.5rem;
  color: hsl(0,0%,50%);
`;

const NoCartIllustration = styled.img`
  max-width: 10rem;
  margin: 2rem;
`;

const CheckoutProducts = ({ currentCart, removeFromCart }) => {

  if (currentCart.length) {
    return (
      <Container>
        <Breadcrumb label='Retour'></Breadcrumb>
        <Title>
          <Icon src={BagIconDark}></Icon>
          <Heading>Ma commande</Heading>
        </Title>
        <ProductsList>
          { currentCart.map((product, i) => <StyledCheckoutProduct {...product} removeFromCart={removeFromCart} key={i} isPair={i}></StyledCheckoutProduct>) }
        </ProductsList>

        <MobileBreakpoint>
          <CheckoutAdresses></CheckoutAdresses>
          <CheckoutTotal></CheckoutTotal>
          <CheckoutCta></CheckoutCta>
        </MobileBreakpoint>
        <TabletBreakpoint>
  
          <CheckoutAdresses></CheckoutAdresses>
          <TabletCtaSection>
            <TabletTotal></TabletTotal>
            <TabletCta></TabletCta>
          </TabletCtaSection>
        </TabletBreakpoint>
  
        <DesktopBreakpoint>
          <CheckoutAdresses></CheckoutAdresses>
          <CheckoutTotal></CheckoutTotal>
          <CheckoutCta></CheckoutCta>
        </DesktopBreakpoint>
        
      </Container>
    );
  } else {
    return (
      <Container>
        <Breadcrumb label='Retour'></Breadcrumb>
        <NoCart>
          <NoCartIllustration src={EmptyCartIllustration}></NoCartIllustration>
          <NoCartMessage>
            Votre panier est vide !
          </NoCartMessage>
        </NoCart>
      </Container>
    );
  }

};

export { CheckoutProducts };
