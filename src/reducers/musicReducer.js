import { PLAY_SONG } from "../actions/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
