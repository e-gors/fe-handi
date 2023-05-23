import { ActionTypes } from "../types/action-types";

const initialState = {
  skills: [],
  children: [],
};

export const skillReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SKILLS:
      return { ...state, skills: payload };
      case ActionTypes.SET_SKILLS_CHILDREN:
      return { ...state, children: payload };
    default:
      return state;
  }
};
