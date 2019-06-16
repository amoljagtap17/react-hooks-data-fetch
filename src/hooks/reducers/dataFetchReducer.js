import { FETCH_DATA_INIT, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes'
import produce from 'immer'

const fetchDataInit = (draft, { apiEndPoint }) => {
  draft[apiEndPoint].isLoading = true
  draft[apiEndPoint].errorMessage = ''
  return draft
}

const fetchDataSuccess = (draft, { apiEndPoint, payload }) => {
  draft[apiEndPoint].isLoading = false
  draft[apiEndPoint].errorMessage = ''
  draft[apiEndPoint].data = payload
  return draft
}

const fetchDataFailure = (draft, { apiEndPoint }) => {
  draft[apiEndPoint].isLoading = false
  draft[apiEndPoint].errorMessage = 'Data Retrieve Failure'
  return draft
}

const dataFetchReducer = produce(
  (draft, action) => {
    switch (action.type) {
      case FETCH_DATA_INIT: return fetchDataInit(draft, action)
      case FETCH_DATA_SUCCESS: return fetchDataSuccess(draft, action)
      case FETCH_DATA_FAILURE: return fetchDataFailure(draft, action)
      default: return draft
    }
  }
)

export default dataFetchReducer
