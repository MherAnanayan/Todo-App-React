import {
    ADD_TODO,
    GET_DATA,
    IS_ADMIN,
    SET_LOADING,
    DELETE_TODO,
    CHANGE_TODO,
    EDIT_LOCAL_TODO
} from './types';
import axios from 'axios';

const url = `https://todo-app-1ea78-default-rtdb.firebaseio.com`;

export const addTodoData = (todoData) => async(dispatch) => {

    await axios.post(`${url}/todos/.json`, JSON.stringify(todoData))
    dispatch({type: ADD_TODO, todoData});

};
export const getTodoData = (todoData) => async(dispatch) => {

    const val = todoData.map(el => el[1]);
    console.log(val);
    dispatch({type: GET_DATA, val});
};
export const adminLogin = (todoData) => async(dispatch) => {
    dispatch({type: IS_ADMIN , todoData})
};

export const loadData = (todoData) => async (dispatch) => {
    dispatch({ type: SET_LOADING, todoData })
};

export const deleteTodo = (id) => async (dispatch) => {
     dispatch( {type: SET_LOADING})
    const res = await axios.get(`${url}/todos.json`)
    const firebaseID = await Object.entries(res.data)
    const dataID = await Object.values(firebaseID).filter(el => el[1].id === id)[0][0]
    await axios.delete(`${url}/todos/${dataID}.json`)
    dispatch({ type: DELETE_TODO , id })
};

export const changeTodo = (todo) => async (dispatch) => {

    const { id } = todo[0]
    dispatch({ type: SET_LOADING })
    const res = await axios.get(`${url}/todos.json`)
    const firebaseID = await Object.entries(res.data)
    const dataID = await Object.values(firebaseID).filter(el => el[1].id === id)[0][0]
    await axios.put(`${url}/todos/${dataID}.json`, JSON.stringify(todo[0]));

    dispatch({ type: CHANGE_TODO, id })
};

export const editLocalTodo = (todoData) => async (dispatch) => {
    await axios.put(`${url}/todos/.json`, JSON.stringify(todoData))
    
    dispatch({ type: EDIT_LOCAL_TODO , todoData })
};