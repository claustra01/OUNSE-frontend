
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TeamName from "./mastdonteamlogo.png";

export default function Header() {
  
  return (
    

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       style={{backgroundColor: "#0DA242", height:"40px"}}>
      
      <img src={TeamName} alt=""  width="120px"  text-align= "left">
      </img>
  
      </AppBar>
    </Box>
  );
}