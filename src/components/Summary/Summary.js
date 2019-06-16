import React, { useContext } from 'react'
import { DataFetchContext } from '../../hooks/contexts/DataFetchContext'

const Summary = () => {
  const [state] = useContext(DataFetchContext)

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
