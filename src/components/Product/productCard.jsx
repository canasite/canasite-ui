import React                                                        from 'react';
import { Link }                                                     from "react-router-dom";
import styled                                                       from 'styled-components';
import Pose                                                         from 'react-pose';

import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint }    from '../../layout/responsive-utilites/responsive-wrappers';


const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 0;
  padding: .5rem;
  text-align: center;
`;
  
const ThumbnailComponent = styled.img`
  border-radius: 1rem;
  box-shadow: 0 1px 2px hsla(0,0%,50%, 0.1), 0 3px 10px hsla(0,0%,50%, 0.1);
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
  margin-top: .5rem;
`;


const ProductCard = ({ productName, productPrice, productCategory, productThumbnail, ...props}) => {
  return (
    <>
      <MobileBreakpoint>
        <Link to="/products">
          <ProductContainer {...props}>
            <Thumbnail src={productThumbnail} alt="" width={"125px"}></Thumbnail>
            <ProductDetails>
              <ProductCategory>{productCategory}</ProductCategory>
              <Title>{productName}</Title>
              <PriceDetails><PriceTag>{productPrice}</PriceTag> €/g</PriceDetails>
            </ProductDetails>
          </ProductContainer>
        </Link>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Link to="/products">
          <ProductContainer {...props}>
            <Thumbnail src={productThumbnail} alt="" width={"175px"}></Thumbnail>
            <ProductDetails>
              <ProductCategory>{productCategory}</ProductCategory>
              <Title>{productName}</Title>
              <PriceDetails><PriceTag>{productPrice}</PriceTag> €/g</PriceDetails>
            </ProductDetails>
          </ProductContainer>
        </Link>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <ProductContainer {...props}>
          <Link to="/products">
            <Thumbnail src={productThumbnail} alt="" width={"175px"}></Thumbnail>
          </Link>
          <ProductDetails>
            <ProductCategory>{productCategory}</ProductCategory>
            <Link to="/products">
              <Title>{productName}</Title>
            </Link>
            <PriceDetails><PriceTag>{productPrice}</PriceTag> €/g</PriceDetails>
          </ProductDetails>
        </ProductContainer>
      </DesktopBreakpoint>
    </>
  );
}

export { ProductCard };
