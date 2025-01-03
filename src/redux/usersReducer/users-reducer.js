import { usersAPI } from "../../api/api";
import { updateObjectToArray } from "../../utils/object-helpers";

const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE: {
      return {
        ...state,
        users: updateObjectToArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }
    case UNSUBSCRIBE: {
      return {
        ...state,
        users: updateObjectToArray(state.users, action.userId, "id", {
          followed: false,
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
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  try {
    const response = await usersAPI.getUsers(page, pageSize);
    console.log('Response from getUsers:', response);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const subscribeUnsubscribeFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const subscribe = (userId) => async (dispatch) => {
  subscribeUnsubscribeFlow(dispatch, userId, usersAPI.postUser, subscribeSuccess);
};

export const unsubscribe = (userId) => async (dispatch) => {
  subscribeUnsubscribeFlow(dispatch, userId, usersAPI.deleteUser, unsubscribeSuccess);
};

export default usersReducer;
