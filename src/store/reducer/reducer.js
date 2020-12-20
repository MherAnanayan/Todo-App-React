import { ADD_TODO , REMOVE_TODO} from '../action/types';

const Initial_State = {
  
        id: Math.random().toString(),
        title: '',
        name: '',
        status: '',
        email: '',
        loading: false
   
};

const rootReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case ADD_TODO:
            
            
            case REMOVE_TODO: 
            return Initial_State
        
        default:
                return state;
    }
}


export default rootReducer;