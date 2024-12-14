const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 40},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "This is strange post", likesCount: 37},
        {id: 4, message: "Whats up", likesCount: 6},
        {id: 5, message: "Are you here?", likesCount: 0},
        {id: 6, message: "Come on!", likesCount: 62},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPostId = state.posts.length > 0 ?
            Math.max(...state.posts.map(p =>
                p.id)) + 1 : 1;
            let newPost = {
                id: newPostId,
                message: state.newPostText,
                likesCount: 0,
            }
            
            return {
                ...state,
                posts: [...state.posts, newPost], 
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile }
        }

        default: return state;
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) =>
({ type: UPDATE_NEW_POST_TEXT, newText: text, })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;