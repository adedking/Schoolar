import { SchoolActionTypes } from "../ActionTypes/SchoolActionTypes"

export const setSchoolInformation = (school) => {
    return {
        type: SchoolActionTypes.SET_SCHOOL_INFORMATION,
        payload: school,
    }
}
export const setSchoolBankInformation = (schoolBank) => {
    return {
        type: SchoolActionTypes.SET_SCHOOL_BANK_INFORMATION,
        payload: schoolBank,
    }
}