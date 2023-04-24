import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { profileReducer } from './profileReducer';

const reducers = combineReducers({
    users: userReducer,
    profiles: profileReducer,
});

export default reducers;

