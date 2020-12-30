import { CREATE_USER, CREATE_USER_PASSWORD } from "../actions/actionTypes";

const defaultValue = [
  {
    name: "Guest",
    password: "",
  },
];

const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, { name: action.payload.name, password: "" }];

    case CREATE_USER_PASSWORD: {
      const newState = state.filter(
        (user) => user.name !== action.payload.username
      );

      return [
        ...newState,
        { name: action.payload.username, password: action.payload.password },
      ];
    }

    default:
      return state;
  }
};

export default reducer;
