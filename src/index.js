import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const sampleReducer = (state = '', action) => {
    switch (action.type) {
        case 'SAMPLE_ROUTE':
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        sampleReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
