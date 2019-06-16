import React, { createContext, useReducer } from 'react'
import dataFetchReducer from '../reducers/dataFetchReducer'

export const DataFetchContext = createContext()

const DataFetchContextProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    errorMessage: '',
    data: []
  }

  const [state, dispatch] = useReducer(dataFetchReducer, initialState)

  return (
    <DataFetchContext.Provider value={[state, dispatch]}>
      {children}
    </DataFetchContext.Provider >
  )
}

export default DataFetchContextProvider
