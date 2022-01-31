import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import ContentfulContextProvider from './contexts/contentful/ContentfulContext'
import Home from './views/Home'

export default function App() {
  return (
    <ContentfulContextProvider>
      <StatusBar style="auto" />
      <Home />
    </ContentfulContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
