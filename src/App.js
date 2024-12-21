import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import Preloader from './components/common/Preloader/Preloader';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializedApp } from './redux/app-reducer';

const App = () => {
    const dispatch = useDispatch();
    const initialized = useSelector(state => state.app.initialized);

    useEffect(() => {
        dispatch(initializedApp());
    }, [dispatch]);

    if (!initialized) {
        return <Preloader/>
    } 

    return (
        <Router>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/" element={<DialogsContainer/>}/>
                        <Route path="/users/" element={<UsersContainer/>}/>
                        <Route path="/login/" element={<Login/>}/>
                        <Route path="/music/" element={<Music />}/>
                        <Route path="/news/" element={<News />}/>
                        <Route path="/settings/" element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;