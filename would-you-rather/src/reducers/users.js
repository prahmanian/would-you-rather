import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION , SAVE_ANSWER} from '../actions/questions'

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
        default:
            return state
    }
}

// sarahedo: {
//     id: 'sarahedo',
//     name: 'Sarah Edo',
//     avatarURL: "https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg",
//     answers: {
//       "8xf0y6ziyjabvozdd253nd": 'optionOne',
//       "6ni6ok3ym7mf1p33lnez": 'optionTwo',
//       "am8ehyc8byjqgar0jgpub9": 'optionTwo',
//       "loxhs1bqm25b708cmbf3g": 'optionTwo'
//     },
//     questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
//   },