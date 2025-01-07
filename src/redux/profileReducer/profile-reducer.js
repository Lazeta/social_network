import { profileAPI } from "../../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

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

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PROFILE_SUCCESS:
      return { ...state, loading: false, };
    case FETCH_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // 1.6 
    case ADD_POST:
      if(!action.newPostText.trim()) return state
      const newPostId = state.posts.length > 0 ? Math.max(...state.posts.map((p) => p.id)) + 1 : 1;
      const newPost = {
        id: newPostId,
        message: action.newPostText,
        likesCount: 0, // добавить после количество лайков из API
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.payload };

    case SET_STATUS:
      return { ...state, status: action.payload };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    default:
      return state;
  }
};

// 1.4 // 1.7
export const addPost = (newPostText) => {
  console.log("Adding post:", newPostText);
  return { type: ADD_POST, newPostText }}
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_PROFILE_REQUEST });
  
  try {
    const response = await profileAPI.getProfile(userId);
    // Убедимся, что ответ содержит необходимые данные
    dispatch(setUserProfile(response)); // Предположим, что setUserProfile правильно обрабатывает данные

    const statusResponse = await profileAPI.getStatus(userId);
    dispatch(setStatus(statusResponse)); // Предположим, что setStatus правильно обрабатывает статус

    dispatch({ type: FETCH_PROFILE_SUCCESS }); // Вызываем финально только если всё прошло успешно
  } catch (error) {
    dispatch({ type: FETCH_PROFILE_FAILURE, payload: error.message });
  }
};

export const updateStatus = (newStatus) => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(newStatus);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(newStatus));
    }
  } catch (error) {
    console.error("Failed to update status:", error);
  }
};

export default profileReducer;

// 1.4 В addPost создается экшен ADD_POST который включает текст нового поста.
//     этот экшен передается в редьюсер с помощью диспатча который вызывает функцию
// 1.6 В редьюсере добавляется новое поле newPostText.
//     это поле хранит текст нового поста который вводит пользователь
//     в поле ввода в компоненте AddNewPostForm
// 1.7 В редьюсер profileReducer, в зависимости от типа действия, проверяется, есть ли текст поста
//     и если есть, то он добавляется в массив posts, а если нет, то ничего не происходит