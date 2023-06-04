import React from 'react';
import {NavLink} from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar cont f-r'>
            <h1 className='logo'><a href="/"> Router</a></h1>
            <ul className='navbar-items f-r'>
                <li className='item'><NavLink href="/">Home</NavLink></li>
                <li className='item'><NavLink href="/posts">Posts</NavLink></li>
                <li className='item'><NavLink href="/about">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;