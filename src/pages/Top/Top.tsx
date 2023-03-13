import Button from '@mui/material/Button';

function Top() {

    return (
        <div className="Button" >
            <div className="itemCenter" >
                <Button className="marginAuto" size="large"　sx={{m:"20em auto 5em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                variant="contained" disableElevation>
                &#x1F510;　　LogIn　　&#x1F511;
                </Button>
                <Button sx={{m:"0 auto 10em auto", height: "5em", justifyContent: "center", alignItems: "center", display:"flex"}}
                variant="contained" disableElevation>
                SignUp
                </Button>

            </div>
        </div>
    );
};

export default Top