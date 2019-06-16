import React, { Fragment, useContext } from 'react'
import { DataFetchContext } from '../../hooks/contexts/DataFetchContext'
import { API_ENDPOINT_1, API_ENDPOINT_2 } from '../../core/utils/constants'

const Summary = () => {

  const renderSummaries = (state, userId) => {
    const { isLoading, errorMessage, data } = state

    return (
      <div className="grid-x grid-margin-x" >
        <div className="cell small-6">
          {isLoading && <h1>Data is Loading!!</h1>}
          {errorMessage.length > 0 && <h1>{errorMessage}</h1>}
          {!isLoading && !(errorMessage.length > 0) && <h1>Got {data.length} posts for User {userId}</h1>}
        </div>
      </div >
    )
  }

  const [state] = useContext(DataFetchContext)
  const apiEndpoint1Summary = state[API_ENDPOINT_1]
  const apiEndpoint2Summary = state[API_ENDPOINT_2]

  return (
    <Fragment>
      {renderSummaries(apiEndpoint1Summary, 1)}
      {renderSummaries(apiEndpoint2Summary, 2)}
    </Fragment>
  )
}

export default Summary
