import React from 'react'
import { LayoutAnimation, StyleSheet, View } from 'react-native'
import format from 'date-fns/format'
import { Text } from '../Text'
import { PressableArea } from '../PressableArea'
import { MoodOptionWithTimestamp } from '../../types'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { useAppContext } from '../../App.provider'

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp
}

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const appContext = useAppContext()

  const handlePress = React.useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    appContext.handleDeleteMood(item)
  }, [appContext, item])

  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
      <PressableArea hitSlop={16} onPress={handlePress}>
        <Text style={styles.deleteText}>Delete</Text>
      </PressableArea>
    </View>
  )
}

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: colors.lavender,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: colors.purple,
    fontFamily: fonts.fontFamilyBold,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: colors.blue,
    fontFamily: fonts.fontFamilyLight,
  },
})
