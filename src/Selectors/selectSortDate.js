import { createSelector } from "reselect";

const sortDate = state => state.home;

const getSortedByDate = state => {
  console.log("getSortedByDate Call");
  return [...state].sort((b, a) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return aDate - bDate;
  });
};
export default createSelector(sortDate, getSortedByDate);
