import {
  addDoc,
  collection,
  arrayUnion,
  doc,
  updateDoc,
  arrayRemove,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../config";
import {
  addPostProgress,
  addPostSuccess,
  addPostError,
  deletePost,
  createDataProgress,
  createDataSuccess,
  createDataError,
  loadDataProgress,
  loadDataSuccess,
  loadDataError,
  addCommentProgress,
  addCommentSuccess,
  addCommentError,
} from "./storageSlice";

export const writeDataToFirestore = (login, email) => async (dispatch) => {
  try {
    dispatch(createDataProgress());

    const docRef = await addDoc(collection(db, login), {
      login: login,
      email: email,
      posts: [],
    });
    dispatch(createDataSuccess(docRef.id));
  } catch (e) {
    dispatch(createDataError());
  }
};

export const getDataFromFirestore = (login) => async (dispatch) => {
  dispatch(loadDataProgress());
  try {
    const snapshot = await getDocs(collection(db, login));
    snapshot.forEach((doc) => {
      console.log(doc.id);
      dispatch(loadDataSuccess({ posts: doc.data().posts, loadId: doc.id }));
    });
  } catch (error) {
    dispatch(loadDataError());
    throw error;
  }
};

export const updateDataInFirestore =
  (collectionName, docId, newPost) => async (dispatch) => {
    try {
      dispatch(addPostProgress());
      const ref = doc(db, collectionName, docId);

      await updateDoc(ref, {
        posts: arrayUnion(newPost),
      });
      dispatch(addPostSuccess(newPost));
    } catch (error) {
      dispatch(addPostError());
      console.log(error);
    }
  };

  export const addComment =
  (collectionName, docId, newPosts) => async (dispatch) => {
    try {
      dispatch(addCommentProgress())
      const ref = doc(db, collectionName, docId);
      await updateDoc(ref, {
        posts: newPosts,
      });
      dispatch(addCommentSuccess(newPosts))
    } catch (error) {
      dispatch(addCommentError())
      console.log(error);
    }
  };

export const deleteDataInFirestore =
  (collectionName, docId, deletedItem) => async (dispatch) => {
    try {
      const ref = doc(db, collectionName, docId);
      await updateDoc(ref, {
        posts: arrayRemove(deletedItem),
      });
      dispatch(deletePost(deletedItem.id));
    } catch (error) {
      console.log(error);
    }
  };
