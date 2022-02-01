import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import CreateAccount from '../screens/CreateAccount'

const Stack = createStackNavigator()

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Logga in">
      <Stack.Screen name="Logga in" component={Login} />
      <Stack.Screen name="Skapa nytt konto" component={CreateAccount} />
    </Stack.Navigator>
  )
}

export default LoginStack
