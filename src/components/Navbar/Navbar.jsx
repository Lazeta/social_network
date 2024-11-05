import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let navigatorData = [
        {id: 0, navigate: '/profile', title: 'Profile'},
        {id: 0, navigate: '/dialogs', title: 'Messages'},
        {id: 0, navigate: '/news', title: 'News'},
        {id: 0, navigate: '/music', title: 'Music'},
        {id: 0, navigate: '/settings', title: 'Settings'},
    ]

    let navigateItems = navigatorData.map(item => <div className={s.item} key={item.id}>
        <NavLink
            to={item.navigate}
            className={({isActive}) => isActive ? s.active : ""}>
            {item.title}
        </NavLink>
    </div>)

    return (
        <nav className={s.nav}>
            { navigateItems }
        </nav>
    )
}

export default Navbar;