import React, { Component }                                            from 'react';

import { Carousel, ShippingPromo, ProductsSection, Footer }            from '../components/index';
import { HeaderContainer }                                             from '../containers/index';


class Home extends Component {
  render() {
    return (
      <>
        <HeaderContainer></HeaderContainer>
        <Carousel></Carousel>
        <ShippingPromo></ShippingPromo>
        <ProductsSection></ProductsSection>
        <Footer></Footer>
      </>
    );
  }
}

export { Home };
