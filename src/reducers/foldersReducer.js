import {
  FM_ADD_FOLDER,
  FM_REMOVE_FOLDER,
  FM_EDIT_FOLDER,
  FM_ADD_FILE,
  FM_REMOVE_FILE,
  FM_EDIT_FILE,
  FM_ADD_FOLDER_PART_TWO,
  FM_REMOVE_FOLDER_PART_TWO,
} from "../actions/actionTypes";
import { defaultFolders } from "./default";

const reducer = (state = defaultFolders, action) => {
  switch (action.type) {
    case FM_ADD_FILE:
      const { name, folder, id } = action.payload;
      return {
        ...state,
        [folder]: {
          ...state[folder],
          files: [...state[folder].files, name],
        },
      };

    case FM_REMOVE_FILE:
      return {
        ...state,
        [action.payload.folder]: {
          ...state[action.payload.folder],
          files: state[action.payload.folder].files.filter(
            (file) => file !== action.payload.name
          ),
        },
      };

    // state[action.payload.folder].files.filter(
    //   (file) => file.name !== [action.payload.name]
    // );

    case FM_ADD_FOLDER:
      return {
        ...state,
        [action.payload.folder]: {
          ...state[action.payload.folder],
          folders: [
            ...state[action.payload.folder].folders,
            action.payload.name,
          ],
        },
      };

    case FM_REMOVE_FOLDER:
      const temp = state;
      delete temp[action.payload.name];
      // Part 2
      for (const key in temp) {
        temp[key].folders = temp[key].folders.filter(
          (folder) => folder !== action.payload.name
        );
      }
      return temp;

    case FM_ADD_FOLDER_PART_TWO:
      return { ...state, [action.payload.name]: { folders: [], files: [] } };

    case FM_REMOVE_FOLDER_PART_TWO:
      const t = state;
      for (const key in t) {
        t[key].folders = t[key].folders.filter(
          (folder) => folder !== action.payload.name
        );
      }
      return t;

    default:
      return state;
  }
};

export default reducer;
