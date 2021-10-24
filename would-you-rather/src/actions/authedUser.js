//Authentication Actions
    //Signin
    export const SIGN_IN_USER = "SIGN_IN_USER"

    export function signInUser (userId) {
        return {
            type: SIGN_IN_USER,
            userId
        }
    }
    //SignOut
    export const SIGN_OUT_USER = "SIGN_OUT_USER"

    export function signOutUser () {
        return {
            type: SIGN_OUT_USER
        }
    }


    //Signin
    export const SIGN_IN_SESSION_USER = "SIGN_IN_SESSION_USER"

    export function signInSessionUser (userId) {
        return {
            type: SIGN_IN_SESSION_USER,
            userId
        }
    }

    //Automatic Signin
    export const AUTO_SIGN_IN_USER = "AUTO_SIGN_IN_USER"

    export function autoSignInUser (userId) {
        return {
            type: AUTO_SIGN_IN_USER,
            userId
        }
    }