import { ADD_NUM, REM_NUM } from "./ActionType";

export const addNum = () => {
  return {
    type: ADD_NUM,
  };
};

export const remNum = () => {
  return {
    type: REM_NUM,
  };
};
