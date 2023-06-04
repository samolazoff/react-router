import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import FooterApp from '../footer/FooterApp';
const Layout = () => {
    return (
        <>
            <header className='app-header'>
                <Navbar></Navbar>
            </header>
            <main className='app-main'>
                <Outlet></Outlet>
            </main>
            <footer className='app-footer'>
                <FooterApp></FooterApp>
            </footer>
        </>
    );
};
export default Layout;