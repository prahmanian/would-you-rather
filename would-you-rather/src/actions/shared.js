import {
    _getUsers,
    _getQuestions,
} from '../starter/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
// import { signInUser } from './authedUser'
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
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                // dispatch(signInUser('tylermcginnis'))
                dispatch(hideLoading())
            })
    }
}