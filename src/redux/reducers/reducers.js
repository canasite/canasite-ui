const initialState = {
  showSpinner: false,
  isLoggedIn: false,
  currentUser: {},
  currentCart: [],
  cartItemsCounter: 0
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLoggedIn: true,
        showSpinner: true,
        currentUser: action.payload
      }
    }

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
        currentCart: state.currentCart.filter(cartItem => cartItem.productId !== action.payload.productId),
        cartItemsCounter: state.cartItemsCounter - 1
      }
    }

    default:
      return state
  }
};

export { appReducer };
