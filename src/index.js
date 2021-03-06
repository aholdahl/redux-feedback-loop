import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return action.payload;
        case 'SUBMIT_ALL':
            return '';
        default:
            return state;
    }
}

const understandingReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload;
        case 'SUBMIT_ALL':
            return '';
        default:
            return state;
    }
}

const supportReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return action.payload;
        case 'SUBMIT_ALL':
            return '';
        default:
            return state;
    }
}

const commentsReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.payload;
        case 'SUBMIT_ALL':
            return '';
        default:
            return state;
    }
}

const historyReducer = (state = [], action) =>{
    switch (action.type){
        case 'SET_HISTORY':
            return action.payload;
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        historyReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
