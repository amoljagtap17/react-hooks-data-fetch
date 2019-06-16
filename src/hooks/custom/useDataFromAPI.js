import { useState, useEffect, useReducer } from 'react'
import dataFetchReducer from '../reducers/dataFetchReducer'
import jsonPlaceHolderAPI from '../../core/apis/jsonplaceholder'
import { fetchDataInit, fetchDataSuccess, fetchDataFailure } from '../reducers/actions'

const useDataFromAPI = (intialUrl, initialData) => {
  const [url, setUrl] = useState(intialUrl)

  const [state, dispatch] = useReducer(dataFetchReducer, initialData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchDataInit())

        const response = await jsonPlaceHolderAPI.get(url)

        dispatch(fetchDataSuccess(response.data.slice(5)))
      } catch (err) {
        dispatch(fetchDataFailure())
      }
    }

    fetchData()
  }, [url])

  return [state, setUrl]
}

export {
  useDataFromAPI
}
