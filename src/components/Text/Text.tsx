import React from 'react'
import { Text as RNText, StyleSheet, TextStyle } from 'react-native'
import { colors } from '../../theme/colors'

type TextPropType = {
  style?: TextStyle
}

export const Text: React.FC<TextPropType> = ({ children, style }) => {
  return <RNText style={[styles.defaultStyle, style]}>{children}</RNText>
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: colors.darkText,
  },
})
