/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./src/components/views/Home.js";
import Login from "./src/components/views/Login.js";
import Firebase from "./src/firebase/Firebase.js";
import Register from "./src/components/views/Register";
import Chat from "./src/components/views/Chat";

// tao stack chua cac view components
const MainNavigator = createStackNavigator({
      Home: {screen: Home},
      Login: {screen: Login},
      Register: {screen: Register},
      Chat: {screen: Chat},
    },
    {
      initialRouteName: 'Login',
    }
);
// console.log(MainNavigator);
const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  constructor(props){
    super(props);

    Firebase.initialise();
  }

  render() {
    return(
        <AppContainer />

    );

  }
}
