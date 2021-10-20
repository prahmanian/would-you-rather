import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case SAVE_ANSWER:
            const answer = action.answer
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [answer]: {
                        ...state[action.qid][answer],
                        votes: [...state[action.qid][answer].votes, action.authedUser]
                        // questions: [...state[userId].questions, qId]
                    },
                },
            }
        default:
            return state
    }
}


// let questions = {
//     "8xf0y6ziyjabvozdd253nd": {
//       id: '8xf0y6ziyjabvozdd253nd',
//       author: 'sarahedo',
//       timestamp: 1467166872634,
//       optionOne: {
//         votes: ['sarahedo'],
//         text: 'have horrible short term memory',
//       },
//       optionTwo: {
//         votes: [],
//         text: 'have horrible long term memory'
//       }
//     },