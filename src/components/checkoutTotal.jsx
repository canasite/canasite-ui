import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-bottom: 1px solid hsl(0,0%,90%);
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .25rem 0;
  font-family: 'Betm Light';
`;

const TotalRow = styled(DetailsRow)`
  margin-bottom: 0;
  margin-top: 1rem;
`;

const SubInfos = styled.span`
  font-size: .85rem;
  color: hsl(0,0%,70%);
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const TotalLabel = styled.span`
  font-family: 'Betm Book';
  font-size: 1.25rem;
  color: hsl(0,0%,50%);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TotalPrice = styled.span`
  font-family: 'Betm Medium';
  font-size: 1.5rem;
  color: #79CEA7;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const TotalPriceTaxes = styled.span`
  font-size: .75rem;

  @media (min-width: 768px) {
    font-size: .85rem;
  }
`;

export const CheckoutTotal = (props) => {
  return (
    <Container {...props}>
      <DetailsRow>
        <SubInfos>Total produits</SubInfos>
        <SubInfos>90€ TTC</SubInfos>
      </DetailsRow>
      <DetailsRow>
        <SubInfos>Livraison</SubInfos>
        <SubInfos>Gratuite</SubInfos>
      </DetailsRow>
      <TotalRow>
        <TotalLabel>Total</TotalLabel>
        <TotalPrice>90€ <TotalPriceTaxes>TTC</TotalPriceTaxes></TotalPrice>
      </TotalRow>
    </Container>
  );
};