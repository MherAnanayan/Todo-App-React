import { ADD_TODO, OPEN_MODAL } from './types';



export const addTodoData = (todoData) => (dispatch) => {
    console.log(todoData)
    console.log(dispatch )
    dispatch({ type: ADD_TODO, todoData });
};

export const openModal = (todoData) => (dispatch) => {
    dispatch({ type: OPEN_MODAL, todoData });
};