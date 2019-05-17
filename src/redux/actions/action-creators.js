import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './actions-types';


const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  }
};

const removeFromCart = payload => {
  return {
    type: REMOVE_FROM_CART,
    productId: payload
  }
};


export {
  addToCart,
  removeFromCart
};
