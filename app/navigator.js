import React from 'react'
import { StackNavigator } from 'react-navigation'
import SignIn from './containers/signin/index'
import SignUp from './containers/signup/index'

const Navigator = StackNavigator({
  signin: { screen: SignIn },
  signup: { screen: SignUp }
}, {
  initialRouteName: 'signin'
})

export default Navigator