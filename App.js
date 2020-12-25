import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';
import SwitchNavigator from "./navigation/SwitchNavigator";

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SwitchNavigator />
            </Provider>
        );
    }
}

