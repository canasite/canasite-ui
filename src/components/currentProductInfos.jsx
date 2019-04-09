import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import { RatingStars } from './ratingStars';
import { Button } from './button';
import { BagIncrease } from './bagIncrease';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const ProductName = styled.h1`
  margin-bottom: .5rem;
  font-size: 2.5rem;
  letter-spacing: -.075rem;
  color: hsl(0,0%,50%);
`;

const PriceContainer = styled.div`
  @media (min-width: 768px) {
    padding-top: 1rem;
  }
`

const Price = styled.span`
  margin-right: .25rem;
  font-size: 3rem;
  color: #79CEA7;
`;

const PriceUnits = styled.span`
  font-size: 1.25rem;
  letter-spacing: -.15rem;
  color: #79CEA7;
`;

const IngredientsList = styled.ul`
  display: flex;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const IngredientItem = styled.li`
  padding: .25rem 1rem;
  border: 1px solid hsl(0,0%,75%);
  border-radius: 5px;
  font-size: .75rem;
  line-height: 1.35rem;
  color: hsl(0,0%,75%);
  
  &:not(:last-child) {
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    padding: .25rem 1rem;
    font-size: 1em;
    line-height: 1.5rem;
  }
`;

const ProductDescription = styled.p`
  margin-bottom: 1rem;
  font-family: 'Betm Light';
  font-size: 1rem;
  line-height: 1.35rem;
  color: hsl(0,0%,75%);

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const BelowProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid hsl(0,0%,90%);
`;

const Rating = styled.div`
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 0;
  }
`;

const StarLabel = styled.p`
  margin-bottom: .5rem;
  font-family: 'Betm Extralight';
  font-size: .85rem;
  color: hsl(0,0%,70%);
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;

  > :first-child {
      margin-right: 2rem;
    }
  }
`;

export const CurrentProductInfos = (props) => {
  return (
    <>
      <MobileBreakpoint>
        <Container>
          <ProductName>{props.title}</ProductName>
          <BelowProduct>
            <Rating>
              <StarLabel>Avis clients</StarLabel>
              <RatingStars></RatingStars>
            </Rating>
            <PriceContainer>
              <Price>6</Price>
              <PriceUnits>€/g</PriceUnits>
            </PriceContainer>
          </BelowProduct>
          <IngredientsList>
            <IngredientItem>
              10-15% CBD
            </IngredientItem>
            <IngredientItem>
              {"<"} 0.2% THC
            </IngredientItem>
            <IngredientItem>
              INDOOR
            </IngredientItem>
          </IngredientsList>
          <ProductDescription>
            La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique. Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.
          </ProductDescription>
          <Cart>
            <BagIncrease></BagIncrease>
            <Button>AJOUTER AU PANIER</Button>
          </Cart>
        </Container>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Container>
          <ProductName>{props.title}</ProductName>
          <IngredientsList>
            <IngredientItem>
              10-15% CBD
            </IngredientItem>
            <IngredientItem>
              {"<"} 0.2% THC
            </IngredientItem>
            <IngredientItem>
              INDOOR
            </IngredientItem>
          </IngredientsList>
          <PriceContainer>
            <Price>6</Price>
            <PriceUnits>€/g</PriceUnits>
          </PriceContainer>
          <Rating>
            <StarLabel>Avis clients</StarLabel>
            <RatingStars></RatingStars>
          </Rating>
          <ProductDescription>
            La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique. Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.
          </ProductDescription>
          <Cart>
            <BagIncrease></BagIncrease>
            <Button fontSize='1.25rem'>AJOUTER AU PANIER</Button>
          </Cart>
        </Container>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <Container>
          <ProductName>{props.title}</ProductName>
          <IngredientsList>
            <IngredientItem>
              10-15% CBD
            </IngredientItem>
            <IngredientItem>
              {"<"} 0.2% THC
            </IngredientItem>
            <IngredientItem>
              INDOOR
            </IngredientItem>
          </IngredientsList>
          <PriceContainer>
            <Price>6</Price>
            <PriceUnits>€/g</PriceUnits>
          </PriceContainer>
          <Rating>
            <StarLabel>Avis clients</StarLabel>
            <RatingStars></RatingStars>
          </Rating>
          <ProductDescription>
            La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique. Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.
          </ProductDescription>
          <Cart>
            <BagIncrease></BagIncrease>
            <Button fontSize='1.25rem'>AJOUTER AU PANIER</Button>
          </Cart>
        </Container>
      </DesktopBreakpoint>
    </>
  );
};