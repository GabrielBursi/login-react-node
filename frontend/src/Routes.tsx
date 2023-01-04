import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NovaConta from './pages/NovaConta';
import Sobre from './pages/Sobre';


function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/criar' element={<NovaConta />} />
        </Routes>
    );
}

export default RoutesApp;