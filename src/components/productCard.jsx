import React from 'react';
import styled from 'styled-components';
import Pose from 'react-pose';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import { Link } from "react-router-dom";

import Image4 from '../assets/images/4.jpg';

const ProductContainer = styled.li`
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
  
const ThumbnailComponent = styled.img`
  border-radius: 5px;
`;

const Thumbnail = Pose(ThumbnailComponent)({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  }
});

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
  color: hsl(0,0%,80%);
  margin-bottom: .5rem;
`;

export const ProductCard = (props) => {
  return (
    <>
      <MobileBreakpoint>
        <Link to="/products">
          <ProductContainer {...props}>
            <Thumbnail src={Image4} alt="" width={"125px"}></Thumbnail>
            <ProductDetails>
              <ProductCategory>{props.category}</ProductCategory>
              <Title>{props.title}</Title>
              <PriceDetails><PriceTag>{props.price}</PriceTag> €/g</PriceDetails>
            </ProductDetails>
          </ProductContainer>
        </Link>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Link to="/products">
          <ProductContainer {...props}>
            <Thumbnail src={Image4} alt="" width={"175px"}></Thumbnail>
            <ProductDetails>
              <ProductCategory>{props.category}</ProductCategory>
              <Title>{props.title}</Title>
              <PriceDetails><PriceTag>{props.price}</PriceTag> €/g</PriceDetails>
            </ProductDetails>
          </ProductContainer>
        </Link>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <ProductContainer {...props}>
          <Link to="/products">
            <Thumbnail src={Image4} alt="" width={"175px"}></Thumbnail>
          </Link>
          <ProductDetails>
            <ProductCategory>{props.category}</ProductCategory>
            <Link to="/products">
              <Title>{props.title}</Title>
            </Link>
            <PriceDetails><PriceTag>{props.price}</PriceTag> €/g</PriceDetails>
          </ProductDetails>
        </ProductContainer>
      </DesktopBreakpoint>
    </>
  );
}