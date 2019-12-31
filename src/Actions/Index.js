import { ADD_PROJECT, AUTH_LOGIN, AUTH_LOGOUT, DELETE_PROJECT } from "./Types";

export const addProject = project => ({
  type: ADD_PROJECT,
  payload: project
});

export const deleteProject = id => ({
  type: DELETE_PROJECT,
  payload: id
});

export const authLogin = user => ({
  type: AUTH_LOGIN,
  payload: user
});

export const authLogOut = () => ({
  type: AUTH_LOGOUT
});
