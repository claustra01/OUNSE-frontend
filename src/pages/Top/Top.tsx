import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import LogoImage from "./ounce.png"
import Grid from '@mui/material/Grid'; 
import Header from "../../components/Header";
function Top() {
    const navigate = useNavigate()
    const redirectLogIn = () => {

        navigate('/login')
    }
    const redirectSignUp = () => {
        navigate('/signup')
    }
    return (
        <div className="wrapper" style={{height: "100vh"}}>
            <Header/>
            <div style={{justifyContent:"centern" , alignItems: "center", display:"flex", flexDirection: "column"}}>
                
                    <img src={LogoImage} alt="ounce" width="200px"></img>
                  
            
                <div className="itemCenter" >
                    <Button
                        className="marginAuto"
                        size="large"　sx={{m:"0 auto 2em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                        variant="contained" disableElevation
                        style={{backgroundColor: "#00A83C"}}
                        onClick={redirectLogIn}
                    >
                        ● 　　　　　　　　LogIn　　　　　　　　●
                    </Button>
                    <Button
                        sx={{m:"0 auto 3em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                        style={{backgroundColor: "#00A83C"}}
                        variant="contained" disableElevation
                        onClick={redirectSignUp}
                    >
                        ● 　　　　　　　　　SignUp　　　　　　　　　●
                    </Button>

                </div>
            </div>
        </div>
    );
};
export default Top