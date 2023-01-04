import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;