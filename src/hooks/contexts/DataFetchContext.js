import React, { createContext } from 'react'
import { useDataFromAPI } from '../custom/useDataFromAPI'
import { API_ENDPOINT_1, API_ENDPOINT_2 } from '../../core/utils/constants'

export const DataFetchContext = createContext()

const DataFetchContextProvider = ({ children }) => {
  const initialState = {
    [API_ENDPOINT_1]: {
      isLoading: false,
      errorMessage: '',
      data: []
    },
    [API_ENDPOINT_2]: {
      isLoading: false,
      errorMessage: '',
      data: []
    }
  }

  const [state] = useDataFromAPI(initialState)

  return (
    <DataFetchContext.Provider value={[state]}>
      {children}
    </DataFetchContext.Provider >
  )
}

export default DataFetchContextProvider
