import {Routes, Route, Link} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import FooterApp from './components/footer/FooterApp'

import './App.css';

function App() {
    return (
        <>
            <header className='app-header'>
                <Navbar></Navbar>
            </header>
            <main className='app-main'>

            </main>
            <footer className='app-footer'>
                <FooterApp></FooterApp>
            </footer>
        </>
    );
}

export default App;
