import { SchoolActionTypes } from "../ActionTypes/SchoolActionTypes"

const initialState = {
    school: {},
    schoolBank: {},
}

export const SchoolReducer = ( state = initialState.school, {type, payload}) => {
    switch (type) {
        case SchoolActionTypes.SET_SCHOOL_INFORMATION:
            return {...state, ...payload}
        default:
            return state
    }
}
export const SchoolBankReducer = ( state = initialState.schoolBank, {type, payload}) => {
    switch (type) {
        case SchoolActionTypes.SET_SCHOOL_BANK_INFORMATION:
            return {...state, ...payload}
        default:
            return state
    }

}