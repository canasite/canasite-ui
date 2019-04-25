import React, { Component }                                                   from 'react';

import { Carousel, ShippingPromo, ProductsSection, Header, Footer }            from '../components/index';


class Home extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Carousel></Carousel>
        <ShippingPromo></ShippingPromo>
        <ProductsSection></ProductsSection>
        <Footer></Footer>
      </>
    );
  }
}

export { Home };
