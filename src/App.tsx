import { useState, useEffect} from 'react';
import { useCookies } from "react-cookie";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import axios from 'axios'

import './App.css';

import Top from './pages/Top/Top'
import LogIn from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home';

function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [cookie] = useCookies(['token']);

    useEffect(() => {
        const f = async () => {
            const res = await axios.get('auth', {params: {token: cookie['token']}})
            const obj = JSON.parse(JSON.stringify(res));
            console.log(obj.data)
            setIsAuth(obj.data === 'OK')
        }
        f()
    })

    return (   
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuth ? <Navigate replace to="/home" /> : <Top/>} />
                <Route path="/login" element={isAuth ? <Navigate replace to="/home" /> : <LogIn/>} />
                <Route path="/signup" element={isAuth ? <Navigate replace to="/home" /> : <SignUp/>} />
                <Route path="/home" element={isAuth ? <Home/> : <Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
