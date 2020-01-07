// import Data from "../projectData.json";
import { GET_PROJECTS } from "./../Actions/Types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECTS:
      console.log("getproject payload", payload);
      return payload;
    default:
      return state;
  }
};
