
//Questions Actions
    //Create New Question
    export const CREATE_QUESTION = "CREATE_QUESTION"

    export function createQuestionAction (question) {
        return {
            type: CREATE_QUESTION,
            question
        }
    }

    //Add a New Answer
    export const ANSWER_QUESTION = "ANSWER_QUESTION"

    export function answerQuestionAction (question) {
        return {
            type: ANSWER_QUESTION,
            question
        }
    }


//User Actions
    //Add New User

    //Add Answered Question

    //Add Created Question



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