//auth reducer
import { CREATE_QUESTION, ANSWER_QUESTION } from './actions'

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


