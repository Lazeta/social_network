import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializedApp } from "./redux/app-reducer";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";
const Login = lazy(() => import("./components/Login/Login"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const MusicContainer = lazy(() => import("./components/Music/MusicContainer"));
const NewsContainer = lazy(() => import("./components/News/NewsContainer"));
const SettingsContainer = lazy(() => import("./components/Settings/SettingsContainer"));

const App = () => {
  const dispatch = useDispatch();
  const initialized = useSelector((state) => state.app.initialized);

  // 1) added processing error
  useEffect(() => {
    if(!initialized) {
      dispatch(initializedApp());
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
        <Routes>
          <Route path="/login" element={
            <Suspense fallback={<Preloader/>}>
              <Login />
            </Suspense>
          } />
          <Route path="/profile/:userId?" element={
            <Suspense fallback={<Preloader/>}>
              <ProfileContainer/>
            </Suspense>
          }/> 
          {/* <Route path="/dialogs" element={
            <Suspense fallback={<Preloader/>}>
              <DialogsContainer/>
            </Suspense>
          } />
          <Route path="/users" element={
            <Suspense fallback={<Preloader/>}>
              <UsersContainer />
            </Suspense>
          } />
          <Route path="/music" element={
            <Suspense fallback={<Preloader/>}>
              <MusicContainer />
            </Suspense>
          } />
          <Route path="/news" element={
            <Suspense fallback={<Preloader/>}>
              <NewsContainer />
            </Suspense>
          } />
          <Route path="/settings" element={
            <Suspense fallback={<Preloader/>}>
              <SettingsContainer />
            </Suspense>
          } /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
