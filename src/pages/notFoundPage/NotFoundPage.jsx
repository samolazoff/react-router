import React from 'react';
import { Link } from 'react-router-dom';
import './notFoundPage.css';
const NotFoundPage = () => {
    return (
        <section className='cont'>
            <h2 className="title-block">Not Found</h2>
            <p>This page not found! Go to <Link to='/' className='txt__go-home'> main page</Link></p>
        </section>
    );
};

export default NotFoundPage;