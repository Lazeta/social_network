import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 40},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "This is strange post", likesCount: 37},
        {id: 4, message: "Whats up", likesCount: 6},
        {id: 5, message: "Are you here?", likesCount: 0},
        {id: 6, message: "Come on!", likesCount: 62},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPostId = state.posts.length > 0 ?
            Math.max(...state.posts.map(p =>
                p.id)) + 1 : 1;
            let newPost = {
                id: newPostId,
                message: action.newPostText,
                likesCount: 0,
            }
            
            return {
                ...state,
                posts: [...state.posts, newPost], 
                newPostText: ""
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile }
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }

        default: return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0){
            dispatch(setStatus(data))
        }
    })
}

export default profileReducer;