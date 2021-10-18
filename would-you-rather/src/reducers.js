//auth reducer
import {SIGN_IN, SIGN_OUT, CREATE_QUESTION, ANSWER_QUESTION } from './actions'
import Redux from  'react-redux'



export function authUser (state = null, action) {
    switch(action.type) {
        case SIGN_IN:
            return action.userId
        case SIGN_OUT:
            return null
        default:
            return state
    }
}

    // users = {
    //     sarahedo: {
    //       id: 'sarahedo',
    //       name: 'Sarah Edo',
    //       avatarURL: "https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg",
    //       answers: {
    //         "8xf0y6ziyjabvozdd253nd": 'optionOne',
    //         "6ni6ok3ym7mf1p33lnez": 'optionTwo',
    //         "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    //         "loxhs1bqm25b708cmbf3g": 'optionTwo'
    //       },
    //       questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    //     },
    
export function users (state = {}, action) {
    switch(action.type) {
        case CREATE_QUESTION:
            return action.userId
        case ANSWER_QUESTION:
            return null
        default:
            return state
    }
}

export function questions (state = {}, action) {
    switch(action.type) {
        case CREATE_QUESTION:
            return action.userId
        case ANSWER_QUESTION:
            return null
        default:
            return state
    }
}


const store = Redux.createStore(Redux.combineReducers({
    authUser,
    users,
    questions
}))