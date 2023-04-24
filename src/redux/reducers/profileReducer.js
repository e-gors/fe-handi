import { ActionTypes } from "../types/action-types";

const initialState = {
  worker: [],
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WORKER:
      return {...state, worker: payload};
    default:
      return state;
  }
};
