import { CREATE_USER, CREATE_USER_PASSWORD } from "./actionTypes";

export const addUser = (name) => {
  return {
    type: CREATE_USER,
    payload: {
      name,
    },
  };
};

export const addUserPassword = (username, password) => {
  return {
    type: CREATE_USER_PASSWORD,
    payload: {
        username,
      password,
    },
  };
};
