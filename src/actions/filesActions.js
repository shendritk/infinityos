import { FM_ADD_FILE, FM_REMOVE_FILE, FM_EDIT_FILE } from "./actionTypes";

export const addFile = (name, folder) => {
  return {
    type: FM_ADD_FILE,
    payload: {
      name,
      folder,
    },
  };
};

export const removeFile = (name, folder) => {
  return {
    type: FM_REMOVE_FILE,
    payload: {
      name,
      folder,
    },
  };
};

export const editFile = (id, name) => {
  return {
    type: FM_EDIT_FILE,
    payload: {
      id,
      name,
    },
  };
};
