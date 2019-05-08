import React, { Component }         from 'react';
import { connect }                  from 'react-redux';

import { addToCart }                from '../redux/actions/action-creators';
import { CurrentProductInfos }      from '../components/index';


class CurrentProductInfosContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {
      productId: 1,
      productName: 'CBD Bubble Gum',
      productPrice: 6,
      productLabel: 'Cannabis',
      selectedQuantity: 0,
      compoundPrice: 0
    };
  }

  async handleAddToCart(event, compoundPrice) {
    event.preventDefault();
    const selectedQuantity = parseInt(event.currentTarget.bag.value);
    if (!selectedQuantity) return false;
    await this.setState(prevState => ({ selectedQuantity, compoundPrice }));
    this.props.addToCart(this.state);
  }

  render() {
    let { productName, productPrice, productLabel } = this.state;
    return (
      <CurrentProductInfos
        productName={productName}
        productPrice={productPrice}
        productLabel={productLabel}
        handleAddToCart = {this.handleAddToCart}
        handleCalculateTotalPrice= {this.calculateTotalPrice}
      ></CurrentProductInfos>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(CurrentProductInfosContainer);
