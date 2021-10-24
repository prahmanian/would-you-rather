import { SIGN_IN_USER, SIGN_OUT_USER, SIGN_IN_SESSION_USER, AUTO_SIGN_IN_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
    switch(action.type) {
        case SIGN_IN_USER:
            return action.userId
        case SIGN_OUT_USER:
            return null
        case SIGN_IN_SESSION_USER:
            return action.userId
        case AUTO_SIGN_IN_USER:
            return action.userId
        default:
            return state
    }
}