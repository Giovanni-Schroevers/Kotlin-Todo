import { handleAction, combineActions } from 'redux-actions';

import { RECIEVE_ADD_ITEM, RECIEVE_TODOS, RECIEVE_FINISH_TODO, recieveAddItem, recieveTodos, recieveFinishTodo } from './actions';

let defaultState = {
  items:[]
};

export const ui = handleAction(
  combineActions(
    recieveAddItem,
    recieveTodos,
    recieveFinishTodo
  ),
  {
    next(state, action){
      let newState;
      switch (action.type){
        case RECIEVE_ADD_ITEM:
          newState = {
            ...state
          };

          newState.items = [].concat(newState.items);

          if (Array.isArray(action.payload))
            newState.items = newState.items.concat(action.payload);
          else
            newState.items.push(action.payload);

            delete newState.itemsError;

          return newState;
        case RECIEVE_TODOS:
          newState = {
            ...state
          };

          newState.todos = action.payload;
          
          delete newState.todosError;

          return newState;
        case RECIEVE_FINISH_TODO:
          newState = {
            ...state
          }

          newState.finishedTodo = action.payload;

          delete newState.finishTodoError;

          return newState
        default:
          return state;
      }
    },
    throw(state, action) {
      let newState;
      switch(action.type){
        case RECIEVE_ADD_ITEM:
          newState = {
            ...state
          };

          newState.itemsError = action.payload;

          return newState;

        case RECIEVE_TODOS:
          newState = {
            ...state
          };

          newState.todosError = action.payload;

          return newState;
        case RECIEVE_FINISH_TODO:
          newState = {
            ...state
          };

          newState.finishTodoError = action.payload;

          return newState;
        default:
          return state;
      }
    }
  },
  defaultState
)