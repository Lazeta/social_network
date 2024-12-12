const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";

let initialState = {
  users: [ ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,

};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          } return u
        }),
      };
    }
    case UNSUBSCRIBE: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          } return u
        }),
      };
    }
    case SET_USERS: {
      return {...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_USERS_TOTAL_COUNT: {
      return {...state, totalUsersCount: action.totalCount}
    }

    default:
      return state;
  }
};

export const subscribeAC = (userId) => ({ type: SUBSCRIBE, userId });
export const unsubscribeAC = (userId) => ({ type: UNSUBSCRIBE, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCountAC = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount });

export default usersReducer;
