import { LOGIN } from './actions-types';
import { ADD_TO_CART } from './actions-types';

export const login = payload => {
  return {
    type: LOGIN,
    payload
  }
};

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  }
};
