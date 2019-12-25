import Data from "../projectData.json";

const initialState = Data;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

