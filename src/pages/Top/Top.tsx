import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import LogoImage from "./ounce.png"
import Grid from '@mui/material/Grid';

function Top() {

    const navigate = useNavigate()
    const redirectLogIn = () => {
        navigate('/login')
    }
    const redirectSignUp = () => {
        navigate('/signup')
    }
    return (
        <div className="Button" >
            <Grid item  sx={{m: "2em 10em 0 35em" }}>
                <img src={LogoImage} alt="ounce" width="350px"/>
            </Grid>
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
    );
};
export default Top