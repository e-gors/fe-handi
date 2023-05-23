import { ActionTypes } from "../types/action-types";

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const setRecommendedJobs = (jobs) => {
  return {
    type: ActionTypes.SET_RECOMMENDED_JOBS,
    payload: jobs,
  };
};
