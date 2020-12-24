import {loading} from '../action/action';
import {
    ADD_TODO,
    GET_DATA,
    IS_ADMIN,
    SET_LOADING,
    DELETE_TODO,
    CHANGE_TODO,
    EDIT_LOCAL_TODO
} from '../action/types';

const Initial_State = {

    todos: [],
    loading: false,
    admin: 'none'
};

const rootReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.todoData
                ]
            };
        case GET_DATA:

            return {
                ...state,
                todos: action.val,
                loading: false
            };
        case IS_ADMIN:
            return {
                ...state,
                admin: action.todoData
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case DELETE_TODO:
            return {
                ...state,
                loading: false,
                todos: state
                    .todos
                    .filter(el => el.id !== action.id)
            };
        case CHANGE_TODO:
            return {
                ...state,
                loading: false,
            };
        case EDIT_LOCAL_TODO:
            
            return {
                ...state,
                loading: false,
                todos: [
                    ...state.todos,
                    action.todoData
                ]
            };
        default:
            return state;
    }
}

export default rootReducer;