import profileReducer, { addPost } from "./profile-reducer";

it("new post should be added", () => {
    // 1.test data
    let state = {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 40 },
            { id: 2, message: "It's my first post", likesCount: 20 },
            { id: 3, message: "This is strange post", likesCount: 37 },
            { id: 4, message: "Whats up", likesCount: 6 },
            { id: 5, message: "Are you here?", likesCount: 0 },
            { id: 6, message: "Come on!", likesCount: 62 },
        ]
    };
    // 2.action
  let action = addPost("it-kamasutra.com");
  let newState = profileReducer(state, action);

//   3.expectation
  expect(newState.posts.length).toBe(7);
});