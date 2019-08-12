import { createAction } from 'redux-actions';

export const REQUEST_ADD_ITEM = 'REQUEST_ADD_ITEM';
export const RECIEVE_ADD_ITEM = 'RECIEVE_ADD_ITEM';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECIEVE_TODOS = 'RECIEVE_TODOS';

export const REQUEST_FINISH_TODO = 'REQUEST_FINISH_TODO';
export const RECIEVE_FINISH_TODO = 'RECIEVE_FINISH_TODO';

export const REQUEST_REMOVE_TODO = 'REQUEST_REMOVE_TODO';
export const RECIEVE_REMOVE_TODO = 'RECIEVE_REMOVE_TODO';

export const requestAddItem = createAction(REQUEST_ADD_ITEM);
export const recieveAddItem = createAction(RECIEVE_ADD_ITEM);

export const requestTodos = createAction(REQUEST_TODOS);
export const recieveTodos = createAction(RECIEVE_TODOS);

export const requestFinishTodo = createAction(REQUEST_FINISH_TODO);
export const recieveFinishTodo = createAction(RECIEVE_FINISH_TODO);

export const requestRemoveTodo = createAction(REQUEST_REMOVE_TODO);
export const recieveRemoveTodo = createAction(RECIEVE_REMOVE_TODO);
