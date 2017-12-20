import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Login!</Text>
        <Text onPress={Actions.register}>to Register</Text>
        <Text onPress={Actions.home}>to Home</Text>
      </View>
    );
  }
};
