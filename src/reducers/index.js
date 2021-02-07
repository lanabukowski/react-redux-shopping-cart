import cartReducer from './cartReduser';
import menuReducer from './menuReduser';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    cartReducer,
    menuReducer,
})

export default rootReducer;