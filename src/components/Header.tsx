import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 , height: 20, backgroundColor:"#0DA242" }}>
      <AppBar position="static">
        <Toolbar>
          ounce 
        </Toolbar>
      </AppBar>
    </Box>
  );
}