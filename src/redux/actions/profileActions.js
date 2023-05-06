import { ActionTypes } from "../types/action-types";

export const setWorker = (worker) => {
  return {
    type: ActionTypes.SET_WORKER,
    payload: worker,
  };
};

export const setWorkers = (workers) => {
  return {
    type: ActionTypes.SET_WORKERS,
    payload: workers,
  };
};

export const setClient = (client) => {
  return {
    type: ActionTypes.SET_CLIENT,
    payload: client,
  };
};

export const setClients = (clients) => {
  return {
    type: ActionTypes.SET_CLIENTS,
    payload: clients,
  };
};
