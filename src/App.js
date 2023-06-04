import {Routes, Route} from 'react-router-dom';

import Layout from './components/layout/Layout';
import AboutPage from './pages/aboutPage/AboutPage';
import BlogPage from './pages/blogPage/BlogPage';
import SinglePage from './pages/singlePage/SinglePage';
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route index element={<HomePage></HomePage>}></Route>
                    <Route path='posts' element={<BlogPage></BlogPage>}></Route>
                    <Route path='posts/:id' element={<SinglePage></SinglePage>}></Route>
                    <Route path='about' element={<AboutPage></AboutPage>}></Route>
                    <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
