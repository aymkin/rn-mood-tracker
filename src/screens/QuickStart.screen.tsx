import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

type QuickStartScreenProps = {}

export const QuickStartScreen: React.FC<QuickStartScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>QuickStartScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
