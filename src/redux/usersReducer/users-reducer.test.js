import usersReducer, {
  subscribeSuccess,
  unsubscribeSuccess,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingProgress
} from "./users-reducer";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

describe("usersReducer test", () => {
  it("should handle SUBSCRIBE", () => {
    const action = subscribeSuccess(1);
    const state = {
      ...initialState,
      users: [{ id: 1, followed: false }],
    };

    const newState = usersReducer(state, action);
    
    expect(newState.users[0].followed).toBe(true);
  });

  it("should handle UNSUBSCRIBE", () => {
    const action = unsubscribeSuccess(1);
    const state = {
      ...initialState,
      users: [{ id: 1, followed: true }],
    };

    const newState = usersReducer(state, action);
    
    expect(newState.users[0].followed).toBe(false);
  });

  it("should handle SET_USERS", () => {
    const action = setUsers([{ id: 1, followed: false }]);
    
    const newState = usersReducer(initialState, action);
    
    expect(newState.users.length).toBe(1);
    expect(newState.users[0].id).toBe(1);
  });

  it("should handle SET_CURRENT_PAGE", () => {
    const action = setCurrentPage(2);
    
    const newState = usersReducer(initialState, action);
    
    expect(newState.currentPage).toBe(2);
  });

  it("should handle SET_TOTAL_USERS_COUNT", () => {
    const action = setTotalUsersCount(50);
    
    const newState = usersReducer(initialState, action);
    
    expect(newState.totalUsersCount).toBe(50);
  });

  it("should handle TOGGLE_IS_FETCHING", () => {
    const action = toggleIsFetching(false);
    
    const newState = usersReducer(initialState, action);
    
    expect(newState.isFetching).toBe(false);
  });

  it("should handle TOGGLE_IS_FOLLOWING_PROGRESS when starting", () => {
    const action = toggleIsFollowingProgress(true, 1);
    
    const newState = usersReducer(initialState, action);
    
    expect(newState.followingInProgress).toContain(1);
  });

  it("should handle TOGGLE_IS_FOLLOWING_PROGRESS when stopping", () => {
    const action = toggleIsFollowingProgress(false, 1);
    const state = {
      ...initialState,
      followingInProgress: [1],
    };
    
    const newState = usersReducer(state, action);
    
    expect(newState.followingInProgress).not.toContain(1);
  });
});