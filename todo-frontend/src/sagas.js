import { put, takeEvery } from 'redux-saga/effects'

export function* fetchTodos(action) {
   try {
      const data = yield fetch('http://localhost:8080/api/todo')
      yield put({type: "FETCH_SUCCEEDED", data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

export function* watchFetchData() {
    yield takeEvery('FETCH_REQUESTED', fetchTodos)
  }
