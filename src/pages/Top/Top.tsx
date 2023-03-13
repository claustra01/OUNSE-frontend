import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

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
            <div className="itemCenter" >
                <Button
                    className="marginAuto"
                    size="large"　sx={{m:"20em auto 5em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                    variant="contained" disableElevation
                    onClick={redirectLogIn}
                >
                    &#x1F510;　　LogIn　　&#x1F511;
                </Button>
                <Button
                    sx={{m:"0 auto 10em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                    variant="contained" disableElevation
                    onClick={redirectSignUp}
                >
                    SignUp
                </Button>

            </div>
        </div>
    );
};

export default Top