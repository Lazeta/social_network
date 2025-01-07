import profileReducer, { addPost, deletePost } from "./profile-reducer";

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

jest.mock("../../api/api", () => ({
  profileAPI: {
      getProfile: jest.fn(), // spies on the getProfile method
      getStatus: jest.fn(), // spies on the getStatus method
      updateStatus: jest.fn(), // spies on the updateStatus method
  },
}));


it("new post should be added", () => {
  let action = addPost("it-kamasutra.com");
  let newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(7);
});

it("message of new post should be correct", () => {
  let action = addPost("it-kamasutra.com");
  let newState = profileReducer(initialState, action);
  expect(newState.posts[6].message).toBe("it-kamasutra.com");
});

it("after deleting length of messages should be decremented", () => {
  let action = deletePost(1);
  let newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(5);
});

it("after deleting length should not be decremented if id is incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(6);
});