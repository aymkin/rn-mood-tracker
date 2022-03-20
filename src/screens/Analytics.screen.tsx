import React from 'react'
import { StyleSheet, View } from 'react-native'
import { VictoryPie } from 'victory-native'
import { useAppContext } from '../App.provider'
import { groupBy } from 'lodash'

export const AnalyticsScreen: React.FC = () => {
  const { moodList } = useAppContext()

  const data = Object.entries(groupBy(moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  )

  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        animate={true}
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
})
