import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TeamName from "./mastdonteamlogo.png";
import { Button } from '@mui/material';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../App';

export default function Header() {

    const {isAuth} = useContext(AuthContext)

    function LogOutButton(auth: boolean) {
        if (auth) {
            return (
                <Button 
                    variant="contained" 
                    sx={{
                        m: "-6em 2em 0 90%",
                        width:"7%",
                        justifyContent:"center",
                        textAlign: "center",
                    }}
                    onClick={clickLogOut}
                    style={{ backgroundColor: "#388e3c" }}
                >Logout</Button> 
            )
        }
        return (<></>)
    }

    // ログアウト
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate()

    const clickLogOut = () => {
        removeCookie("token");
        navigate('/')
    }
  
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       style={{backgroundColor: "#0DA242", height:"50px"}}>
      
      <img src={TeamName} alt="" width="120px"  text-align= "left">
      </img>
  
      </AppBar>

      {LogOutButton(isAuth)}
        
    </Box>
  );
}