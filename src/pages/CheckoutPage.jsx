import React                                                                                            from 'react';
import { connect }                                                                                      from 'react-redux'

import { CheckoutProducts }                                                                             from '../components';
import { HeaderContainer }                                                                              from '../containers';
import { removeFromCart }                                                                               from '../redux/actions/action-creators';


const mapStateToProps = ({ currentCart }) => {
  return { currentCart };
};

const mapDispatchToProps = {
  removeFromCart
};

const CheckoutPage = ({ currentCart, removeFromCart }) => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <CheckoutProducts currentCart={currentCart} removeFromCart={removeFromCart}></CheckoutProducts>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
