import React, { Fragment, useContext } from 'react'
import { DataFetchContext } from '../../hooks/contexts/DataFetchContext'
import { API_ENDPOINT_1, API_ENDPOINT_2 } from '../../core/utils/constants'

const Details = () => {
  const [state] = useContext(DataFetchContext)

  const renderPostsList = data => (
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

  const renderDetails = state => {
    const { isLoading, errorMessage, data } = state

    return (
      <div className="grid-x grid-margin-x">
        <div className="cell">
          {isLoading && <h1>Data is Loading!!</h1>}
          {errorMessage.length > 0 && <h1>{errorMessage}</h1>}
          {
            !isLoading && !(errorMessage.length > 0) && (
              renderPostsList(data)
            )
          }
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      {renderDetails(state[API_ENDPOINT_1])}
      <hr />
      {renderDetails(state[API_ENDPOINT_2])}
    </Fragment>
  )
}

export default Details
