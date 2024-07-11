import { ActionTypes } from "../types/action-types";

export const setWorkers = (workers) => {
    return{
        type: ActionTypes.SET_WORKERS,
        payload: workers,
    };
};
