import React, { createContext, useReducer, useEffect } from 'react'
import dataFetchReducer from '../reducers/dataFetchReducer'
import jsonPlaceHolderAPI from '../../core/apis/jsonplaceholder'
import { fetchDataInit, fetchDataSuccess, fetchDataFailure } from '../reducers/actions'

export const DataFetchContext = createContext()

const DataFetchContextProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    errorMessage: '',
    data: []
  }

  const [state, dispatch] = useReducer(dataFetchReducer, initialState)

  useEffect(() => {
    const fetchDataForUser1 = async () => {
      try {
        dispatch(fetchDataInit())

        const response = await jsonPlaceHolderAPI.get('/posts?userId=1')
        dispatch(fetchDataSuccess(response.data))
      } catch (err) {
        dispatch(fetchDataFailure())
      }
    }

    fetchDataForUser1()
  }, [dispatch])

  return (
    <DataFetchContext.Provider value={[state]}>
      {children}
    </DataFetchContext.Provider >
  )
}

export default DataFetchContextProvider
