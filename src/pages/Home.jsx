import React, { Component } from 'react';

import { Carousel } from '../components/carousel';
import { Notification } from '../components/notification';
import { ProductSection } from '../components/productsSection';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class Home extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Carousel></Carousel>
        <Notification></Notification>
        <ProductSection></ProductSection>
        <Footer></Footer>
      </>
    );
  }
}