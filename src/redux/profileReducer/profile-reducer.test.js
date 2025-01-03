import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 40 },
    { id: 2, message: "It's my first post", likesCount: 20 },
    { id: 3, message: "This is strange post", likesCount: 37 },
    { id: 4, message: "Whats up", likesCount: 6 },
    { id: 5, message: "Are you here?", likesCount: 0 },
    { id: 6, message: "Come on!", likesCount: 62 },
  ],
};

it("new post should be added", () => {
  // 1.test data
  let action = addPost("it-kamasutra.com");

  // 2.action
  let newState = profileReducer(state, action);

  //   3.expectation
  expect(newState.posts.length).toBe(7);
});

it("message of new post should be correct", () => {
  // 1.test data
  let action = addPost("it-kamasutra.com");
  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts[6].message).toBe("it-kamasutra.com");
});

it("after deleting length of messages should be decrement", () => {
  // 1.test data
  let action = deletePost(1);
  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(5);
});

it("after deleting length should`t be decrement if id is incorrect", () => {
  // 1.test data
  let action = deletePost(1000);
  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(6);
});