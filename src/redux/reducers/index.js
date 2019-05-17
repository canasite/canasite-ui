import { combineReducers }            from 'redux';

import { authentificationReducer }    from './authentification';
import { cartReducer }                from './cart';


const rootReducer = combineReducers({
  authentificationReducer,
  cartReducer
});


export default rootReducer;
