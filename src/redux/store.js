import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";

const middleswareEnhancer = applyMiddleware(...[thunkMiddleware]);
const enhancers = [middleswareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(reducers, {}, composedEnhancers);

export default store;
