import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
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
                        <Route path="/login/" element={<LoginPage/>}/>
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