import React, { useState } from 'react'
import { MoodOptionType, MoodOptionWithTimestamp } from './types'

type AppContextType = {
  moodList: MoodOptionWithTimestamp[]
  handleSelectMood: (mood: MoodOptionType) => void
}

const defaultValue = {
  moodList: [],
  handleSelectMood: () => {},
}

const AppContext = React.createContext<AppContextType>(defaultValue)

export const useAppContext = () => React.useContext(AppContext)

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }])
  }, [])

  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  )
}
