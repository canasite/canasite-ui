import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/index';
import { removeFromCart } from '../redux/actions/action-creators.js';


const mapStateToProps = ({ cartReducer, authentificationReducer }) => {
  const { currentCart, cartItemsCounter } = cartReducer;
  const { isLoggedIn } = authentificationReducer;
  return {
    currentCart,
    cartItemsCounter,
    isLoggedIn
  }
};

const mapDispatchToProps = {
  removeFromCart
};

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.togglePopOverCart = this.togglePopOverCart.bind(this);
    this.state = {
      sideNavActive: false,
      searchBarActive: false,
      popOverCardActive: false
    };
  }

  toggleSideNav() {
    this.setState(prevState => ({ sideNavActive: !prevState.sideNavActive }));
  }
  toggleSearchBar() {
    this.setState(prevState => ({ searchBarActive: !prevState.searchBarActive }));
  }

  togglePopOverCart() {
    this.setState(prevState => ({ popOverCardActive: !prevState.popOverCardActive }));
  }

  render() {
    return (
      <Header
        {...this.state}
        {...this.props}
        toggleSideNav={this.toggleSideNav}
        toggleSearchBar={this.toggleSearchBar}
        togglePopOverCart={this.togglePopOverCart}
      ></Header>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer)
