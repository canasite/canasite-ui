import { createStore, compose, applyMiddleware }    from 'redux';
import rootReducer                                  from './reducers/index';
import createSagaMiddleware                         from 'redux-saga';

import rootSaga                                     from '../middlewares/index';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);


export { store };
