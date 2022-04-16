import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'

type QuickStartScreenProps = {}

function Ball() {
  const isPressed = useSharedValue(false)
  const offset = useSharedValue({ x: 0, y: 0 })
  const backgroundColor = useSharedValue('blue')

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.1 : 1) },
      ],
      backgroundColor: backgroundColor.value,
    }
  })

  const gesture = Gesture.Pan()
    .onBegin(() => {
      'worklet'
      isPressed.value = true
    })
    .onChange(e => {
      'worklet'
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      }
      backgroundColor.value = '#ff000099'
    })
    .onFinalize(() => {
      'worklet'
      isPressed.value = false
      backgroundColor.value = 'blue'
    })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.ball, animatedStyles]} />
    </GestureDetector>
  )
}
export const QuickStartScreen: React.FC<QuickStartScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
})
