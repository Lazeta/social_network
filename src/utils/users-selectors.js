import { createSelector } from "reselect";

export const getUsers = (state) => state.usersPage.users;

export const getPageSize = (state) => state.usersPage.pageSize;
export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) => state.usersPage.followingInProgress;

export const getFilteredUsers = createSelector(
  [getUsers, getCurrentPage, getPageSize],
  (users, currentPage, pageSize) => {
      const start = (currentPage - 1) * pageSize;
      return users.slice(start, start + pageSize);
  }
);

export const getProfile = (state) => state.profilePage;
export const getUserId = (state) => state.auth.userId;
export const getProfileStatus = (state) => state.profilePage.status;
export const getLoading = (state) => state.profilePage.loading;
export const getError = (state) => state.profilePage.error;
export const getIsAuth = (state) => state.auth.isAuth;