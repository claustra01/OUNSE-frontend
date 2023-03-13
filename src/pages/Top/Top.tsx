import { useState, useEffect, useContext, useReducer, useLayoutEffect } from 'react';
import Button from '@mui/material/Button';


const useWindowSize = () => {
    const [size, setSize] = useState(0)
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}



export function Top() {
    
    return (
        <div className="Button" >
            <div className="itemCenter" >
                <Button className="marginAuto" size="large"　sx={{m:"20em auto 5em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                variant="contained" disableElevation>
                LogIn
                </Button>
                <Button sx={{m:"0 auto 10em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                variant="contained" disableElevation>
                SignUp
                </Button>

            </div>
        </div>
    );
};