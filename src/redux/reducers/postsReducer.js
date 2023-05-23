import { ActionTypes } from "../types/action-types";

const initialState = {
  posts: [],
  recommededJobs: [],
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    case ActionTypes.SET_RECOMMENDED_JOBS:
      return { ...state, recommendedJobs: payload };
    default:
      return state;
  }
};
