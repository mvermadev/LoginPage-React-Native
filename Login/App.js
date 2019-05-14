import React from 'react';
import { Text, StyleSheet, View } from 'react-native'
import {createStackNavigator} from 'react-navigation';
import LoginScreens from './screens/Loginscreens';
import HomeScreens from './screens/HomeScreens';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreens,
  Home: HomeScreens
}) 

const styles = StyleSheet.create({})
