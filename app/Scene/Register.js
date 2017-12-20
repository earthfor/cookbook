import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class Register extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Register!</Text>
        <Text onPress={Actions.login}>to Login</Text>
        <Text onPress={Actions.home}>to Home</Text>
      </View>
    );
  }
};