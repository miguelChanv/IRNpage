import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Header from '../sections/Header.jsx';

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