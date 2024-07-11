import { ActionTypes } from "../types/action-types";

const initialState = {
  workers: [],
};

export const workerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WORKERS:
      return { ...state, workers: payload };
    default:
      return state;
  }
};
