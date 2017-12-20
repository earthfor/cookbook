import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Home from './app/Scene/Home'
import Login from './app/Scene/Login'
import Register from './app/Scene/Register'

export default class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login"/>
        <Scene key="register" component={Register} title="Register"/>
        <Scene key="home" component={Home} title="Home"/>
      </Scene>
    </Router>
  }
}
