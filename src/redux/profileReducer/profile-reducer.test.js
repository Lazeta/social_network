import profileReducer, {
  addPost,
  deletePost,
  setUserProfile,
  setStatus,
  getUserProfile,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from './profile-reducer';

const initialState = {
  profile: null,
  status: '',
  loading: false,
  error: null,
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 40 },
    { id: 2, message: "It's my first post", likesCount: 20 },
    { id: 3, message: "This is strange post", likesCount: 37 },
    { id: 4, message: "Whats up", likesCount: 6 },
    { id: 5, message: "Are you here?", likesCount: 0 },
    { id: 6, message: "Come on!", likesCount: 62 },
  ],
  newPostText: "",
};

// jest.mock("../../api/api", () => ({
//   profileAPI: {
//       getProfile: jest.fn(), // spies on the getProfile method
//       getStatus: jest.fn(), // spies on the getStatus method
//       updateStatus: jest.fn(), // spies on the updateStatus method
//   },
// }));

describe('profileReducer test', () => {
  it('should handle ADD_POST with valid text', () => {
    const action = addPost('New Post');
    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(7);
    expect(newState.posts[6].message).toBe('New Post');
    expect(newState.posts[6].likesCount).toBe(0); // likesCount starts at 0
  });

  it('should not add post when text is empty', () => {
    const action = addPost('');
    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(6); // No new post should be added
  });

  it('should handle DELETE_POST', () => {
    const action = deletePost(1);
    const state = { ...initialState }; // Make a copy of the initial state
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
    expect(newState.posts.find(p => p.id === 1)).toBeUndefined(); // Post with id 1 should be removed
  });

  it('should handle SET_USER_PROFILE', () => {
    const action = setUserProfile({ name: 'John', age: 30 });
    const newState = profileReducer(initialState, action);

    expect(newState.profile).toEqual({ name: 'John', age: 30 });
  });

  it('should handle SET_STATUS', () => {
    const action = setStatus('New Status');
    const newState = profileReducer(initialState, action);

    expect(newState.status).toBe('New Status');
  });

  it('should handle FETCH_PROFILE_REQUEST', () => {
    const action = { type: FETCH_PROFILE_REQUEST };
    const newState = profileReducer(initialState, action);

    expect(newState.loading).toBe(true);
    expect(newState.error).toBe(null);
  });

  it('should handle FETCH_PROFILE_SUCCESS', () => {
    const action = { type: FETCH_PROFILE_SUCCESS };
    const initialStateWithLoading = { ...initialState, loading: true };
    const newState = profileReducer(initialStateWithLoading, action);

    expect(newState.loading).toBe(false);
  });

  it('should handle FETCH_PROFILE_FAILURE', () => {
    const action = { type: FETCH_PROFILE_FAILURE, payload: 'Error message' };
    const newState = profileReducer(initialState, action);

    expect(newState.loading).toBe(false);
    expect(newState.error).toBe('Error message');
  });
});