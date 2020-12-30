import {
  FM_ADD_FILE,
  FM_REMOVE_FILE,
  FM_EDIT_FILE,
} from "../actions/actionTypes";
import { v4 as uuid } from "uuid";
import { defaultFolders } from "./default";

// const defaultFiles = [
//   { id: uuid(), name: ".gitignore", folder: "Home" },
//   { id: uuid(), name: "package.json", folder: "Home" },
//   { id: uuid(), name: "package-lock.json", folder: "Home" },
//   { id: uuid(), name: "README.md", folder: "Home" },
// ];

const reducer = (state = defaultFolders, action) => {
  switch (action.type) {
    // case FM_ADD_FILE: {
    //   state.map(
    //     (file) =>
    //       file.name === action.payload.name && console.log("name is the same")
    //   );
    //   return [
    //     ...state,
    //     {
    //       id: uuid(),
    //       name: action.payload.name,
    //       folder: action.payload.folder,
    //     },
    //   ];

    default:
      return state;
  }

  // case FM_REMOVE_FILE: {
  //   return state.filter((file) => file.id !== action.payload);
  // }

  // case FM_EDIT_FILE: {
  //   const elementIndex = state.files.findIndex(
  //     (file) => file.id === action.payload.id
  //   );
  //   let newArray = [...state.files];
  //   newArray[elementIndex] = {
  //     ...newArray[elementIndex],
  //     name: action.payload.name,
  //   };

  //   return {
  //     ...state,
  //     files: newArray,
  //   };
  // }

  // }
};

export default reducer;
