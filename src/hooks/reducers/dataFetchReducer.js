import { FETCH_DATA_INIT, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes'
import { updateObject } from '../../core/utils/utils'

const fetchDataInit = (state, action) => updateObject(state, {
  isLoading: true,
  errorMessage: ''
})

const fetchDataSuccess = (state, action) => updateObject(state, {
  isLoading: false,
  errorMessage: '',
  data: action.payload
})

const fetchDataFailure = (state, action) => updateObject(state, {
  isLoading: false,
  errorMessage: 'Data Retrieve Failure'
})

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA_INIT: return fetchDataInit(state, action)
    case FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action)
    case FETCH_DATA_FAILURE: return fetchDataFailure(state, action)
    default: return state
  }
}

export default dataFetchReducer
