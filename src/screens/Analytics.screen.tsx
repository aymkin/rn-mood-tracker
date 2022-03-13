import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../components/Text'

export const AnalyticsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>AnalyticsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
