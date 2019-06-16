import React from 'react'
import ResponseData from '../components/ResponseData/ResponseData'
import { VIEW_SUMMARY } from '../core/utils/constants'

const Home = () => (
  <div>
    <p>Home Page!</p>
    <ResponseData view={VIEW_SUMMARY} />
  </div>
)

export default Home
