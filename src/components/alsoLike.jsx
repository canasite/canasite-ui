import React from 'react';
import styled from 'styled-components';

import Image4 from '../assets/images/4.jpg';

const Container = styled.section`
  position: relative;
  padding: 1rem 0;
  border-top: 1px solid hsl(0,0%,90%);
`;

const Title = styled.h4`
  margin-bottom: 1rem;
  font-family: 'Betm Light';
  font-size: 1.1rem;
  color: hsl(0,0%,75%);
`;

const ProductsList = styled.ul`
  display: flex;
  margin-bottom: -.875rem;
  overflow-x: auto;
  overflow-x: -ms-overflow-style: none;
  scrollbar-width: none;
 
  &::-webkit-scrollbar {
    width: 0 !important
  };

  &::after {
    content: '';
    left: 0;
    box-shadow: inset -45px 0px 10px -46px rgba(0,0,0,.15);
    top: 10%;
    position: absolute;
    bottom: 0;
    right: 0;
    pointer-events: none;
  }
`;

const Product = styled.li`
  padding-right: 1rem;
`;

const ProductThumbnail = styled.a`
  display: block;
  min-height: 10rem;
  width: 10rem;
  border-radius: 5px;
  background: ${props => `url(${props.image}) center no-repeat`};
  background-size: cover;
  
  &:hover {
    cursor: pointer;
  }
`;

export const AlsoLike = (props) => {
  return (
    <Container>
      <Title>Vous aimerez aussi</Title>
      <ProductsList>
        <Product>
          <ProductThumbnail image={Image4} alt="Plus de produits"></ProductThumbnail>
        </Product>
        <Product>
          <ProductThumbnail image={Image4} alt="Plus de produits"></ProductThumbnail>
        </Product>
        <Product>
          <ProductThumbnail image={Image4} alt="Plus de produits"></ProductThumbnail>
        </Product>
        <Product>
          <ProductThumbnail image={Image4} alt="Plus de produits"></ProductThumbnail>
        </Product>
        <Product>
          <ProductThumbnail image={Image4} alt="Plus de produits"></ProductThumbnail>
        </Product>
        <Product>
          <ProductThumbnail image={Image4} alt="Plus de produits"></ProductThumbnail>
        </Product>
      </ProductsList>
    </Container>
  );
};