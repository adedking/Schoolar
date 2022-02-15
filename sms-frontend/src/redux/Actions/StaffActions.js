import { StaffActionTypes } from "../ActionTypes/StaffActionTypes"

export const setStaffInformation = (school) => {
    return {
        type: StaffActionTypes.SET_STAFF_INFORMATION,
        payload: staff,
    }
}