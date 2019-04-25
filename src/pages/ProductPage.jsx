import React                                                                                                              from 'react';
import styled                                                                                                             from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint }                                                          from '../layout/responsive-utilites/responsive-wrappers';

import { Container }                                                                                                      from '../layout/layout';
import { Breadcrumb, CurrentProductImage, CurrentProductInfosContainer, CommentsSection, AlsoLike, Header, Footer }       from '../components/index';


const ProductWrapper = styled.section`
  margin-top: 5rem;
  padding: 2rem 0;

  @media (min-width: 320px) {
    margin-top: 4rem;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 6rem;
    padding-top: 2rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

const ProductInfos = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
`;


const ProductPage = (props) => {
  return (
    <>
      <Header></Header>
      <MobileBreakpoint>
        <ProductWrapper>
          <Breadcrumb label="Cannabis"></Breadcrumb>
          <ProductInfos>
            <CurrentProductImage></CurrentProductImage>
            <CurrentProductInfosContainer title="CBD Bubble Gum"></CurrentProductInfosContainer>
          </ProductInfos>
          <CommentsSection></CommentsSection>
          <AlsoLike></AlsoLike>
        </ProductWrapper>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Container>
          <ProductWrapper>
            <Breadcrumb label="Cannabis"></Breadcrumb>
            <ProductInfos>
              <CurrentProductImage></CurrentProductImage>
              <CurrentProductInfosContainer title="CBD Bubble Gum"></CurrentProductInfosContainer>
            </ProductInfos>
            <CommentsSection></CommentsSection>
            <AlsoLike></AlsoLike>
          </ProductWrapper>
        </Container>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <Container>
          <ProductWrapper>
            <Breadcrumb label="Cannabis"></Breadcrumb>
            <ProductInfos>
              <CurrentProductImage></CurrentProductImage>
              <CurrentProductInfosContainer title="CBD Bubble Gum"></CurrentProductInfosContainer>
            </ProductInfos>
            <CommentsSection></CommentsSection>
            <AlsoLike></AlsoLike>
          </ProductWrapper>
        </Container>
      </DesktopBreakpoint>
      <Footer></Footer>
    </>
  );
};

export { ProductPage };
