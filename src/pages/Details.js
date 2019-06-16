import React from 'react'
import ResponseData from '../components/ResponseData/ResponseData'
import { VIEW_DETAILS } from '../core/utils/constants'

const DetailsPage = () => (
  <div>
    <p>Details Page!</p>
    <ResponseData view={VIEW_DETAILS} />
  </div>
)

export default DetailsPage
