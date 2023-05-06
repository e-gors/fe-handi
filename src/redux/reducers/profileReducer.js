import { ActionTypes } from "../types/action-types";

const initialState = {
  worker: [],
  client: [],
  workers: [],
  clients: [],
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WORKER:
      return { ...state, worker: payload };
    case ActionTypes.SET_WORKERS:
      return { ...state, workers: payload };
    case ActionTypes.SET_CLIENT:
      return { ...state, client: payload };
    case ActionTypes.SET_CLIENTS:
      return { ...state, clients: payload };
    default:
      return state;
  }
};
