import { ActionTypes } from "../types/action-types";

export const setWorker = (worker) => {
    return{
        type: ActionTypes.SET_WORKER,
        payload: worker,
    };
};
