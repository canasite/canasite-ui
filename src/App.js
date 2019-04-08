import React, { Component } from 'react';
import reset from 'react-style-reset/string';
import styled, { createGlobalStyle } from 'styled-components';
import { FontsDeclaration } from './fonts/font-declaration';

import { Container, FluidContainer } from './layout/layout';
import { Header } from './components/header';
import { Carousel } from './components/carousel';
import { Notification } from './components/notification';
import { ProductSection } from './components/productsSection';
import { SideNavigation } from './components/sideNavigation';
import { Footer } from './components/footer';

const GlobalStyles = createGlobalStyle`
  ${reset};
  ${FontsDeclaration};
  html, body {
    overflow-x: hidden;
    font-family: 'Betm Book';
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.showSideNav = this.showSideNav.bind(this);
    this.state = {
      isSideNavActive: false
    };
  }

  showSideNav() {
    this.setState(prevState => ({ isSideNavActive: !prevState.isSideNavActive }));
  }

  render() {
    return (
      <>
        <GlobalStyles/>
        <Header handleShowSideNav={this.showSideNav}></Header>
        <SideNavigation isActive={this.state.isSideNavActive} handleShowSideNav={this.showSideNav}></SideNavigation>
        <Carousel></Carousel>
        <Notification></Notification>
        <ProductSection></ProductSection>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
