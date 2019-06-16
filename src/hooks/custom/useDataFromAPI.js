import { useEffect, useReducer } from 'react'
import dataFetchReducer from '../reducers/dataFetchReducer'
import jsonPlaceHolderAPI from '../../core/apis/jsonplaceholder'
import { fetchDataInit, fetchDataSuccess, fetchDataFailure } from '../reducers/actions'
import { API_ENDPOINT_1, API_ENDPOINT_2 } from '../../core/utils/constants'

const useDataFromAPI = initialData => {
  const [state, dispatch] = useReducer(dataFetchReducer, initialData)

  useEffect(() => {
    const fetchDataForAPIEndpoint = async (apiEndPoint, url) => {
      try {
        dispatch(fetchDataInit(apiEndPoint))

        const response = await jsonPlaceHolderAPI.get(url)

        dispatch(fetchDataSuccess(apiEndPoint, response.data.slice(5)))
      } catch (err) {
        dispatch(fetchDataFailure(apiEndPoint))
      }
    }

    fetchDataForAPIEndpoint(API_ENDPOINT_1, '/posts?userId=1')
    fetchDataForAPIEndpoint(API_ENDPOINT_2, '/posts?userId=2')
  }, [])

  return [state]
}

export {
  useDataFromAPI
}
