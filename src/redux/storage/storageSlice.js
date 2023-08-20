import { createSlice } from "@reduxjs/toolkit";

const storageInitialState = {
  posts: [],
  loadDataError: false,
  loadId: "",
  isLoading: false,
};

const storageSlice = createSlice({
  name: "storage",
  initialState: storageInitialState,
  reducers: {
    addPostProgress(state, _action) {
      state.isLoading = true;
    },
    addPostSuccess: {
      reducer(state, action) {
        return {
          ...state,
          posts: [...state.posts, action.payload],
          isLoading: false,
          loadDataErro: false,
        };
      },
      prepare(newPost) {
        return {
          payload: {
            id: newPost.id,
            photo: newPost.photo,
            name: newPost.name,
            adress: newPost.adress,
            location: newPost.location,
            comments: newPost.comments
          },
        };
      },
    },
    addPostError(state, _action) {
      state.loadDataError = true;
    },
    deletePost(state, action) {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    },
    createDataProgress(state, _action) {
      state.isLoading = true;
    },
    createDataSuccess(state, action) {
      state.loadId = action.payload;
      state.isLoading = false;
      state.loadDataError = false;
    },
    createDataError(state, _action) {
      state.loadDataError = true;
    },
    loadDataProgress(state, _action) {
      state.isLoading = true;
    },
    loadDataSuccess(state, action) {
      state.posts = action.payload.posts;
      state.loadId = action.payload.loadId;
      state.isLoading = false;
      state.loadDataError = false;
    },
    loadDataError(state, _action) {
      state.loadDataError = true;
    },
    logOutStore(state, _action) {
      state.posts = [];
    },
    addCommentProgress(state, _action){
      state.isLoading = true;
    },
    addCommentSuccess(state, action){
      state.posts = action.payload;
      state.isLoading = false;
      state.loadDataError = false;
    },
    addCommentError(state, _action){
      state.loadDataError = true;
    }
  },
});

export const {
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
  logOutStore,
  addCommentProgress,
  addCommentSuccess,
  addCommentError
} = storageSlice.actions;

export const storageReducer = storageSlice.reducer;
