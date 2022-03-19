import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { MoodPicker } from '../components/MoodPicker'
import { MoodOptionType, MoodOptionWithTimestamp } from '../types'
import { Text } from '../components/Text'

export const HomeScreen: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])
  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }])
  }, [])
  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {moodList.map(item => (
        <Text key={new Date(item.timestamp).toString()}>
          {item.mood.emoji} {new Date(item.timestamp).toString()}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '2%',
  },
})
