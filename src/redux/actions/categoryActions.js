import { ActionTypes } from "../types/action-types";

export const setCategories = (categories) => {
    return{
        type: ActionTypes.SET_CATEGORIES,
        payload: categories,
    };
};
