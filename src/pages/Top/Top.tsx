import { useState, useEffect, useContext, useReducer, useLayoutEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



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

// const Navbar:React.FC = () => {
//     return (
//         <div className="nav-bar">
//             <Link to="./pages/LogIn/LogIn" className="nav-link">LogIn</Link>
//             <Link to= './pages/SignUp/SignUp' className="nav-link">SignUp</Link>
//         </div>
//     )
// }
// export default Navbar;




export function Top() {
    const navigate = useNavigate()
        const clickLogIn = async () => {
            navigate('/login')
        }
        const clickSignUp = async () => {
            navigate('/SignUp')
        }
    
    return (
        <div className="Button" >
            <div className="itemCenter" >
                <Button className="marginAuto" size="large"　sx={{m:"20em auto 5em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                variant="contained" disableElevation　onClick={clickLogIn}>
                &#x1F510;　　LogIn　　&#x1F511;
                </Button>
                <Button sx={{m:"0 auto 10em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                variant="contained" disableElevation onClick={clickSignUp}>
                &#x1F510;　　SignUp　　&#x1F510;;
                </Button>

            </div>
        </div>
    );
};
