//auth reducer
import {SIGN_IN, SIGN_OUT} from './actions'
import Redux from  'react-redux'



export function auth (state = null, action) {
    switch(action.type) {
        case SIGN_IN:
            return action.userId
        case SIGN_OUT:
            return null
        default:
            return state
    }
}



const store = Redux.createStore(Redux.combineReducers({
    auth,
    users,
    questions
}))