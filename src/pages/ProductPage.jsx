import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import { Container } from '../layout/layout';
import { ArianeWire } from '../components/arianeWire';
import { CurrentProductImage } from '../components/currentProductImage';
import { CurrentProductInfos } from '../components/currentProductInfos';
import { CommentsSection } from '../components/commentsSection';
import { AlsoLike } from '../components/alsoLike';

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

const ProductInfos = styled.div`
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

export const ProductPage = (props) => {
  return (
    <>
      <MobileBreakpoint>
        <ProductWrapper>
          <ArianeWire label="Cannabis"></ArianeWire>
          <ProductInfos>
            <CurrentProductImage></CurrentProductImage>
            <CurrentProductInfos title="CBD Bubble Gum"></CurrentProductInfos>
          </ProductInfos>
          <CommentsSection></CommentsSection>
        </ProductWrapper>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Container>
          <ProductWrapper>
            <ArianeWire label="Cannabis"></ArianeWire>
            <ProductInfos>
              <CurrentProductImage></CurrentProductImage>
              <CurrentProductInfos title="CBD Bubble Gum"></CurrentProductInfos>
            </ProductInfos>
            <CommentsSection></CommentsSection>
            <AlsoLike></AlsoLike>
          </ProductWrapper>
        </Container>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <Container>
          <ProductWrapper>
            <ArianeWire label="Cannabis"></ArianeWire>
            <ProductInfos>
              <CurrentProductImage></CurrentProductImage>
              <CurrentProductInfos title="CBD Bubble Gum"></CurrentProductInfos>
            </ProductInfos>
            <CommentsSection></CommentsSection>
            <AlsoLike></AlsoLike>
          </ProductWrapper>
        </Container>
      </DesktopBreakpoint>
    </>
  );
};