import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const middleswareEnhancer = applyMiddleware(...[thunkMiddleware]);
// const enhancers = [middleswareEnhancer];
// const composedEnhancers = composeWithDevTools(...enhancers);

// const store = createStore(reducers, {}, composedEnhancers);

// export default store;

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  const persistor = persistStore(store);

  export { store, persistor };
