import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Workers from './pages/Workers';
import Recuriters from './pages/Recuriters';

// eslint-disable-next-line
const Admin = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Workers />}></Route>
                <Route path='/recuriters' exact element={<Recuriters />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Admin