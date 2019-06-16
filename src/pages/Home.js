import React from 'react'
import Summary from '../components/Summary/Summary'
import DataFetchContextProvider from '../hooks/contexts/DataFetchContext'

const Home = () => (
  <DataFetchContextProvider>
    <div>
      Home Page!
      <Summary />
    </div>
  </DataFetchContextProvider>
)

export default Home
