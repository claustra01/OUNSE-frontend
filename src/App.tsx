import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [connectionStatus, setConnectionStatus] = useState("")

    const ConnectionTest = () => {
        async function ConnectionTest() {
            const res = await axios.get("http://localhost:1323/")
            console.log(res)
            setConnectionStatus(res.data)
        }
        ConnectionTest()
    }
      
    return (
        <div className="App">
            <button onClick={ConnectionTest}>Button</button>
            <br/>
            {connectionStatus}
        </div>
    );
}

export default App;
