import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import TopSalesIcon from '../assets/icons/topSalesIcon.svg';
import NewProductsIcon from '../assets/icons/newProductsIcon.svg';

import { Container } from '../layout/layout';
import { ProductRowHeader } from './productRowHeader';
import { ProductRow } from './productRow';
import { SideNavigation } from './sideNavigation';
import { ProductCard } from './productCard';
import { MoreButton } from './moreButton';

const ProductList = styled.section`
  padding-top: 1rem;
  
  @media (min-width: 768px) {
    padding-bottom: 4rem;
  }
`;

// box-shadow: 0 3px 6px -15px rgba(0,0,0,0.16), 0 3px 6px -4px rgba(0,0,0,0.23);


export const ProductSection = ({children}) => {
  return (
    <>  

      <MobileBreakpoint>
        <SideNavigation></SideNavigation>
        <Container pBot={"3rem"}>
          <ProductList>
            <ProductRowHeader title='Top ventes' iconSrc={TopSalesIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard title='CBD OG KUSH VERYLONG' price={50} category={'Cannabis'} marginLeft={"1rem"}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <MoreButton></MoreButton>
            </ProductRow>
          </ProductList>
          <ProductList>
            <ProductRowHeader title='Nouveautées' iconSrc={NewProductsIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
            <ProductRow>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
          </ProductList>
        </Container>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Container>
          <ProductList>
            <ProductRowHeader title='Top ventes' iconSrc={TopSalesIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard title='CBD OG KUSH VERYLONG' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
            <ProductRow>
              <ProductCard title='CBD OG KUSH VERYLONG' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
          </ProductList>
          <ProductList>
            <ProductRowHeader title='Nouveautées' iconSrc={NewProductsIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
            <ProductRow>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
          </ProductList>
        </Container>
      </TabletBreakpoint>
      
      <DesktopBreakpoint>
        <Container>
          <ProductList>
            <ProductRowHeader title='Top ventes' iconSrc={TopSalesIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard title='CBD OG KUSH VERYLONG' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
            <ProductRow>
              <ProductCard title='CBD OG KUSH VERYLONG' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
          </ProductList>
          <ProductList>
            <ProductRowHeader title='Nouveautées' iconSrc={NewProductsIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
            <ProductRow>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
              <ProductCard title='CBD OG KUSH' price={50} category={'Cannabis'}></ProductCard>
            </ProductRow>
          </ProductList>
        </Container>
      </DesktopBreakpoint>

    </>
  );
}

