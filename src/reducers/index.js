import counterReducer from './counter';
import loggedReducer from './isLogged';
import { comebineReducers } from 'redux';

//the combination of reducers you have will go here
const rootReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default rootReducers;