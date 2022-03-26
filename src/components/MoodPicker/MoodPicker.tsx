import React, { useCallback, useState } from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native'
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'

import { MoodOptionType } from '../../types'
import { Text } from '../Text'
import { PressableArea } from '../PressableArea'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
const imageSrc = require('../../assets/butterflies.png')

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

type MoodPickerProps = {
  onSelect: (mood: MoodOptionType) => void
}

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable)

export const MoodPicker: React.FC<MoodPickerProps> = ({ onSelect }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>()
  const [hasSelected, setHasSelected] = useState(false)

  const handleSelect = useCallback(() => {
    if (selectedMood) {
      onSelect(selectedMood)
      setSelectedMood(undefined)
      setHasSelected(true)
    }
  }, [onSelect, selectedMood])

  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [{ scale: selectedMood ? withTiming(1) : 0.8 }],
    }),
    [selectedMood],
  )

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image source={imageSrc} style={styles.image} />
        <PressableArea
          style={styles.button}
          onPress={() => setHasSelected(false)}
        >
          <Text style={styles.buttonText}>Back</Text>
        </PressableArea>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <PressableArea
              onPress={() => setSelectedMood(option)}
              key={option.emoji}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}
            >
              <Text style={styles.moodText}>{option.emoji}</Text>
            </PressableArea>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <ReanimatedPressable
        style={[styles.button, buttonStyle]}
        onPress={handleSelect}
      >
        <Text style={styles.buttonText}>Choose</Text>
      </ReanimatedPressable>
    </View>
  )
}

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: colors.purple,
    borderColor: colors.white,
  },
  descriptionText: {
    color: colors.purple,
    fontSize: 10,
    textAlign: 'center',
    fontFamily: fonts.fontFamilyBold,
  },
  container: {
    borderWidth: 2,
    borderColor: colors.purple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    height: 230,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  image: {
    alignSelf: 'center',
    height: 100,
    width: 300,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.white,
    fontFamily: fonts.fontFamilyBold,
  },
  button: {
    backgroundColor: colors.purple,
    width: 150,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.fontFamilyBold,
  },
})
