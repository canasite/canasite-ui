import React, { Component }   from 'react';

import { BagIncrease }        from '../index';


class BagIncreaseContainer extends Component {
  constructor(props) {
    super(props);
    this.increaseBag = this.increaseBag.bind(this);
    this.decreaseBag = this.decreaseBag.bind(this);
    this.setBag = this.setBag.bind(this);
    this.calculateCompoundPrice = this.calculateCompoundPrice.bind(this);
    this.state = {
      currentBag: 0,
      compoundPrice: 0
    };
  }

  async increaseBag(e) {
    e.preventDefault();
    const currentBag = (this.state.currentBag || 0) + 1;
    const compoundPrice = this.calculateCompoundPrice(currentBag);
    await this.setState(prevState => ({ currentBag, compoundPrice }))
  }

  async decreaseBag(e) {
    e.preventDefault();
    const currentBag = this.state.currentBag - 1;
    const compoundPrice = this.calculateCompoundPrice(currentBag);
    await this.setState(prevState => {
      if (prevState.currentBag <= 0) return
      return {
        currentBag,
        compoundPrice
      }
    });
  }

  async setBag(e) {
    e.preventDefault();
    let currentBag = parseInt(e.currentTarget.value);
    let compoundPrice = this.calculateCompoundPrice(currentBag);
    if (!compoundPrice) compoundPrice = 0;
    await this.setState(prevState => { 
      if (currentBag < 0) return
      return {
        currentBag,
        compoundPrice
      }
    });
  }

  calculateCompoundPrice(currentBag) {
    if (!currentBag) return 0;
    const compoundPrice = parseInt(this.props.productPrice * currentBag);
    return compoundPrice;
  }

  render() {
    let { handleAddToCart } = this.props;

    return (
      <BagIncrease
        {...this.state}
        handleAddToCart={handleAddToCart}
        handleIncreaseBag={this.increaseBag}
        handleDecreaseBag={this.decreaseBag}
        handleSetBag={this.setBag}
      ></BagIncrease>
    );
  }
}

export { BagIncreaseContainer };
