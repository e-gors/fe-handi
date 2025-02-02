import { ActionTypes } from "../types/action-types";

export const setWorkers = (workers) => {
  return {
    type: ActionTypes.SET_WORKERS,
    payload: workers,
  };
};

export const setClients = (clients) => {
  return {
    type: ActionTypes.SET_CLIENTS,
    payload: clients,
  };
};

export const filterWorkers = (uuid) => {
  return {
    type: ActionTypes.FILTER_WORKERS,
    payload: uuid,
  };
};

export const setSearchQuery = (value) => {
  return {
    type: ActionTypes.SET_SEARCH_QUERY,
    payload: value,
  };
};

export const setSearchResult = (result) => {
  return {
    type: ActionTypes.SET_SEARCH_RESULT,
    payload: result,
  };
};

export const updateWorker = (worker) => {
  return {
    type: ActionTypes.UPDATE_WORKER,
    payload: worker,
  };
};

export const setWorkersCount = (data) => {
  return {
    type: ActionTypes.SET_WORKERS_COUNT,
    payload: data,
  };
};
export const setClientsCount = (data) => {
  return {
    type: ActionTypes.SET_CLIENTS_COUNT,
    payload: data,
  };
};
