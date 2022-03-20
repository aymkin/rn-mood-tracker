import React from 'react'
import { ScrollView } from 'react-native'
import { useAppContext } from '../App.provider'
import { MoodItemRow } from '../components/MoodItemRow'

export const HistoryScreen: React.FC = () => {
  const { moodList } = useAppContext()
  return (
    <ScrollView>
      {moodList
        // reverse() alone mutates the original array, This is why we call slice()
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
    </ScrollView>
  )
}
