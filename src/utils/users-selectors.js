import { createSelector } from "reselect";
// auth
export const getIsAuth = (state) => state.auth.isAuth;
export const getLoading = (state) => state.profilePage.loading;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getError = (state) => state.profilePage.error;

// profile
export const getProfile = (state) => state.profilePage;
export const getProfileStatus = (state) => state.profilePage.status;

// users
export const getUsers = (state) => state.usersPage.users;
export const getUserId = (state) => state.auth.userId;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getFollowingInProgress = (state) =>
  state.usersPage.followingInProgress;
export const getFilteredUsers = createSelector(
  [getUsers, getCurrentPage, getPageSize],
  (users, currentPage, pageSize) => {
    const start = (currentPage - 1) * pageSize;
    return users.slice(start, start + pageSize);
  }
);

// page users
export const getPageSize = (state) => state.usersPage.pageSize;
export const getCurrentPage = (state) => state.usersPage.currentPage;

// dialogs
export const getDialogs = (state) => state.dialogsPage.dialogs;
export const getMessages = (state) => state.dialogsPage.messages;