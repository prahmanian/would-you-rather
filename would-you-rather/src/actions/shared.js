import {
    _getUsers,
    _getQuestions,
} from '../starter/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { signInSessionUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'


function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function handleInitialData () {
    return (dispatch, getState) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
            .then(() => {
                const state = getState()
                localStorage.setItem('would-you-rather-users', JSON.stringify(state.users));
                localStorage.setItem('would-you-rather-questions', JSON.stringify(state.questions));
            })
    }
}


export function handleLoadFromSession () {
    return (dispatch) => {
        dispatch(showLoading())
        const sessionUser = JSON.parse(localStorage.getItem('would-you-rather-authedUser'));
        const users = JSON.parse(localStorage.getItem('would-you-rather-users'));
        const questions = JSON.parse(localStorage.getItem('would-you-rather-questions'));
        dispatch(signInSessionUser(sessionUser))
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        
        dispatch(hideLoading())

    }
}