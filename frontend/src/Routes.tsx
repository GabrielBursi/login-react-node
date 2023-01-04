import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Sobre from './pages/Sobre';


function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sobre' element={<Sobre />} />
        </Routes>
    );
}

export default RoutesApp;