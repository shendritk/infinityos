import { combineReducers } from "redux";
import foldersReducer from "./foldersReducer";
import { reducer as stackReducer } from "../stack";
import musicReducer from "./musicReducer";
import usersReducer from "./usersReducer";

const allReducers = combineReducers({
  folders: foldersReducer,
  history: stackReducer,
  currentSong: musicReducer,
  users: usersReducer,
});

export default allReducers;
