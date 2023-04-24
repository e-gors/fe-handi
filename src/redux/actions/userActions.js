import { ActionTypes } from "../types/action-types";

export const setUser = (user) => {
    return{
        type: ActionTypes.SET_USER,
        payload: user,
    };
};
