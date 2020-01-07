import {
  ADD_PROJECT,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  DELETE_PROJECT,
  AUTH_ERROR_MSG,
  GET_PROJECTS,
  EDIT_PROJECT
} from "./Types";
import firebase from "./../Firebase/firebase";

export const getProjects = () => async (dispatch, getState) => {
  let data = [];
  await firebase
    .firestore()
    .collection("projects")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => data.push({ ...doc.data(), id: doc.id }));
    });

  console.log("getProjects Called");
  dispatch({
    type: GET_PROJECTS,
    payload: data
  });
};

export const deleteProject = projectId => async (dispatch, getState) => {
  await firebase
    .firestore()
    .collection("projects")
    .doc(projectId)
    .delete()
    .then(() => {
      console.log("Deleted project from database");
    })
    .catch(error => {
      console.error("Error deleting project document: ", error);
    });

  await dispatch(getProjects());
  // call getProject to update redux store state with the deleted document removed

  dispatch({
    type: DELETE_PROJECT
    // payload: projectId
  });
};

// this will get a snapshot of the firestore whole project document
// dispatch  GET_PROJECTS will update the data into the redux store state
// call this function whenever you want an update redux store with latest firestore documents

export const addProject = projectFormValue => async (dispatch, getState) => {
  await firebase
    .firestore()
    .collection("projects")
    .add(projectFormValue)
    .then(() => console.log("project added"))
    .catch(error => console.log("error.message", error.message));
  await dispatch(getProjects());
  dispatch({
    type: ADD_PROJECT
  });
};

export const editProject = projectFormValue => async (dispatch, getState) => {
  await firebase
    .firestore()
    .collection("projects")
    .doc(projectFormValue.id)
    .update({
      name: projectFormValue.name,
      link: projectFormValue.link,
      github: projectFormValue.github,
      date: projectFormValue.date,
      stack: projectFormValue.stack,
      color: projectFormValue.color,
      info: projectFormValue.info
    })
    .then(() => console.log("update successful"))
    .catch(error => console.log("error.message", error.message));
  await dispatch(getProjects());

  dispatch({
    type: EDIT_PROJECT
  });
};

// this listener will be called automatically when a user is login or logout
// store this listener into main app.js so it will be called whenever website
// is loaded
export const checkAuthState = () => (dispatch, getState) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("onauthstatechanged user logged in");
      dispatch({
        type: AUTH_LOGIN,
        payload: { user: user, authLoadingCompleted: true }
      });
      dispatch({ type: AUTH_ERROR_MSG, payload: null });
    } else {
      console.log("no user found");
      dispatch({
        type: AUTH_LOGIN,
        payload: { user: null, authLoadingCompleted: true }
      });
    }
  });
};

// firebase userlogin located in login.js
// onced logged in the checkAuthState should already be called
// and will be listening if user is logged in
export const userLogin = userCredentials => async (dispatch, getState) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
    .then(console.log("user logged in successful"))
    .catch(error => {
      console.log("errorMsg", error.message);
      dispatch({ type: AUTH_ERROR_MSG, payload: error.message });
    });
};

// logged out will clear out state.auth.user while checkAuthState listener will CL "no user found"
export const userLogout = () => async (dispatch, getState) => {
  await firebase
    .auth()
    .signOut()
    .then(() => console.log("Signed Out Successful"))
    .catch(error => console.log(error));

  dispatch({
    type: AUTH_LOGOUT
  });
};
