import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Header from '../sections/Header.jsx';
import Contact from '../components/Contact/Contact.jsx';

const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas