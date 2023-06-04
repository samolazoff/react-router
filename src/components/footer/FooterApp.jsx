import React from 'react';
import { Link } from 'react-router-dom';
import './footerApp.css';
const FooterApp = () => {
    return (
        <div className='f-r cont box-footer'>
            <Link to="https://github.com/samolazoff/react-router">@samolazoff</Link>
        </div>
    );
};

export default FooterApp;