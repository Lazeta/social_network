import { usersAPI } from "../api/api";

const SUBSCRIBE = "SocialNetwork/users-reducer/SUBSCRIBE";
const UNSUBSCRIBE = "SocialNetwork/users-reducer/UNSUBSCRIBE";
const SET_USERS = "SocialNetwork/users-reducer/SET_USERS";
const SET_CURRENT_PAGE = "SocialNetwork/users-reducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SocialNetwork/users-reducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "SocialNetwork/users-reducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "SocialNetwork/users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  fake: 10,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNSUBSCRIBE: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const subscribeSuccess = (userId) => ({ type: SUBSCRIBE, userId });
export const unsubscribeSuccess = (userId) => ({ type: UNSUBSCRIBE, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

// redux-thunk function
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  let response = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
};

export const subscribe = (userId) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await usersAPI.postUser(userId);
    if (response.resultCode === 0) {
      dispatch(subscribeSuccess(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
};

export const unsubscribe = (userId) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await usersAPI.deleteUser(userId)
    if (response.resultCode === 0) {
      dispatch(unsubscribeSuccess(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
};

export default usersReducer;
