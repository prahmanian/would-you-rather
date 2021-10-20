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