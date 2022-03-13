import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../components/Text'

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
