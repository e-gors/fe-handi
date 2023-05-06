import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { profileReducer } from "./profileReducer";
import { categoryReducer } from "./categoryReducer";
import { skillReducer } from "./skillReducer";

const reducers = combineReducers({
  users: userReducer,
  profiles: profileReducer,
  categories: categoryReducer,
  skills: skillReducer,
});

export default reducers;
