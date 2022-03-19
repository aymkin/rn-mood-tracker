import React from 'react'

type AppContextType = {
  greeting: string
}

const defaultValue = {
  greeting: '',
}

const AppContext = React.createContext<AppContextType>(defaultValue)

export const useAppContext = () => React.useContext(AppContext)

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ greeting: 'Hello' }}>
      {children}
    </AppContext.Provider>
  )
}
