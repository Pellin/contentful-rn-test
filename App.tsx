import UserContextProvider from './contexts/user/UserContext'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './navigators/AuthNavigator'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent />
      <UserContextProvider>
        <AuthNavigator />
      </UserContextProvider>
    </NavigationContainer>
  )
}
