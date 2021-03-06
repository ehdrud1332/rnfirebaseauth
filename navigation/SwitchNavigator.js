import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";

const SwitchNavigator = createSwitchNavigator(
{
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Signup'
    }
)

export default createAppContainer(SwitchNavigator);
