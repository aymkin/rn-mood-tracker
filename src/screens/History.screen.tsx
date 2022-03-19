import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../components/Text'
import { useAppContext } from '../App.provider'

export const HistoryScreen: React.FC = () => {
  const appContext = useAppContext()
  return (
    <View style={styles.container}>
      <Text>HistoryScreen</Text>
      <Text>{appContext.greeting}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
