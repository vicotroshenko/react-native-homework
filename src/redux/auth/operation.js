import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-native";
import {
  getLoginError,
  getLoginProgress,
  getLoginSuccess,
  getRigistrError,
  getRigistrProgress,
  getRigistrSuccess,
} from "./authSlice";
import { FIRBASE_AUTH } from "../../../config";

const auth = FIRBASE_AUTH;

export const loginDB = (email, password) => async (dispatch) => {
  dispatch(getLoginProgress());
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    const userName = user.displayName;
    dispatch(getLoginSuccess({ login: userName, email }));
  } catch (error) {
    Alert.alert("Sign in failed:" + error.message);
    dispatch(getLoginError());
  }
};

export const registerDB = (email, password, login) => async (dispatch) => {
  dispatch(getRigistrProgress());
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    if (user) {
    await updateProfile(user, { displayName: login });
    console.log("newUser");
    }
    dispatch(getRigistrSuccess({ login, email }));
  } catch (error) {
    Alert.alert("Sign in failed:" + error.message);
    dispatch(getRigistrError());
  }
};
