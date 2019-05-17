const initialState = {
  showSpinner: false,
  isLoggedIn: false,
  userId: '',
  userEmail: '',
  userPassword: '',
  userToken: '',
  errors: []
};

const authentificationReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOGIN_REQUEST': {
      return {
        ...state,
        showSpinner: true
      }
    }

    case 'LOGIN_FAILURE': {
      return {
        ...state,
        isLoggedIn: false,
        showSpinner: false,
        errors: {...action.payload}
      }
    }

    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        isLoggedIn: true,
        showSpinner: false,
        userId: action.payload.id,
        userEmail: action.payload.email,
        userToken: action.payload.token
      }
    }

    case 'SIGNUP_REQUEST': {
      return {
        ...state,
        showSpinner: true
      }
    }

    case 'SIGNUP_FAILURE': {
      return {
        ...state,
        errors: {...action.payload}
      }
    }

    case 'SIGNUP_SUCCESS': {
      return {
        ...state,
        isLoggedIn: true,
        showSpinner: false,
        userId: action.payload.id,
        userEmail: action.payload.email,
        userToken: action.payload.token
      }
    }

    default: {
      return state;
    }
  }
}

export {
  authentificationReducer
};
