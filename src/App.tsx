import { useState, useEffect} from 'react';
import { useCookies } from "react-cookie";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
                <Route path="/" element={<Top/>} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
