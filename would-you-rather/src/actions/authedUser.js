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
