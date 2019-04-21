import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import { Button } from './button';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

const Conditions = styled.p`
  margin-bottom: .5rem;
  text-align: center;
  font-family: 'Betm Extralight';
  font-size: .6rem;
  color: hsl(0,0%,85%);

  @media (min-width: 768px) {
    font-size: .85rem;
    text-align: left;
  }

  @media (min-width: 1024px) {
    max-width: 75%;
    text-align: center;
  }
`;

const DesktopButton = styled(Button)`
  font-size: 1.5rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
`;

export const CheckoutCta = (props) => {
  return (
    <>
      <MobileBreakpoint>
        <Container {...props}>
          <Conditions>
            La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique.
            Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.
          </Conditions>
          <Button>PAYER</Button>
        </Container>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Container {...props}>
          <Conditions>
            La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique.
            Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.
          </Conditions>
          <Button>PAYER</Button>
        </Container>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <Container {...props}>
          <Conditions>
            La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique.
            Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.
          </Conditions>
          <DesktopButton>PAYER</DesktopButton>
        </Container>
      </DesktopBreakpoint>
    </>
  );
};
