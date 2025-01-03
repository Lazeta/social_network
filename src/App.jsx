import "./App.css";
import React, { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializedApp } from "./redux/app-reducer";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";
import NotFound from "./utils/NotFound";
const Login = lazy(() => import("./components/Login/Login"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const MusicContainer = lazy(() => import("./components/Music/MusicContainer"));
const NewsContainer = lazy(() => import("./components/News/NewsContainer"));
const SettingsContainer = lazy(() => import("./components/Settings/SettingsContainer"));

const createRoute = (path, Component) => (
  <Route path={path} element={<Component />} />
);

const App = () => {
  const dispatch = useDispatch();
  const initialized = useSelector(state => state.app.initialized); // используем хук useSelector для доступа к состоянию Redux

  useEffect(() => {
    if (!initialized) {
      dispatch(initializedApp()).catch((error) => {
        console.error("Ошибка инициализации:", error);
        // Можно установить состояние ошибки для отображения уведомления пользователю
      });
    }
  }, [dispatch, initialized]);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <React.Suspense fallback={<Preloader />}>
          <Routes>
            {createRoute("/login", Login)}
            {createRoute("/profile/:userId?", ProfileContainer)}
            {createRoute("/dialogs", DialogsContainer)}
            {createRoute("/users", UsersContainer)}
            {createRoute("/music", MusicContainer)}
            {createRoute("/news", NewsContainer)}
            {createRoute("/settings", SettingsContainer)}
            {createRoute("*", NotFound)}
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;