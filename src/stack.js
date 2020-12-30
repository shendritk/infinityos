const ADD_TO_STACK = "ADD_TO_STACK";
const REMOVE_FROM_STACK = "REMOVE_FROM_STACK";

export const addToStack = (name, target) => {
  return {
    type: ADD_TO_STACK,
    payload: {
      name,
      target,
    },
  };
};

export const removeFromStack = (target) => {
  return {
    type: REMOVE_FROM_STACK,
    payload: {
      target,
    },
  };
};

const initialState = {
  back: ["Home"],
  forward: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_STACK:
      return {
        ...state,
        [action.payload.target]: [
          action.payload.name,
          ...state[action.payload.target],
        ],
      };
    case REMOVE_FROM_STACK:
      return {
        ...state,
        [action.payload.target]: state[action.payload.target].slice(
          1,
          state[action.payload.target].length
        ),
      };
    default:
      return state;
  }
};
