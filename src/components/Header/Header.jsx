import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png" alt="code something"/>
            
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : 'Guest User'}
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>)
}

export default Header;