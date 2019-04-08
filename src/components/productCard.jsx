import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.jpg';
import Image3 from '../assets/images/3.jpg';
import Image4 from '../assets/images/4.jpg';

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 0;
  padding: 0 .5rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;
  
const Thumbnail = styled.img`
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: .5rem;
`;

const Title = styled.span`
  margin-top: .5rem;
  font-size: 1rem;
  color: hsl(0,0%,40%);

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const PriceDetails = styled.span`
  flex-shrink: 0;
  color: #79CEA7;
  letter-spacing: -.15rem;
`;

const PriceTag = styled.span`
  font-size: 1.5rem;
  letter-spacing: 0;
`;

const ProductCategory = styled.p`
  font-family: 'Betm Light';
  font-size: .85rem;
  color: hsl(0,0%,80%)
`;

export const ProductCard = (props) => {
  return (
    <>
      <MobileBreakpoint>
        <Container {...props}>
          <Thumbnail src={Image4} alt="" width={"125px"}></Thumbnail>
          <ProductDetails>
            <ProductCategory>{props.category}</ProductCategory>
            <Title>{props.title}</Title>
            <PriceDetails><PriceTag>{props.price}</PriceTag> €/g</PriceDetails>
          </ProductDetails>
        </Container>
      </MobileBreakpoint>
      <TabletBreakpoint>
        <Container {...props}>
          <Thumbnail src={Image4} alt="" width={"175px"}></Thumbnail>
          <ProductDetails>
            <ProductCategory>{props.category}</ProductCategory>
            <Title>{props.title}</Title>
            <PriceDetails><PriceTag>{props.price}</PriceTag> €/g</PriceDetails>
          </ProductDetails>
        </Container>
      </TabletBreakpoint>
      <DesktopBreakpoint>
        <Container {...props}>
          <Thumbnail src={Image4} alt="" width={"175px"}></Thumbnail>
          <ProductDetails>
            <ProductCategory>{props.category}</ProductCategory>
            <Title>{props.title}</Title>
            <PriceDetails><PriceTag>{props.price}</PriceTag> €/g</PriceDetails>
          </ProductDetails>
        </Container>
      </DesktopBreakpoint>
    </>
  );
}