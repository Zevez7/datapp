import Data from "../projectData.json";
import { ADD_PROJECT, DELETE_PROJECT } from "./../Actions/Types";

const initialState = Data;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PROJECT:
      return [...state, ...payload];
    case DELETE_PROJECT:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};
