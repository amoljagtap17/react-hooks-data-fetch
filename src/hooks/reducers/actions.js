import { FETCH_DATA_INIT, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes'

const fetchDataInit = () => ({
  type: FETCH_DATA_INIT
})

const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
})

const fetchDataFailure = () => ({
  type: FETCH_DATA_FAILURE
})

export {
  fetchDataInit,
  fetchDataSuccess,
  fetchDataFailure
}
