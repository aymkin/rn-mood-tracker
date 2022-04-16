import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { getHeaderTitle } from '@react-navigation/elements'
import { QuickStartScreen } from './QuickStart.screen'
import { BottomTabsNavigator } from './BottomTabs.navigator'
import { SCREENS } from './constants/screens'

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={SCREENS.MoodApp}
        component={BottomTabsNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name={SCREENS.QuickStart} component={QuickStartScreen} />
    </Drawer.Navigator>
  )
}
