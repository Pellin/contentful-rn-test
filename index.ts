import { registerRootComponent } from 'expo'
import { LogBox } from 'react-native'
import App from './App'
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "Linking requires a build-time setting `scheme` in the project's Expo config",
  'AsyncStorage has been extracted from react-native core and will be removed in a future release',
])

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
