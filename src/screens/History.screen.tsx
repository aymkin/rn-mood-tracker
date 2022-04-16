import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useAppContext } from '../App.provider'
import { MoodItemRow } from '../components/MoodItemRow'
import { TopWarning } from '../components/TopWarning'

export const HistoryScreen: React.FC = () => {
  const { moodList } = useAppContext()
  return (
    <ScrollView style={styles.container}>
      {moodList.length ? (
        moodList
          // reverse() alone mutates the original array, This is why we call slice()
          .slice()
          .reverse()
          .map(item => <MoodItemRow item={item} key={item.timestamp} />)
      ) : (
        <TopWarning value="No mood is tracked yet" />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
})
