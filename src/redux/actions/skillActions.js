import { ActionTypes } from "../types/action-types";

export const setSkills = (skills) => {
  return {
    type: ActionTypes.SET_SKILLS,
    payload: skills,
  };
};

export const setSkillsChildren = (children) => {
  return {
    type: ActionTypes.SET_SKILLS_CHILDREN,
    payload: children,
  };
};
