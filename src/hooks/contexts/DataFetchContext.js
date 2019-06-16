import React, { createContext } from 'react'
import { useDataFromAPI } from '../custom/useDataFromAPI'

export const DataFetchContext = createContext()

const DataFetchContextProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    errorMessage: '',
    data: []
  }

  const [state] = useDataFromAPI('/posts?userId=1', initialState)

  return (
    <DataFetchContext.Provider value={[state]}>
      {children}
    </DataFetchContext.Provider >
  )
}

export default DataFetchContextProvider
