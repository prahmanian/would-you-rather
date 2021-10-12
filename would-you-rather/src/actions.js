//Authentication Actions
    //Signin
    export const SIGN_IN = "SIGN_IN"

    export function signInAction (userId) {
        return {
            type: SIGN_IN,
            userId
        }
    }
    //SignOut
    export const SIGN_OUT = "SIGN_OUT"

    export function signOutAction () {
        return {
            type: SIGN_OUT
        }
    }

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

//User Actions
    //Add New User

    //Add Answered Question

    //Add Created Question