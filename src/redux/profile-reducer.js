import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "SocialNetwork/profile-reducer/ADD_POST";
const SET_USER_PROFILE = "SocialNetwork/profile-reducer/SET_USER_PROFILE";
const SET_STATUS = "SocialNetwork/profile-reducer/SET_STATUS";
const DELETE_POST = "SocialNetwork/profile-reducer/DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 40 },
    { id: 2, message: "It's my first post", likesCount: 20 },
    { id: 3, message: "This is strange post", likesCount: 37 },
    { id: 4, message: "Whats up", likesCount: 6 },
    { id: 5, message: "Are you here?", likesCount: 0 },
    { id: 6, message: "Come on!", likesCount: 62 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPostId =
        state.posts.length > 0
          ? Math.max(...state.posts.map((p) => p.id)) + 1
          : 1;
      let newPost = {
        id: newPostId,
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile,});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
