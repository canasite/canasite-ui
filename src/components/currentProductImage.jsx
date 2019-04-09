import React from 'react';
import styled from 'styled-components';
import ReactCarousel from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import Image5 from '../assets/images/5.jpg';
import Image4 from '../assets/images/4.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const MainImage = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  min-height: 300px;
  background: ${props => `url(${props.src}) center no-repeat`};
  background-size: cover;
  margin: 0 -1rem;

  @media (min-width: 768px) {
    margin: 0;
    border-radius: 5px; 
  }
`;

const MobileCarousel = styled(ReactCarousel)`
  margin: 0 -1rem;
  padding-bottom: 1rem;
`;

const MobileMainImage = styled.div`
  min-height: 200px;
  background: ${props => `url(${props.src}) center no-repeat`};
  background-size: cover;
`;

const SecondaryImagesList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: .5rem;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SecondaryImageItem = styled.li`
  padding-right: .5rem;
`;

const SecondaryImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const MoreImages = styled.a`
  align-self: center;
  font-size: 1rem;
  padding: .5rem .75rem;
  border: 1px solid hsl(0,0%,70%);
  border-radius: 5px;
  color: hsl(0,0%,70%);

  &:hover {
    cursor: pointer;
  }
`;

export const CurrentProductImage = (props) => {

  const settings = {
    dots: true,
    arrows: false,
    autoplaySpeed: 4500,
    speed: 1600,
    infinite: true,
    autoplay: false,
  };

  return (
    <>
      <MobileBreakpoint>
        <MobileCarousel {...settings}>
          <MobileMainImage src={Image4} alt="Photo produit"></MobileMainImage>
          <MobileMainImage src={Image5} alt="Photo produit"></MobileMainImage>
        </MobileCarousel>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <Container>
          <MainImage src={Image4} alt="Photo produit"></MainImage>
          <SecondaryImagesList>
            <SecondaryImageItem>
              <SecondaryImage src={Image5}></SecondaryImage>
            </SecondaryImageItem>
            <SecondaryImageItem>
              <SecondaryImage src={Image5}></SecondaryImage>
            </SecondaryImageItem>
            <SecondaryImageItem>
              <SecondaryImage src={Image5}></SecondaryImage>
            </SecondaryImageItem>
            <MoreImages>Voir plus</MoreImages>
          </SecondaryImagesList>
        </Container>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <Container>
          <MainImage src={Image4} alt="Photo produit"></MainImage>
          <SecondaryImagesList>
            <SecondaryImageItem>
              <SecondaryImage src={Image5}></SecondaryImage>
            </SecondaryImageItem>
            <SecondaryImageItem>
              <SecondaryImage src={Image5}></SecondaryImage>
            </SecondaryImageItem>
            <SecondaryImageItem>
              <SecondaryImage src={Image5}></SecondaryImage>
            </SecondaryImageItem>
            <MoreImages>Voir plus</MoreImages>
          </SecondaryImagesList>
        </Container>
      </DesktopBreakpoint>
    </>
  );
};