import { ADD_NUM, REM_NUM } from "./ActionType";

const initialState = {
  number: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return { ...state, number: state.number + 1 };
    case REM_NUM:
      return { ...state, number: state.number - 1 };

    default:
      return state;
  }
};
