import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION , SAVE_ANSWER} from '../actions/questions'
import { ADD_USER } from '../actions/users'

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
        case SAVE_ANSWER:
            const authedUser = action.authedUser
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [action.qid]: action.answer,
                    }
                }
            }
        case ADD_USER:
            return {
                ...state,
                [action.user.id]: action.user,
            }
        default:
            return state
    }
}