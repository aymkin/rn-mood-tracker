import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { MoodOptionType } from '../../types'
import { Text } from '../Text'
import { PressableArea } from '../PressableArea'
import { colors } from '../../theme/colors'

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>()
  return (
    <View style={styles.moodList}>
      {moodOptions.map(option => (
        <View key={option.emoji}>
          <PressableArea
            onPress={() => setSelectedMood(option)}
            style={[
              styles.moodItem,
              option.emoji === selectedMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text style={styles.moodText}>{option.emoji}</Text>
          </PressableArea>
          <Text style={styles.descriptionText}>
            {selectedMood?.emoji === option.emoji ? option.description : ''}
          </Text>
        </View>
      ))}
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
    padding: 20,
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
    color: '#454c73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
})
