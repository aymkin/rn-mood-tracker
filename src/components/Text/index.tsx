import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'

export const Text: React.FC = ({ children }) => {
  return <RNText style={styles.defaultStyle}>{children}</RNText>
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: '#242424',
  },
})
