import {
    _getUsers,
    _getQuestions,
} from '../starter/_DATA'
// import { users, questions } from '../reducers'


export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}