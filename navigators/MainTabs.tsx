import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import Settings from '../screens/Settings'
import Discover from '../screens/Discover'
import Favorites from '../screens/Favorites'
import Quiz from '../screens/Quiz'

type MainTabsParamList = {
  Hem: undefined
  Discover: undefined
  Favoriter: undefined
  Quiz: undefined
  Inställningar: undefined
}

const Tab = createBottomTabNavigator<MainTabsParamList>()

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#D80A7A',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarActiveTintColor: '#cecece',
        tabBarInactiveTintColor: 'white',
        tabBarAllowFontScaling: true,
        headerShown: false,
        initialRouteName: 'Hem',
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Hem':
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../assets/adaptive-icon.png')}
                />
              )
            case 'Discover':
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../assets/adaptive-icon.png')}
                />
              )
            case 'Favoriter':
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../assets/adaptive-icon.png')}
                />
              )
            case 'Quiz':
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../assets/adaptive-icon.png')}
                />
              )
            case 'Inställningar':
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../assets/adaptive-icon.png')}
                />
              )
          }
        },
      })}
    >
      <Tab.Screen name="Hem" component={HomeStack} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Favoriter" component={Favorites} />
      <Tab.Screen name="Quiz" component={Quiz} />
      <Tab.Screen name="Inställningar" component={Settings} />
    </Tab.Navigator>
  )
}

export default MainTabs
