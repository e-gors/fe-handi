import { ActionTypes } from "../types/action-types";

const initialState = {
  worker: [],
  workers: [],
  workersCount: "",
  client: [],
  clients: [],
  clientsCount: "",
  searchQuery: "",
  searchResult: [],
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
    case ActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };
    case ActionTypes.SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: payload,
      };
    case ActionTypes.UPDATE_WORKER:
      return {
        ...state,
        worker: payload,
      };
    case ActionTypes.SET_WORKERS_COUNT:
      return {
        ...state,
        workersCount: payload,
      };
    case ActionTypes.SET_CLIENTS_COUNT:
      return {
        ...state,
        clientsCount: payload,
      };
    default:
      return state;
  }
};
