import { StaffActionTypes } from "../ActionTypes/StaffActionTypes";

const initialState = {
  staff: [],
};

export const StaffReducer = (state = initialState.staff, { type, payload }) => {
  switch (type) {
    case StaffActionTypes.SET_STAFF_INFORMATION:
      return { ...state, ...payload };
    default:
      return state;
  }
};
