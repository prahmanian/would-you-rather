import { _saveUser } from '../starter/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUser (user) {
    return {
        type: ADD_USER,
        user
    }
}

export function handleAddUser (name, avatarURL) {
    return (dispatch, getState) => {



        dispatch(showLoading())

        return _saveUser({
            name,
            avatarURL,
        })
            .then((user) => dispatch(addUser(user)))
            .then(() => dispatch(hideLoading()))
    }
}