import React from 'react'
import { LayoutAnimation, StyleSheet, View } from 'react-native'
import format from 'date-fns/format'
import { Text } from '../Text'
import { PressableArea } from '../PressableArea'
import { MoodOptionWithTimestamp } from '../../types'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { useAppContext } from '../../App.provider'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedGestureHandler,
} from 'react-native-reanimated'

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp
}

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const appContext = useAppContext()
  const offset = useSharedValue(0)

  const handlePress = React.useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    appContext.handleDeleteMood(item)
  }, [appContext, item])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }))

  const onGestureEvent = useAnimatedGestureHandler(
    {
      onActive: event => {
        const xVal = Math.floor(event.translationX)
        offset.value = xVal
      },
      onEnd: () => {
        offset.value = withTiming(0)
      },
    },
    [],
  )

  return (
    <PanGestureHandler
      // @ts-expect-error This method is deprecated but supported for backward compatibility.
      minDeltaX={1}
      minDeltaY={100}
      onGestureEvent={onGestureEvent}>
      <Reanimated.View style={[styles.moodItem, animatedStyle]}>
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
      </Reanimated.View>
    </PanGestureHandler>
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
