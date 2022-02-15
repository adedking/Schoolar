import {combineReducers} from 'redux';
import { SchoolReducer, SchoolBankReducer } from './SchoolReducers';
import { isLoggedInReducer, jwtReducer } from './AuthReducers';
import { StaffReducer } from './StaffReducers';

const reducers = combineReducers({
    school: SchoolReducer,
    staffInformation: StaffReducer,
    schoolBank: SchoolBankReducer,
    login: isLoggedInReducer,
    jwt: jwtReducer,
})

export default reducers;