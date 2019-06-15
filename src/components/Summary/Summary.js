import React, { useEffect, useState } from 'react'
import jsonPlaceHolderAPI from '../../core/apis/jsonplaceholder'

const Summary = () => {
  const [user1Data, setUser1Data] = useState([])

  useEffect(() => {
    const fetchDataForUser1 = async () => {
      const response = await jsonPlaceHolderAPI.get('/posts?userId=1')
      setUser1Data(response.data)
    }

    fetchDataForUser1()
  }, [])

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell small-6">
        Got {user1Data.length} posts for User 1
      </div>
    </div>
  )
}

export default Summary
