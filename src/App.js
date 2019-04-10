import React, { Component } from 'react';
import reset from 'react-style-reset/string';
import { createGlobalStyle } from 'styled-components';
import { FontsDeclaration } from './fonts/font-declaration';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/header';
import { SideNavigation } from './components/sideNavigation';
import { Footer } from './components/footer';
import { CheckoutPage } from './pages/CheckoutPage';

const GlobalStyles = createGlobalStyle`
  ${reset};
  ${FontsDeclaration};

  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    font-family: 'Betm Book';
  }

  a {
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }

  img {
    vertical-align: middle;
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
        <Router>
          <Header handleShowSideNav={this.showSideNav}></Header>
          <SideNavigation isActive={this.state.isSideNavActive} handleShowSideNav={this.showSideNav}></SideNavigation>
          <Route exact path="/" component={Home} />
          <Route path="/products/" component={ProductPage} />
          <Route path="/checkout/" component={CheckoutPage} />
          <Footer></Footer>
        </Router>
      </>
    );
  }
}

export default App;
