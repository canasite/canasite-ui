import React, { Component }   from 'react';
import styled                 from 'styled-components';
import ReactCarousel          from 'react-slick';
import Pose                   from 'react-pose';
import                             "slick-carousel/slick/slick.css";
import                             "slick-carousel/slick/slick-theme.css";

import Image1                 from '../../assets/images/1.jpg';
import Image2                 from '../../assets/images/2.jpg';
import Image3                 from '../../assets/images/3.jpg';


const Hero = styled.section`
  position: relative;
  height: 175px;
  width: 100%;
  margin-top: 4rem;

  div {
    outline: none;
  }
  
  @media (min-width: 768px) {
    height: 250px;
    margin-top: 6rem;
  }

  @media (min-width: 768px) {
    height: 300px;
  }
`;

const CarouselImageWrapper = styled.div`
  width: 50% !important;

  @media (min-width: 768px) {
    width: 90% !important;
  }

  @media (min-width: 1024px) {
    width: 100% !important;
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
  top: 15%;
  right: 5vw;
  max-width: 50vw;
  color: white;
  pointer-events: none;

  @media (min-width: 768px) {
    top: 20%;
    right: 10vw;
    max-width: 30vw;
  }

  @media (min-width: 1024px) {
    max-width: 25vw;
  }
`;

const AnimatedPromo = Pose.li({
  enter: {opacity: 1},
  exit: {opacity: 0}
});

const PromoItem = styled(AnimatedPromo)`
  display: flex;
  flex-direction: column;
`;

const PromoCategory = styled.span`
  align-self: flex-start;
  padding: .25rem .5rem;
  margin-bottom: .25rem;
  font-size: .8rem;
  border-radius: 5px;
  border: 1px solid white;
  
  @media (min-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: .5rem;
  }
`;

const PromoTitle = styled.h4`
  font-family: 'Betm Book';
  font-size: 1.25rem;
  letter-spacing: -.02rem;
  margin-bottom: .25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const PromoCopy = styled.p`
  font-family: 'Betm Book';
  font-size: .85rem;
  line-height: 1.15;

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;


const promos = [
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


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      promos
    };
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      autoplaySpeed: 4500,
      speed: 1600,
      infinite: true,
      autoplay: false,
      beforeChange: (prevIndex, curIndex) => this.setState(prevState => ({ currentIndex: curIndex }))
    };

    return (
      <Hero>
        <Overlay></Overlay>
        <PromoContainer>
          <PromoItem pose={this.state.currentIndex < 2 ? 'in' : 'out'}>
            <PromoCategory>{this.state.promos[this.state.currentIndex].category}</PromoCategory>
            <PromoTitle>{this.state.promos[this.state.currentIndex].title}</PromoTitle>
            <PromoCopy>{this.state.promos[this.state.currentIndex].copy}</PromoCopy>
          </PromoItem>
        </PromoContainer>
        <ReactCarousel {...settings}>
          <CarouselImageWrapper>
            <CarouselImage bckImg={Image1} alt="C"></CarouselImage>
          </CarouselImageWrapper>
          <CarouselImageWrapper>
            <CarouselImage bckImg={Image2} alt="C"/>
          </CarouselImageWrapper>
          <CarouselImageWrapper>
            <CarouselImage bckImg={Image3} alt="C"/>
          </CarouselImageWrapper>
        </ReactCarousel>
      </Hero>
    );
  }
};

export { Carousel };
