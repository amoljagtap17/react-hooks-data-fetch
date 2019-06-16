import { FETCH_DATA_INIT, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes'
import produce from 'immer'

const fetchDataInit = (draft, action) => {
  draft.isLoading = true
  draft.errorMessage = ''
  return draft
}

const fetchDataSuccess = (draft, action) => {
  draft.isLoading = false
  draft.errorMessage = ''
  draft.data = action.payload
  return draft
}

const fetchDataFailure = (draft, action) => {
  draft.isLoading = false
  draft.errorMessage = 'Data Retrieve Failure'
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
