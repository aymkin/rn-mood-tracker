import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../components/Text'

export const HistoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>HistoryScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
