import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import store
import { createStore } from 'redux';
import rootReducers from './Reducers';
//STORE--- GLOBALIZED STATE
//the store will always take a reducer in the params
let store = createStore(rootReducers)


//ACTION -- describes what you want to do in our case it will be increment
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'Decrement'
    }
}


//REDUCER --  action is called and rhe reducer checks which action is called
//reducer alwaysd take two params, the initial state and and action 
//this is the counter you will pass into the store
// then to acctually execute this action you need to dispatch the action
//the reducer is our "state"
const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;

    }
}
//DISPATCH -- you dispatch the actiokn to the reducer

store.dispatch(increment());
store.dispatch(decrement());








ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
