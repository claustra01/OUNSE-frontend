import { useState, useEffect, createContext } from 'react';
import { useCookies } from "react-cookie";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import axios from 'axios'

import './App.css';

import Top from './pages/Top/Top'
import LogIn from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

type User = {
    userId: string,
    userName: string
}

type Auth = {
    isAuth: boolean
}

export const AuthContext = createContext({} as Auth)
export const UserContext = createContext({} as User)

function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [cookie] = useCookies(['token']);

    useEffect(() => {
        
        // 認証
        const auth = async () => {
            const res = await axios.get('auth', {params: {token: cookie['token']}})
            const obj = JSON.parse(JSON.stringify(res));
            console.log(obj.data)
            setIsAuth(obj.data === 'OK')
        }

        // ユーザー情報取得
        const getUserInfo = async () => {
            const res = await axios.get('getuser', {params: {token: cookie['token']}})
            const obj = JSON.parse(JSON.stringify(res));
            console.log(obj.data)
            setUserId(obj.data.UserId)
            setUserName(obj.data.Name)
        }

        auth()
        if (isAuth) getUserInfo()
    })

    return (
        <AuthContext.Provider value={{isAuth}}>
            <UserContext.Provider value={{userId, userName}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={isAuth ? <Navigate replace to="/home" /> : <Top/>} />
                        <Route path="/login" element={isAuth ? <Navigate replace to="/home" /> : <LogIn/>} />
                        <Route path="/signup" element={isAuth ? <Navigate replace to="/home" /> : <SignUp/>} />
                        <Route path="/home" element={isAuth ? <Home/> : <Navigate replace to="/" />} />
                        <Route path="/profile" element={isAuth ? <Profile/> : <Navigate replace to="/" />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
