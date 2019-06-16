import { FETCH_DATA_INIT, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes'

const fetchDataInit = apiEndPoint => ({
  type: FETCH_DATA_INIT,
  apiEndPoint
})

const fetchDataSuccess = (apiEndPoint, data) => ({
  type: FETCH_DATA_SUCCESS,
  apiEndPoint,
  payload: data
})

const fetchDataFailure = apiEndPoint => ({
  type: FETCH_DATA_FAILURE,
  apiEndPoint
})

export {
  fetchDataInit,
  fetchDataSuccess,
  fetchDataFailure
}
