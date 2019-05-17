import { all }                from 'redux-saga/effects';

import {
  watchUserLogin,
  watchUserSignup,
}                             from './authentification';


const rootSaga = function*() {
  yield all([
    watchUserLogin(),
    watchUserSignup()
  ]);
};


export default rootSaga;