import { AUTH_LOGOUT, AUTH_LOGIN, AUTH_ERROR_MSG } from "./../Actions/Types";

const initialState = {
  user: null,
  errorMsg: null,
  authLoadingCompleted: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        authLoadingCompleted: payload.authLoadingCompleted,
        user: payload.user
      };
    case AUTH_LOGOUT:
      return { ...state, user: null };
    case AUTH_ERROR_MSG:
      return { ...state, errorMsg: payload };
    default:
      return state;
  }
};
