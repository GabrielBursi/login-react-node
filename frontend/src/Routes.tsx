import {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ValidateContext } from './context/ValidateContext';
import Conta from './pages/Conta';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NovaConta from './pages/NovaConta';
import Sobre from './pages/Sobre';
import { Children } from './types/Types';

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Private><HomePage /></Private>} />
            <Route path='/login' element={<Login />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/criar' element={<NovaConta />} />
            <Route path='/conta' element={<Private><Conta /></Private>} />
        </Routes>
    );
}

function Private({ children }: Children) {

    const { validate } = useContext(ValidateContext);

    if (!validate) return <Navigate to='/login' />

    return children
}


export default RoutesApp;