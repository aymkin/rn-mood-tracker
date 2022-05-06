import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

type TopWarningProps = {
  value?: string
}

export const TopWarning: React.FC<TopWarningProps> = ({
  value = 'No data available',
}) => {
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ff990099',
    padding: 8,
  },
})
