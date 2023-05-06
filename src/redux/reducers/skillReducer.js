import { ActionTypes } from "../types/action-types";

const initialState = {
  skills: [],
};

export const skillReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SKILLS:
      return { ...state, skills: payload };
    default:
      return state;
  }
};
