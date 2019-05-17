import {
  call,
  put,
  takeLatest,
  takeEvery
}                   from 'redux-saga/effects';
import { push }     from 'react-router-dom';

import {
  loginRequest,
  loginFailure,
  loginSuccess,
  signupRequest,
  signupFailure,
  signupSuccess,
  tokenCreated
}                   from '../redux/authentification/actions-creators';
import {
  SIGNUP,
  LOGIN
}                   from '../redux/authentification/actions-types';


function* createUser({ payload }) {
  const errors = validateRegisterForm(payload);

  if (Object.keys(errors).length) {
    yield put(signupFailure(errors));
  } else {
    yield put(signupRequest());

    const { email, password } = payload;
    const mutation = `
      mutation {
        create_user(email: "test@gmail.com", password: "142") {
          email,
          token
        }
      }
    `;
    const endpoint = 'http://localhost:4000/public/graphql';
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors',
      body: JSON.stringify({ query: mutation })
    };

    try {
      fetch(endpoint, params)
        .then(response => response.json())
        .then(data => console.log(data));
    } catch (error) {
      yield put(signupFailure(error));
    }
  }

}

function* login({ payload }) {
  const errors = validateLoginForm(payload);
  if (Object.keys(errors).length) {
    yield put(loginFailure(errors));
  } else {
    yield put(loginRequest());
    const { email, password } = payload;
    //send login query to graphql server
      // if successfull put(loginSuccess)
      // else put (loginFailure)
  }
}

function validateLoginForm({ email, password }) {
  const cleanEmail = email.replace(/ /g, '');
  const cleanPassword = password.replace(/ /g, '');

  const errors = {};
  if (!cleanEmail) errors.email = 'Veuillez renseigner un email valide !';
  if (!cleanPassword) errors.password = 'Veuillez renseigner un mot de passe valide !';

  return errors;
}

function validateRegisterForm({ email, password, passwordConfirm }) {
  const cleanEmail = email.replace(/ /g, '');
  const cleanPassword = password.replace(/ /g, '');
  const cleanConfirm = passwordConfirm.replace(/ /g, '');

  const errors = {};
  if (!cleanEmail) errors.email = 'Veuillez renseigner un email valide !';
  if (!cleanPassword) errors.password = 'Veuillez renseigner un mot de passe valide !';
  if (!cleanConfirm) {
    errors.passwordConfirm = 'Veuillez confirmer votre mot de passe !';
  } else if (cleanConfirm !== cleanPassword) {
    errors.passwordConfirm = 'Les mots de passe ne correspondent pas !';
  }

  return errors;
}

function* watchUserSignup() {
  yield takeLatest(SIGNUP, createUser);
}

function* watchUserLogin() {
  yield takeLatest(LOGIN, login);
}


export {
  watchUserSignup,
  watchUserLogin
};
