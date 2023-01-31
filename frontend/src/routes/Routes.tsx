import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage, ContaPage, LoginPage, NovaContaPage, SobrePage, Error, ModalPage } from '../pages'
import { ValidateContext } from '../context/ValidateContext';
import { Children } from '../types';
import { ErrorContext } from '../context';


function RoutesApp() {

    return (
        <Routes>
            <Route path='/' element={<Private><HomePage /></Private>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/sobre' element={<SobrePage />} />
            <Route path='/criar' element={<NovaContaPage />} />
            <Route path='/conta/:id' element={<Private><ContaPage /></Private>} />
            <Route path='/conta/modal/:id' element={<Private><ModalPage/></Private>} />
            <Route path='/error' element={<PrivateError><Error /></PrivateError>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}

function Private({ children }: Children) {
    const { validate } = useContext(ValidateContext);

    if (!validate) return <Navigate to='/login' />

    return children
}

function PrivateError({ children }: Children){

    const { showErrorInfo } = useContext(ErrorContext);    
    
    return (<> {showErrorInfo ? children : <Navigate to='/' />} </>)
    
}

export default RoutesApp;