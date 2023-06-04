import React from 'react';
import {NavLink} from 'react-router-dom';

import './navbar.css';

const setActive = ({isActive}) => isActive ? 'active-item': '';
const Navbar = () => {
    return (
        <nav className='navbar cont f-r'>
            <h1 className='logo'><a href="/"> Router</a></h1>
            <ul className='navbar-items f-r'>
                <li className='item'><NavLink to="/" className={setActive}>Home</NavLink></li>
                <li className='item'><NavLink to="/posts" className={setActive}>Posts</NavLink></li>
                <li className='item'><NavLink to="/about" className={setActive}>About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;