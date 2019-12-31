import { AUTH_LOGOUT, AUTH_LOGIN } from "./../Actions/Types";

const initialState = {
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return { ...state, user: payload };
    case AUTH_LOGOUT:
      return { ...state, user: "" };

    default:
      return state;
  }
};
