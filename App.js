import React, {Component} from 'react';

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import SwitchNavigator from "./navigation/SwitchNavigator";

export default class App extends Component {
    render() {
        return (
            <SwitchNavigator />
        );
    }
}

