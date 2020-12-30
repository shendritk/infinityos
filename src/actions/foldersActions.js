import {
  FM_ADD_FOLDER,
  FM_REMOVE_FOLDER,
  FM_EDIT_FOLDER,
  FM_ADD_FOLDER_PART_TWO,
  FM_REMOVE_FOLDER_PART_TWO
} from "./actionTypes";

export const addFolder = (name, folder) => {
  return {
    type: FM_ADD_FOLDER,
    payload: {
      name,
      folder,
    },
  };
};

export const removeFolder = (name) => {
  return {
    type: FM_REMOVE_FOLDER,
    payload: {
      name,
    },
  };
};

export const removeFolderPartTwo = name => {
  return {
    type: FM_REMOVE_FOLDER_PART_TWO,
    payload: {
      name,
    }
  }
}

export const editFolder = (name, newName) => {
  return {
    type: FM_EDIT_FOLDER,
    payload: {
      name,
      newName,
    },
  };
};

export const addFolderPartTwo = (name) => {
  return {
    type: FM_ADD_FOLDER_PART_TWO,
    payload: {
      name,
    },
  };
};
