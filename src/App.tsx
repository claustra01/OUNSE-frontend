import React, { useState } from 'react';
import './App.css';

function App() {

    const [connectionStatus, setConnectionStatus] = useState("")

    const ConnectionTest = () => {
        setConnectionStatus("Clicked!")
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
