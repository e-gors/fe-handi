import { ActionTypes } from "../types/action-types";

const initialState = {
  worker: [],
  client: [],
  workers: [],
  clients: [],
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WORKERS:
      return { ...state, workers: payload };
    case ActionTypes.SET_CLIENTS:
      return { ...state, clients: payload };
    case ActionTypes.FILTER_WORKERS:
      const filteredWorkers = state.workers.filter(
        (user) => user.uuid === payload
      );
      const filteredWorker =
        filteredWorkers.length > 0 ? filteredWorkers[0] : null;
      return {
        ...state,
        worker: filteredWorker ? { ...filteredWorker } : [], // Update the worker property
      };
    default:
      return state;
  }
};
