import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Home!</Text>
        <Text onPress={Actions.login}>to Login</Text>
        <Text onPress={Actions.register}>to Register</Text>
      </View>
    );
  }
};