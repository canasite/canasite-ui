const initialState = {
  showSpinner: false,
  isLoggedIn: false,
  currentUser: {},
  currentCart: []
};

export const appReducer = (state = initialState, action) => {
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
        currentCart: [...state.currentCart, action.payload]
      }
    }

    default:
      return state
  }
};
