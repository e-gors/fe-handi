import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { profileReducer } from "./profileReducer";
import { categoryReducer } from "./categoryReducer";
import { skillReducer } from "./skillReducer";
import { postsReducer } from "./postsReducer";
import { locationReducer } from "./locationReducer";

const reducers = combineReducers({
  users: userReducer,
  profiles: profileReducer,
  categories: categoryReducer,
  skills: skillReducer,
  posts: postsReducer,
  locations: locationReducer,
});

export default reducers;
