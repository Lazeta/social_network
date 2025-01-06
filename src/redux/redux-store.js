import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./../redux/profileReducer/profile-reducer";
import dialogsReducer from "./../redux/dialogsReducer/dialogs-reducer";
import sidebarReducer from "./../redux/sidebarReducer/sidebar-reducer";
import usersReducer from "./../redux/usersReducer/users-reducer";
import authReducer from "./../redux/authReducer/auth-reducer";
import { thunk } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./../redux/appReducer/app-reducer";
import newsReducer from "./../redux/newsReducer/news-reducer";
import musicReducer from "./../redux/musicReducer/music-reducer";
import settingsReducer from "./../redux/settingsReducer/settings-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    settingsPage: settingsReducer,
    sidebar: sidebarReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
window.store = store;

export default store;