import {combineReducers} from 'redux';

const order = (state={}, action) => {

    switch(action.type){
        case 'finish_order' :
            return {...state, order: action.payload};
        case 'submit_info' :
            return {...state, userInfo: action.payload}
        default :
            return state;        
    }
}

const message = (state={}, action) => {
    switch(action.type){
        case 'send_message' :
            return action.payload;
        default :
            return state;
    }
}

export default combineReducers({order, message})

