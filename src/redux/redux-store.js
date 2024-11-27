import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer,
})

let store = createStore(reducers);

export default store;
