import { ActionTypes } from "../types/action-types";

export const setSkills = (skills) => {
    return{
        type: ActionTypes.SET_SKILLS,
        payload: skills,
    };
};
