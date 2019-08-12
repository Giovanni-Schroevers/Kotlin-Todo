import { takeEvery, call, put } from 'redux-saga/effects';

import { getTodos, createTodo, finishTodo, removeTodo } from './api';

import { REQUEST_ADD_ITEM, REQUEST_TODOS, REQUEST_FINISH_TODO , REQUEST_REMOVE_TODO, recieveAddItem, recieveTodos, recieveFinishTodo, recieveRemoveTodo } from './actions';

function* callRequestAddItem(action) {
    let results = yield call(createTodo, action.payload);

    yield put(recieveAddItem(results));
}

export function* requestAddItemSaga() {
    yield takeEvery(REQUEST_ADD_ITEM, callRequestAddItem);
}

function* callRequestTodos(action){
    let results = yield call(getTodos, action.payload);

    yield put(recieveTodos(results));
}

export function* requestTodosSaga(){
    yield takeEvery(REQUEST_TODOS, callRequestTodos);
}

function* callRequestFinishTodo(action){
    let results = yield call(finishTodo, action.payload);

    yield put(recieveFinishTodo(results));
}

export function* requestFinishTodoSaga(){
    yield takeEvery(REQUEST_FINISH_TODO, callRequestFinishTodo);
}

function* callRequestRemoveTodo(action) {
    let results = yield call(removeTodo, action.payload);

    yield put(recieveRemoveTodo(results));
}

export function* requestRemoveTodo(){
    yield takeEvery(REQUEST_REMOVE_TODO, callRequestRemoveTodo);
}
