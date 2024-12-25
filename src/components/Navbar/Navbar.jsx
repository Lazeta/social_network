import s from './Navbar.module.css';
import React from 'react';

const Navbar = ({navigateItems}) => {
    return (
        <nav className={s.nav}>
            {navigateItems}
        </nav>
    )
}

export default Navbar;