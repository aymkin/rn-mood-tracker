import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { MoodPicker } from '../components/MoodPicker'
import { MoodOptionType, MoodOptionWithTimestamp } from '../types'
import { MoodItemRow } from '../components/MoodItemRow'

export const HomeScreen: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])
  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }])
  }, [])
  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
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