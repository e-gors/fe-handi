import { ActionTypes } from "../types/action-types";

export const setLocations = (locations) => {
  return {
    type: ActionTypes.SET_LOCATIONS,
    payload: locations,
  };
};
