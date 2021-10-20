import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            const userId = action.question.author
            const qId = action.question.id

            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    questions: [...state[userId].questions, qId]
                }
            }
        default:
            return state
    }
}