import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './Home.screen'
import { HistoryScreen } from './History.screen'
import { AnalyticsScreen } from './Analytics.screen'
import { SCREENS } from './constants/screens'

const BottomTabs = createBottomTabNavigator()

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name={SCREENS.Home} component={HomeScreen} />
      <BottomTabs.Screen name={SCREENS.History} component={HistoryScreen} />
      <BottomTabs.Screen name={SCREENS.Analytics} component={AnalyticsScreen} />
    </BottomTabs.Navigator>
  )
}
