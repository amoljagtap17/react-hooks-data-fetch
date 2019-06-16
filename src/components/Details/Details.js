import React, { useContext } from 'react'
import { DataFetchContext } from '../../hooks/contexts/DataFetchContext'

const Details = () => {
  const [state] = useContext(DataFetchContext)

  const { isLoading, errorMessage, data } = state

  const renderPostsList = () => (
    <ul>
      {
        data.map(post => (
          <li key={post.id}>
            <p>{post.title}</p>
          </li>
        ))
      }
    </ul>
  )

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell">
        {isLoading && <h1>Data is Loading!!</h1>}
        {errorMessage.length > 0 && <h1>{errorMessage}</h1>}
        {
          !isLoading && !(errorMessage.length > 0) && (
            renderPostsList()
          )
        }
      </div>
    </div>
  )
}

export default Details
