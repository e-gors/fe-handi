import { ActionTypes } from "../types/action-types";

const initialState = {
  locations: [],
};

export const locationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LOCATIONS:
      return { ...state, locations: payload };
    default:
      return state;
  }
};
