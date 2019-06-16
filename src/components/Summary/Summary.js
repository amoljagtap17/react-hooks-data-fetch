import React, { useEffect, useContext } from 'react'
import jsonPlaceHolderAPI from '../../core/apis/jsonplaceholder'
import { DataFetchContext } from '../../hooks/contexts/DataFetchContext'
import { fetchDataInit, fetchDataSuccess, fetchDataFailure } from '../../hooks/reducers/actions'

const Summary = () => {
  const [state, dispatch] = useContext(DataFetchContext)

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

  const { isLoading, errorMessage, data } = state

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell small-6">
        {isLoading && <h1>Data is Loading!!</h1>}
        {errorMessage.length > 0 && <h1>{errorMessage}</h1>}
        {!isLoading && !(errorMessage.length > 0) && <h1>Got {data.length} posts for User 1</h1>}
      </div>
    </div>
  )
}

export default Summary
