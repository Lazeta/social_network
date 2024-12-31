import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializedApp = () => (dispatch) => {
  // console.log("Dispatching getAuthUserData...");
  return dispatch(getAuthUserData()).then(() => {
    // console.log("Auth data retrieved, dispatching initializedSuccess...");
    dispatch(initializedSuccess());
  });
};

export default appReducer;
