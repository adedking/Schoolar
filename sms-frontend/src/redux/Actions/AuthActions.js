import { AuthActionTypes } from "../ActionTypes/AuthenticationActionTypes"

export const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: AuthActionTypes.SET_AUTH_IS_LOGIN,
        payload: isLoggedIn,
    }
}
export const setJwt = (jwt) => {
    return {
        type: AuthActionTypes.SET_AUTH_TOKEN,
        payload: jwt,
    }
}