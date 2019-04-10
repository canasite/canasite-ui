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

const SubInfos = styled.span`
  font-size: .85rem;
  color: hsl(0,0%,70%);
`;

const TotalLabel = styled.span`
  font-size: 1.25rem;
  color: hsl(0,0%,50%);
`;

const TotalPrice = styled.span`
  font-size: 1.25rem;
  color: #79CEA7;
`;

export const CheckoutTotal = (props) => {
  return (
    <Container>
      <DetailsRow>
        <SubInfos>Total produits</SubInfos>
        <SubInfos>90€ TTC</SubInfos>
      </DetailsRow>
      <DetailsRow>
        <SubInfos>Livraison</SubInfos>
        <SubInfos>Gratuite</SubInfos>
      </DetailsRow>
      <DetailsRow>
        <TotalLabel>Total</TotalLabel>
        <TotalPrice>90€ TTC</TotalPrice>
      </DetailsRow>
    </Container>
  );
};