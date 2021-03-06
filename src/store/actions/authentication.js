import axios from "axios";
import jwt_decode from "jwt-decode";
import * as actionTypes from "./actionTypes";
import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return dispatch => {
    // Get token
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);
      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header although its not needed here because this is not a new login this
        // get the token from the local storage and checks for it's expiry date
        setAuthToken(token);
        //to store the user locally in the reducer
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (userData, history) => {
  return async dispatch => {
    try {
      let response = await instance.post("user/login/", userData);
      let user = response.data;
      setAuthToken(user.token);
      let decodedUser = jwt_decode(user.token);
      dispatch(setCurrentUser(decodedUser));
      history.push("/home");
    } catch (error) {
      console.log("error", error);
      dispatch(setErrors(error.response.data));
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      let response = await instance.post("user/register/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      history.push("/home");
    } catch (error) {
      console.error(error.response);
      dispatch(setErrors(error.response.data));
    }
  };
};

export const logout = history => {
  setAuthToken();
  history.push("/login");
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
