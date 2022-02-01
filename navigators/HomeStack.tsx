import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens//Home'
import Article from '../screens/Article'

const Stack = createStackNavigator()

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Start"
    >
      <Stack.Screen name="Start" component={Home} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  )
}

export default LoginStack
