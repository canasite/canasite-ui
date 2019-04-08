import React, { Component } from 'react';
import styled from 'styled-components';
import ReactCarousel from 'react-slick';
import Pose from 'react-pose';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.jpg';
import Image3 from '../assets/images/3.jpg';

const Hero = styled.section`
  position: relative;
  height: 175px;
  width: 100%;
  margin-top: 5rem;

  div {
    outline: none;
  }
  
  @media (min-width: 768px) {
    height: 250px;
    margin-top: 7rem;
  }

  @media (min-width: 768px) {
    height: 300px;
  }
  `;
  
  const CarouselImage = styled.div`
  background: ${props => `url(${props.bckImg}) center no-repeat`};
  background-size: cover;
  height: 175px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    height: 250px;
    max-width: 50%;
  }

  @media (min-width: 768px) {
    height: 300px;
  }
`;

const Overlay = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: hsla(0,0%,0%,0.15);
  pointer-events: none;
`;

const PromoContainer = styled.ul`
  z-index: 3;
  position: absolute;
  top: 20%;
  right: 15vw;
  max-width: 20vw;
  color: white;
  pointer-events: none;
`;

const PromoItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const PromoCategory = styled.span`
  align-self: flex-start;
  padding: .25rem .5rem;
  margin-bottom: .5rem;
  border-radius: 5px;
  border: 1px solid white;
`;

const PromoTitle = styled.h4`
  font-family: 'Betm Book';
  font-size: 2rem;
  letter-spacing: -.02rem;
  margin-bottom: .25rem;
`;

const AnimatedPromoCopy = Pose.p({
  in: {opacity: 1},
  out: {opacity: 0}
});

const PromoCopy = styled(AnimatedPromoCopy)`
  font-family: 'Betm Book';
  font-size: 1.25rem;
  line-height: 1.15;
`;


const Promos = [
  {
    category: 'Nouveautées',
    title: 'Greeneo Crystals',
    copy: 'Get value from your content. Buy and sell dynamic ads on Pippa’s marketplace.'
  },
  {
    category: 'Nouveautées',
    title: 'Incredible item',
    copy: "Tooling that is built around the assumptions imposed by template literals wouldn't work"
  },
  {
    category: 'Exclus',
    title: 'Golden Insulins',
    copy: 'It would be necessary to define how JSX behaves within the rest of the ECMAScript grammar within the template literal anyway.'
  }
];

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      promos: [
        {
          category: 'Nouveautées',
          title: 'Greeneo Crystals',
          copy: 'Get value from your content. Buy and sell dynamic ads on Pippa’s marketplace.'
        },
        {
          category: 'Nouveautées',
          title: 'Incredible item',
          copy: "Tooling that is built around the assumptions imposed by template literals wouldn't work"
        },
        {
          category: 'Exclus',
          title: 'Golden Insulins',
          copy: 'It would be necessary to define how JSX behaves within the rest of the ECMAScript grammar within the template literal anyway.'
        }
      ]
    };
  }
  render() {
    const settings = {
      dots: false,
      autoplaySpeed: 4500,
      speed: 1000,
      infinite: true,
      autoplay: false,
      beforeChange: (prevIndex, curIndex) => this.setState(prevState => ({ currentIndex: curIndex }))
    };

    return (
      <Hero>
        <Overlay></Overlay>
        <PromoContainer>
          <PromoItem>
            <PromoCategory>{this.state.promos[this.state.currentIndex].category}</PromoCategory>
            <PromoTitle>{this.state.promos[this.state.currentIndex].title}</PromoTitle>
            <PromoCopy pose={this.state.currentIndex < 1 ? 'in' : 'out'}>{this.state.promos[this.state.currentIndex].copy}</PromoCopy>
          </PromoItem>
        </PromoContainer>
        <ReactCarousel {...settings}>
          <div>
            <CarouselImage bckImg={Image1} alt="C"></CarouselImage>
          </div>
          <div>
            <CarouselImage bckImg={Image2} alt="C"/>
          </div>
          <div>
            <CarouselImage bckImg={Image3} alt="C"/>
          </div>
        </ReactCarousel>
      </Hero>
    );
  }
};