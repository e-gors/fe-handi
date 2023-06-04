import { ActionTypes } from "../types/action-types";

export const setProjects = (projects) => {
  return {
    type: ActionTypes.SET_USER_PROJECTS,
    payload: projects,
  };
};

export const updateProjects = (projects) => {
  return {
    type: ActionTypes.UPDATE_USER_PROJECTS,
    payload: projects,
  };
};
