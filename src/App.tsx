import React from 'react'
import { Platform, UIManager } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabsNavigator } from './screens/BottomTabs.navigator'
import { AppProvider } from './App.provider'
import SplashScreen from 'react-native-splash-screen'

// LayoutAnimation is enabled by default on iOS, but it's still experimental on Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

export const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  )
}
