import {combineReducers} from 'redux';


const firstName = (state = '', action) => {
    switch(action.type){
        case "add_first_name": 
            return action.payload;
        default:
            return state
    }   
}

const lastName = (state = '', action) => {
    switch(action.type){
        case "add_last_name":
            return action.payload;
        default:
            return state
    }
}

const email = (state = '', action) => {
    switch(action.type){
        case "add_email":
            return action.payload;
        default:
            return state
    }
}

const phone = (state = '', action) => {
    switch(action.type){
        case "add_phone":
            return action.payload;
        default:
            return state
    }
}

const streetAddress = (state = '', action) => {
    switch(action.type){
        case "add_street_address":
            return action.payload;
        default:
            return state
    }
}

const city = (state = '', action) => {
    switch(action.type){
        case "add_city":
            return action.payload;
        default:
            return state
    }
}

const state = (state = '', action) => {
    switch(action.type){
        case "add_state":
            return action.payload;
        default:
            return state
    }
}

const zip = (state = '', action) => {
    switch(action.type){
        case "add_zip":
            return action.payload;
        default:
            return state
    }
}

const mainText = (state = 'Main', action) => {
    switch(action.type){
        case "add_main_text":
            return action.payload;
        default:
            return state
    }
}
const mainTextFont = (state = '', action) => {
    switch(action.type){
        case "add_main_text_font":
            return action.payload;
        default:
            return state
    }
}

const mainTextColor = (state = '#eba1c6', action) => {
    switch(action.type){
        case "add_main_text_color":
            return action.payload;
        default:
            return state
    }
}

const secondaryText = (state = 'Secondary', action) => {
    switch(action.type){
        case "add_secondary_text":
            return action.payload;
        default:
            return state
    }
}

const secondaryTextFont = (state = '', action) => {
    switch(action.type){
        case "add_secondary_text_font":
            return action.payload;
        default:
            return state
    }
}

const secondaryTextColor = (state = '#fdd06c', action) => {
    switch(action.type){
        case "add_secondary_text_color":
            return action.payload;
        default:
            return state
    }
}

const backgroundColor = (state = 'White', action) => {
    switch(action.type){
        case "add_background_color":
            return action.payload;
        default:
            return state
    }
}

const comments = (state = '', action) => {
    switch(action.type){
        case "add_comments":
            return action.payload;
        default:
            return state
    }
}




export default combineReducers({firstName, lastName, email, phone, streetAddress, city, state, zip, 
    mainText, mainTextFont, mainTextColor, secondaryText, secondaryTextFont, secondaryTextColor,
    backgroundColor, comments})    







// past here be monsters...and old code I am afraid to delete yet.

// import {combineReducers} from 'redux';

// const order = (state={}, action) => {

//     switch(action.type){
//         case 'finish_order' :
//             return {...state, order: action.payload};
//         case 'submit_info' :
//             return {...state, userInfo: action.payload}
//         default :
//             return state;        
//     }
// }

// const message = (state={}, action) => {
//     switch(action.type){
//         case 'send_message' :
//             return action.payload;
//         default :
//             return state;
//     }
// }

// export default combineReducers({order, message})

