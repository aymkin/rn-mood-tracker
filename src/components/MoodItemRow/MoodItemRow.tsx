import React from 'react'
import { LayoutAnimation, StyleSheet, View } from 'react-native'
import format from 'date-fns/format'
import { Text } from '../Text'
import { PressableArea } from '../PressableArea'
import { MoodOptionWithTimestamp } from '../../types'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { useAppContext } from '../../App.provider'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedGestureHandler,
  runOnJS,
} from 'react-native-reanimated'

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp
}

const MAX_PAN = 80

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

  const removeWithDelay = React.useCallback(() => {
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      appContext.handleDeleteMood(item)
    }, 250)
  }, [appContext, item])

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { shouldRemove: boolean }
  >(
    {
      onActive: (event, ctx) => {
        const xVal = Math.floor(event.translationX)
        offset.value = xVal

        // use Absolute value so the user could swipe either left or right
        ctx.shouldRemove = Math.abs(xVal) > MAX_PAN
      },
      onEnd: (_, ctx) => {
        if (ctx.shouldRemove) {
          // if the item should be removed, animate it off the screen first
          offset.value = withTiming(Math.sign(offset.value) * 2000)

          // then trigger the remove mood item with a small delay
          runOnJS(removeWithDelay)()
        } else {
          // otherwise, animate the item back to the start
          offset.value = withTiming(0)
        }
      },
    },
    [],
  )

  return (
    <PanGestureHandler
      activeOffsetX={[-1, 1]}
      activeOffsetY={[-100, 100]}
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
