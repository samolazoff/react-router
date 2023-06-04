import {useState, useEffect, React} from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {

    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => setPost(json))
    }, [id]);

    return (
        <section className='cont' id={post.id}>
            <h2 className='title-block'>{post.title}</h2>
            <p>{post.body}</p>
        </section>
    );
};

export default SinglePage;