import { ActionTypes } from "../types/action-types";

const initialState = {
  posts: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};
