import { _saveQuestion, _saveQuestionAnswer} from '../starter/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
            .then(() => {
                const state = getState()
                localStorage.setItem('would-you-rather-questions', JSON.stringify(state.questions));
            })
    }
}

function saveAnswer (authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleSaveAnswer (qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())
        

        try {_saveQuestionAnswer ({ 
            authedUser,
            qid,
            answer,
        })}
        catch (error) {
            error.preventDefault()
            console.log(error)
        }
        finally {
            dispatch(saveAnswer(authedUser, qid, answer))
            dispatch(hideLoading())

            const state = getState()
            localStorage.setItem('would-you-rather-questions', JSON.stringify(state.questions));
            localStorage.setItem('would-you-rather-users', JSON.stringify(state.users));

        }

    //         // .then(() => dispatch(saveAnswer(authedUser, qid, answer)))
    //         .then(() => dispatch(hideLoading()))
    //         .then(() => {
    //             const state = getState()
    //             localStorage.setItem('would-you-rather-questions', JSON.stringify(state.questions));
    //             localStorage.setItem('would-you-rather-users', JSON.stringify(state.users));
    //         })
    // }
}}