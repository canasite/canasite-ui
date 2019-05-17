import {
  LOGIN,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  TOKEN_CREATED
}                       from './actions-types';


const login = userInfos => {
  return {
    type: LOGIN,
    payload: userInfos
  }
};

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
};

const loginSuccess = userInfos => {
  return {
    type: LOGIN_SUCCESS,
    payload: userInfos
  }
};

const signup = userInfos => {
  return {
    type: SIGNUP,
    payload: userInfos
  }
};

const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST
  }
}

const signupFailure = error => {
  return {
    type: SIGNUP_FAILURE,
    payload: error
  }
};

const signupSuccess = userInfos => {
  return {
    type: SIGNUP_SUCCESS,
    payload: userInfos
  }
};

const tokenCreated = token => {
  return {
    type: TOKEN_CREATED,
    payload: token
  }
};


export {
  login,
  loginRequest,
  loginFailure,
  loginSuccess,
  signup,
  signupRequest,
  signupFailure,
  signupSuccess,
  tokenCreated
};
