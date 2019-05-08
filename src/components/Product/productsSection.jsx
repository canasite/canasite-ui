import React                                                                                  from 'react';
import styled                                                                                 from 'styled-components';

import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint }                              from '../../layout/responsive-utilites/responsive-wrappers';
import { Container }                                                                          from '../../layout/layout';
import { ProductRowHeader, ProductRow, SideNavigationDesktop, ProductCard, MoreButton }       from '../index';
import Products                                                                               from '../../assets/mock-products/products';
import TopSalesIcon                                                                           from '../../assets/icons/topSalesIcon.svg';
import NewProductsIcon                                                                        from '../../assets/icons/newProductsIcon.svg';


const ProductList = styled.section`
  padding-top: 2rem;
  
  @media (min-width: 768px) {
    padding-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
  }
`;


const [ productOne, productTwo ] = Products;

const ProductsSection = ({ children }) => {
  return (
    <>  

      <MobileBreakpoint>
        <Container pBot={"3rem"}>
          <ProductList>
            <ProductRowHeader title='Top ventes' iconSrc={TopSalesIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard {...productTwo} marginLeft={"1rem"}></ProductCard>
              <ProductCard {...productOne}></ProductCard>
              <ProductCard {...productOne}></ProductCard>
              <ProductCard {...productOne}></ProductCard>
              <ProductCard {...productOne}></ProductCard>
              <MoreButton></MoreButton>
            </ProductRow>
          </ProductList>
          <ProductList>
            <ProductRowHeader title='Nouveautées' iconSrc={NewProductsIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
            </ProductRow>
            <ProductRow>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
            </ProductRow>
          </ProductList>
        </Container>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Container>
          <ProductList>
            <ProductRowHeader title='Top ventes' iconSrc={TopSalesIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
            </ProductRow>
          </ProductList>
          <ProductList>
            <ProductRowHeader title='Nouveautées' iconSrc={NewProductsIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
            </ProductRow>
          </ProductList>
        </Container>
      </TabletBreakpoint>
      
      <DesktopBreakpoint>
        <Container>
          <ProductList>
            <SideNavigationDesktop></SideNavigationDesktop>
            <ProductRowHeader title='Top ventes' iconSrc={TopSalesIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
            </ProductRow>
          </ProductList>
          <ProductList>
            <ProductRowHeader title='Nouveautées' iconSrc={NewProductsIcon}></ProductRowHeader>
            <ProductRow>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
              <ProductCard {...productTwo}></ProductCard>
            </ProductRow>
          </ProductList>
        </Container>
      </DesktopBreakpoint>

    </>
  );
}

export { ProductsSection };
