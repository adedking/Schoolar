import { AuthActionTypes } from "../ActionTypes/AuthenticationActionTypes"

const initialState = {
    isLoggedIn: true,
    jwt: "",
}

export const isLoggedInReducer = ( state = initialState.isLoggedIn, {type, payload}) => {
    switch (type) {
        case AuthActionTypes.SET_AUTH_IS_LOGIN:
            return {...state, ...payload}
        default:
            return state
    }
}
export const jwtReducer = ( state = initialState.jwt, {type, payload}) => {
    switch (type) {
        case AuthActionTypes.SET_AUTH_TOKEN:
            return {...state, ...payload}
        default:
            return state
    }

}