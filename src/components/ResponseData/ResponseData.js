import React, { Fragment } from 'react'
import { VIEW_DETAILS, VIEW_SUMMARY } from '../../core/utils/constants'
import Summary from '../Summary/Summary'
import Details from '../Details/Details'

const ResponseData = ({ view }) => (
  <Fragment>
    {view === VIEW_SUMMARY && <Summary />}
    {view === VIEW_DETAILS && <Details />}
  </Fragment>
)

export default ResponseData
