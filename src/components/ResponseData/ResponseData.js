import React from 'react'
import DataFetchContextProvider from '../../hooks/contexts/DataFetchContext'
import { VIEW_DETAILS, VIEW_SUMMARY } from '../../core/utils/constants'
import Summary from '../Summary/Summary'
import Details from '../Details/Details'

const ResponseData = ({ view }) => (
  <DataFetchContextProvider>
    {view === VIEW_SUMMARY && <Summary />}
    {view === VIEW_DETAILS && <Details />}
  </DataFetchContextProvider>
)

export default ResponseData
