import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './Home.screen'
import { HistoryScreen } from './History.screen'
import { AnalyticsScreen } from './Analytics.screen'
import { SCREENS } from './constants/screens'
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icon/Icons'
import { colors } from '../theme/colors'
import { fonts } from '../theme/fonts'

const BottomTabs = createBottomTabNavigator()

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: { fontFamily: fonts.fontFamilyBold },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.grey,
        tabBarIcon: ({ color, size }) => {
          if (route.name === SCREENS.Home)
            return <HomeIcon color={color} size={size} />
          if (route.name === SCREENS.History) {
            return <HistoryIcon color={color} size={size} />
          }
          if (route.name === SCREENS.Analytics) {
            return <AnalyticsIcon color={color} size={size} />
          }
          return null
        },
      })}>
      <BottomTabs.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name={SCREENS.History}
        component={HistoryScreen}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name={SCREENS.Analytics}
        component={AnalyticsScreen}
        options={{ title: 'Fancy Charts' }}
      />
    </BottomTabs.Navigator>
  )
}
