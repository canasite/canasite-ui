import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import { Button } from './button';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Conditions = styled.p`
  margin-bottom: .5rem;
  font-family: 'Betm Extralight';
  font-size: .6rem;
  color: hsl(0,0%,85%);
`;

export const CheckoutCta = (props) => {
  return (
    <Container>
      <Conditions>
        La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique.
        Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.
      </Conditions>
      <Button>PAYER</Button>
    </Container>
  );
};