import React, { Component } from 'react';

import { Carousel } from '../components/carousel';
import { Notification } from '../components/notification';
import { ProductSection } from '../components/productsSection';

export class Home extends Component {
  render() {
    return (
      <>
        <Carousel></Carousel>
        <Notification></Notification>
        <ProductSection></ProductSection>
      </>
    );
  }
}