import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import { Top } from './pages/Top/Top'
import { Home } from './pages/Home/Home'
import { LogIn } from './pages/LogIn/LogIn'
import { SignUp } from './pages/SignUp/SignUp'

function App() {

    const [connectionStatus, setConnectionStatus] = useState('')

    const ConnectionTest = () => {
        async function ConnectionTest() {
            const res = await axios.get('initialization')
            console.log('initialization')
            console.log(res)
            setConnectionStatus(res.data)
        }
        ConnectionTest()
    }

    const CheckButton = () => {
        return (
            <div className="App">
                <button onClick={ConnectionTest}>Button</button>
                <br/>
                {connectionStatus}
            </div>
        )
    }
      
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><CheckButton/><Top/></>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
