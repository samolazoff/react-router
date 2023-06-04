import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './blogPage.css';

const BlogPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(json => setPosts(json))
    }, []);
    
    return (
        <section className='cont block-blog'>
            <h2 className="title-block">Posts</h2>
            <ul>
                {
                    posts.map(post => (
                        <li><Link key={post.id} to={`/posts/${post.id}`}>{post.title}</Link></li>
                    ))
                }
            </ul>
            
        </section>
    );
};

export default BlogPage;