const initialState = {
  currentCart: [],
  cartItemsCounter: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART': {
      return {
        ...state,
        currentCart: [...state.currentCart, action.payload],
        cartItemsCounter: state.cartItemsCounter + 1
      }
    }

    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        currentCart: state.currentCart.filter(cartItem => cartItem.productId !== action.productId),
        cartItemsCounter: state.cartItemsCounter - 1
      }
    }

    default:
      return state
  }
};

export { cartReducer };
